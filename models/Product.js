const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: String
});

module.exports = mongoose.model('Product', productSchema);
