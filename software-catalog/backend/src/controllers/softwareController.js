const Software = require('../models/Software');

// Get all software
exports.getAllSoftware = async (req, res) => {
  try {
    const software = await Software.find()
      .populate('category', 'name')
      .populate('dependencies.software', 'name version');

    res.status(200).json(software);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get software by ID
exports.getSoftwareById = async (req, res) => {
  try {
    const software = await Software.findById(req.params.id)
      .populate('category', 'name description')
      .populate('dependencies.software', 'name version');

    if (!software) {
      return res.status(404).json({ message: 'Software not found' });
    }

    res.status(200).json(software);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new software
exports.createSoftware = async (req, res) => {
  try {
    const software = new Software(req.body);

    // If logo was uploaded
    if (req.file) {
      software.logoUrl = `/uploads/${req.file.filename}`;
    }

    const savedSoftware = await software.save();
    res.status(201).json(savedSoftware);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update software
exports.updateSoftware = async (req, res) => {
  try {
    // If logo was uploaded
    if (req.file) {
      req.body.logoUrl = `/uploads/${req.file.filename}`;
    }

    const software = await Software.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!software) {
      return res.status(404).json({ message: 'Software not found' });
    }

    res.status(200).json(software);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete software
exports.deleteSoftware = async (req, res) => {
  try {
    const software = await Software.findByIdAndDelete(req.params.id);

    if (!software) {
      return res.status(404).json({ message: 'Software not found' });
    }

    res.status(200).json({ message: 'Software deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search software
exports.searchSoftware = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    const software = await Software.find(
      { $text: { $search: query } },
      { score: { $meta: 'textScore' } }
    )
      .sort({ score: { $meta: 'textScore' } })
      .populate('category', 'name');

    res.status(200).json(software);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
