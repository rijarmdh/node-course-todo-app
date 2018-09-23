const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');
const { userModel } = require('./models/UserModel');
const { perusahaanModel } = require('./models/PerusahaanModel');
const { ObjectID } = require('mongoose');
const _ = require('lodash');
const port = process.env.PORT || 3000;

app.use(bodyParser.json()); //parsing body
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// app.use(urlencodedParser);

//landing page
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'this is get status api'
  });
});

//POST
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

//GET LISTS
app.get('/perusahaan/', (req, res) => {
  const getData = perusahaanModel.find().then(response => {
    console.log(response);
    res.status(200).json({
      message: 'data fetched',
      data: response
    });
  });
});

//GET ONE LIST
app.get('/perusahaan/:id', (req, res) => {
  const idPerusahaan = req.params.id;
  const isIdValid = mongoose.Types.ObjectId.isValid(idPerusahaan); // validating Id
  console.log(isIdValid);

  if (isIdValid) {
    perusahaanModel.findById(idPerusahaan).then(result => {
      res.status(200).json({
        message: result
      });
    });
  } else {
    res.status(401).json({
      message: 'Unauthorized',
      data: req.params.id
    });
  }
});

app.patch('/perusahaan/:id/update', (req, res) => {
  const id = req.params.id;
  const isIdValid = mongoose.Types.ObjectId.isValid(id);

  if (isIdValid) {
    perusahaanModel
      .findByIdAndUpdate(
        id,
        {
          $set: {
            nama: 'ahmad syahriza ramadhan'
          }
        },
        { returnOriginal: false }
      )
      .then(response =>
        res.status(203).json({
          message: response
        })
      )
      .catch(err => {
        res.status(400).json({
          message: err
        });
      });
  } else {
    res.status(500).json({
      message: 'cannot find id given'
    });
  }
});

//DELETE
app.delete('/perusahaan/:id/delete', (req, res) => {
  const id = req.params.id;
  const isIdValid = mongoose.Types.ObjectId.isValid(id);

  if (isIdValid) {
    //findOneAndRemove
    //findByIdAndRemove
    perusahaanModel
      .findByIdAndRemove(id)
      .then(response => {
        res.status(200).json({
          message: response
        });
      })
      .catch(err => {
        res.status(400).json({
          message: err
        });
      });
  } else {
    res.status(200).json({
      message: 'error occured'
    });
  }
});

app.listen(port, () => {
  console.log('connected to server with localhost:', port);
});
