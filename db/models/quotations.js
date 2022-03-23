

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var QuotationSchema = new Schema({
  item: String,
  price: Number,
  qty: Number
});

//Export function to create "ProductSchema" model class
module.exports = mongoose.model('Quotation', QuotationSchema );