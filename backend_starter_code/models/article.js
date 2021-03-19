// Require necessary NPM packages
const mongoose = require('mongoose');

// Define Article Schema
const articleSchema = new mongoose.Schema({
  name:{ type: String, required: true },
  category:{ type: String, required: true },
  description:{ type: String, required: true },
  brand:{ type: String, required: true },
  numReviews:{ type: String, required: true },
  rating:{ type: String, required: true },
  countInStock:{ type: String, required: true },
  price:{ type: String, required: true },
  image:{type: image, default: true},
}, {
  timestamps: true,
});

// Compile our Model based on the Schema
const Article = mongoose.model('Article', articleSchema);

// Export our Model for use
module.exports = Article;