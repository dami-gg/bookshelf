'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
  isbn: Number,
  title: String,
  author: String,
  coverImageUrl: String,
  category: String,
  read: Boolean
});

module.exports = mongoose.model('Book', BookSchema);
