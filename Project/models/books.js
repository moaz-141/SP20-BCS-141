const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: String,
  author: String,
  published: Date,
  pages: Number,
  price: Number,
  rating: Number,
  description: String,
  category: String,
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
