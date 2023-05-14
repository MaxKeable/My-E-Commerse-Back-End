// Import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define relationships between models


Product.belongsTo(Category, {
  foreignKey: 'category_id', // The foreign key is defined in the Product model as 'category_id'
});

// Categories have many products
Product.belongsToMany(Tag, {
  through: ProductTag, // The ProductTag model is the bridge between the Product and Tag models
  foreignKey: 'product_id', // The foreign key is defined in the ProductTag model as 'product_id'
});

// Tags belong to many products
Tag.belongsToMany(Product, {
  through: ProductTag, // The ProductTag model is the bridge between the Product and Tag models
  foreignKey: 'tag_id', // The foreign key is defined in the ProductTag model as 'tag_id'
});

// A category has many products
Category.hasMany(Product, {
  foreignKey: 'category_id', // The foreign key is defined in the Product model as 'category_id'
});

// Export models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};