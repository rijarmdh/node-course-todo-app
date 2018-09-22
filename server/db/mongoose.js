const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoAppMongoose');

module.exports = {
  mongoose
};
// //Input Data
// const perusahaanEntry = new perusahaanModel({
//   nama: 123123,
//   email: 'BUMA@gmal.com'
// });
// const profile = new userModel({
//   text: 'hallo ahmad'
// });

// //save data
// try {
//   perusahaanEntry
//     .save()
//     .then(res => console.log(res))
//     .catch(err => console.log('error ', err));
//   //   profile.save().then(res => console.log(res));
// } catch (error) {
//   console.log(error);
// }
