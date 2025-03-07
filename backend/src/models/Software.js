const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Software extends Model {}

Software.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  version: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  licenseKey: {
    type: DataTypes.STRING
  },
  downloadUrl: {
    type: DataTypes.STRING
  },
  fileSize: {
    type: DataTypes.INTEGER
  },
  releaseDate: {
    type: DataTypes.DATE
  },
  requirements: {
    type: DataTypes.JSON
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  status: {
    type: DataTypes.ENUM('active', 'deprecated', 'maintenance'),
    defaultValue: 'active'
  }
}, {
  sequelize,
  modelName: 'Software',
  timestamps: true
});

module.exports = Software; 