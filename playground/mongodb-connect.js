const MongoClient = require('mongodb').MongoClient;

//koneksi database
MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, db) => {
    if (err) {
      console.log('unable to connect :', err);
    } else {
      console.log('Connect to MongoDB server');
    }

    //koleksion adalah Tabel
    db.collection('Todos').insertOne(
      {
        text: 'something to do',
        completed: false
      },
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(JSON.stringify(result.ops, undefined, 2));
        }
      }
    );

    var dataUser = {
      name: 'Ahmad',
      age: 23,
      location: 'Balikpapan',
      pekerjaan: 'mahasiswa'
    };

    const fx = (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(JSON.stringify(result.ops, undefined, 2));
      }
    };

    db.collection('Users').insertOne(dataUser, fx);
    db.close();
  }
);
