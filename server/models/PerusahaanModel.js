const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//BUAT PerusahaanSchema DB
const PerusahaanSchema = new Schema({
  nama: {
    type: String,
    required: true
  },
  email: {
    required: true,
    type: String,
    minlength: 6,
    trim: true,
    lowercase: true
  }
});

//BUAT PerusahaanModel / Collection / Field/ Table
const perusahaanModel = mongoose.model('perusahaan', PerusahaanSchema);

module.exports = {
  perusahaanModel
};
