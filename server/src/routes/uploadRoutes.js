const router = require('express').Router();
const path = require('path');
const upload = require('../middleware/upload');
const auth = require('../middleware/auth');
const { ErrorHandler } = require('../utils/error');

/**
 * @route   POST api/upload/avatar
 * @desc    Upload avatar image
 * @access  Private
 */
router.post('/avatar', auth(), upload.single('avatar'), (req, res) => {
  if (!req.file) {
    throw new ErrorHandler(400, 'No file uploaded');
  }

  // Return the file URL
  // In production, you might want to use a CDN or cloud storage
  const fileUrl = `/uploads/${req.file.filename}`;
  
  res.json({
    url: fileUrl,
    filename: req.file.filename,
  });
});

module.exports = router;

