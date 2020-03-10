const mongodb = require('mongodb').MongoClient
const connection = 'mongodb://localhost:27017/mongo_test'

mongodb
  .connect(connection)
  .then(db => {
    console.log('MongoDB up and running!')
  })
  .catch(console.log)
