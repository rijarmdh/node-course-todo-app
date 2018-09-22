const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');
const { userModel } = require('./models/UserModel');
const { perusahaanModel } = require('./models/PerusahaanModel');

app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// app.use(urlencodedParser);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'this is get status api'
  });
});

app.post('/perusahaan/post', urlencodedParser, (req, res) => {
  console.log(req.body);
  const { body } = req;

  const perusahaanPost = new perusahaanModel({
    nama: body.nama,
    email: body.email
  });

  perusahaanPost
    .save()
    .then(response => {
      res.status(200).json({
        message: 'data stored',
        body: response
      });
      console.log(res);
    })

    .catch(err => {
      res.status(400).json({
        message: 'Error',
        body: err
      });
      console.log(err);
    });
});

app.listen(3000, res => {
  console.log('connected to server with localhost:', 3000);
});
