const express = require('express');
const router = express.Router();
const softwareController = require('../controllers/softwareController');
const { protect, admin } = require('../middleware/auth');
const upload = require('../middleware/upload');

router.get('/', softwareController.getAllSoftware);
router.get('/search', softwareController.searchSoftware);
router.get('/:id', softwareController.getSoftwareById);
router.post('/', protect, admin, upload.single('logo'), softwareController.createSoftware);
router.put('/:id', protect, admin, upload.single('logo'), softwareController.updateSoftware);
router.delete('/:id', protect, admin, softwareController.deleteSoftware);

module.exports = router;
