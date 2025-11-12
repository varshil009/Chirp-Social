/**
 * Simple script to seed the database
 * Run this with: node seed-database.js
 * 
 * Make sure MongoDB is running and the database connection is configured in .env
 */

require('dotenv').config();

// Import all models so they're registered with mongoose
require('./src/components/users/user.model');
require('./src/components/profiles/profile.model');
require('./src/components/tweets/tweet.model');

const { connectDB } = require('./src/config/db');
const { seedDB } = require('./src/config/db');

const seedDatabase = async () => {
  try {
    console.log('🔌 Connecting to database...');
    await connectDB();
    console.log('✅ Connected to database');
    
    console.log('🌱 Seeding database...');
    await seedDB();
    
    console.log('✅ Database seeded successfully!');
    console.log('\n📝 You can now log in with these accounts:');
    console.log('\nUser 1:');
    console.log('  Email: lawrence66@gmail.com');
    console.log('  Username: terence_jast');
    console.log('  Password: password123');
    console.log('\nUser 2:');
    console.log('  Email: orie.bode@yahoo.com');
    console.log('  Username: piper_schowalter');
    console.log('  Password: password123');
    console.log('\nAdmin:');
    console.log('  Email: liana.hauck@gmail.com');
    console.log('  Username: jeff48');
    console.log('  Password: password123');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error.message);
    console.error(error);
    process.exit(1);
  }
};

seedDatabase();

