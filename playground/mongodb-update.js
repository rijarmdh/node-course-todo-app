const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, db) => {
    if (err) {
      console.log('server rejected');
    } else {
      console.log('connected to server');
    }

    // db.collection('Todos')
    //   .updateOne({ completed: true }, { $set: { text: 'Hallo Gays' } })
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));

    db.collection('Users')
      .findOneAndUpdate(
        { _id: new ObjectID('5ba637b9018db4227c59026c') },
        {
          $inc: { age: +20 },
          $set: { 'pekerjaan.lama': 'mobile Specialist' }
        },
        { returnOriginal: false }
      )
      .then(result => console.log(result))
      .catch(err => console.log(err));

    db.close();
  }
);
