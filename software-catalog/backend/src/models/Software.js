const mongoose = require('mongoose');

const softwareSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  version: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  logoUrl: {
    type: String,
    default: '/uploads/default-software.png'
  },
  publisher: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    default: Date.now
  },
  licenseType: {
    type: String,
    required: true
  },
  licenseExpiry: {
    type: Date
  },
  systemRequirements: {
    os: [String],
    processor: String,
    ram: String,
    diskSpace: String,
    additionalRequirements: String
  },
  installationInstructions: {
    type: String
  },
  documentationUrl: {
    type: String
  },
  supportContact: {
    type: String
  },
  tags: [String],
  dependencies: [{
    software: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Software'
    },
    version: String,
    isRequired: Boolean
  }]
}, {
  timestamps: true
});

// Add text index for search functionality
softwareSchema.index({ name: 'text', description: 'text', tags: 'text' });

const Software = mongoose.model('Software', softwareSchema);

module.exports = Software;
