const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//BUAT USER SCHEMA , DB BLUEPRINT
const User = new Schema({
  text: 'String',
  competed: 'Boolean',
  age: 'Number',
  address: 'String'
});

//BUAT userModel MODEL/TABLE/COLLECTION YANG ISINYA ADALAH User Schema
const userModel = mongoose.model('profile_users', User);

module.exports = {
  userModel
};
