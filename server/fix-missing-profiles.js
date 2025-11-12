/**
 * Script to create missing profiles for users who don't have one
 * Run this with: node fix-missing-profiles.js
 */

require('dotenv').config();

// Import all models so they're registered with mongoose
require('./src/components/users/user.model');
require('./src/components/profiles/profile.model');
require('./src/components/tweets/tweet.model');

const { connectDB } = require('./src/config/db');
const User = require('./src/components/users/user.model');
const Profile = require('./src/components/profiles/profile.model');

const fixMissingProfiles = async () => {
  try {
    console.log('🔌 Connecting to database...');
    await connectDB();
    console.log('✅ Connected to database');

    console.log('🔍 Finding users without profiles...');
    
    // Get all users
    const users = await User.find({});
    
    let createdCount = 0;
    
    for (const user of users) {
      const existingProfile = await Profile.findOne({ user: user._id });
      
      if (!existingProfile) {
        console.log(`📝 Creating profile for user: ${user.name} (${user.username})`);
        await Profile.create({ user: user._id });
        createdCount++;
      }
    }
    
    if (createdCount === 0) {
      console.log('✅ All users already have profiles!');
    } else {
      console.log(`✅ Created ${createdCount} missing profile(s)!`);
    }
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error fixing profiles:', error.message);
    console.error(error);
    process.exit(1);
  }
};

fixMissingProfiles();

