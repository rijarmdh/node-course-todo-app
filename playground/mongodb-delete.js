const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, db) => {
    if (err) {
      console.log('Server Rejected');
    } else {
      console.log('Connected To The Server');
    }

    //delete One
    // db.collection('Todos')
    //   .deleteOne({ text: 'just do' })
    //   .then(result => console.log(result.result))
    //   .catch(err => console.log('err : ', err));

    //delete Many
    // db.collection('Users')
    //   .deleteMany({ name: 'Ahmad' })
    //   .then(result => console.log({ result }))
    //   .catch(err => console.log(err));

    // FindOneAndDelete;
    db.collection('Users')
      .findOneAndDelete({ _id: new ObjectID('5ba53719e3d24715d4f4d1b5') })
      .then(result => console.log({ result }))
      .catch(err => console.log(err));

    db.close();
  }
);
