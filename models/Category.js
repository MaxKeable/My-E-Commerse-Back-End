const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // Define the 'id' column
    id: {
      type: DataTypes.INTEGER, // Set the data type to INTEGER
      allowNull: false, // Prevent null values
      primaryKey: true, // Set as primary key
      autoIncrement: true, // Automatically increment value
    },
    // Define the 'category_name' column
    category_name: {
      type: DataTypes.STRING, // Set the data type to STRING
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
