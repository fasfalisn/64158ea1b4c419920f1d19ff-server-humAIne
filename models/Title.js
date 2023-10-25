
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const titleSchema = new Schema({
Underscoreid:String , 


title:String 



})

module.exports = {
  Title : mongoose.model('title', titleSchema),
}

