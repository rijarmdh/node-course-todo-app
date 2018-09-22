const { MongoClient } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, db) => {
    if (err) {
      console.log('error');
    } else {
      console.log('connected to server');
    }

    const _DATA_LIST_ = result => console.log('fetching data', result.text);

    db.collection('Todos')
      .find()
      .toArray()
      .then(res => res.map(_DATA_LIST_))
      .catch(err => console.log(err));

    db.close();
  }
);
