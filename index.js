const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (error, client) => {
  if (error) {
    throw error;
  }

  const db = client.db('example');
  const collection = db.collection('documents');

  const stream = collection.watch([], {
    fullDocument: 'updateLookup'
  });

  stream.on('change', (change) => {
    console.log(change);
  });
});
