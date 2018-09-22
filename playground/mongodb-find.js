const { MongoClient } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, db) => {
    if (err) {
      console.log('error');
    } else {
      console.log('connected to server');
    }

    db.collection('Todos')
      .find({ completed: true, text: 'just do' })
      .toArray()
      .then(res => console.log('fetching data', res))
      .catch(err => console.log(err));

    db.close();
  }
);
