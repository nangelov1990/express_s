const MongoClient = require('mongodb').MongoClient

// Connection URL
const url = 'mongodb://localhost:27017/'

// Database name
const dbName = 'mongo_test'

const client = new MongoClient(url)

client
  .connect(err => {
    if (err) console.error(err)
    console.log('MongoDB up and running!')
    const db = client.db(dbName)

    const cats = db.collection('cats')
    cats
      // .insertMany([
      //   { name: 'Hiko' },
      //   { name: 'Miko' }
      // ])
      .find({ name: 'Hiko' })
      .toArray()
      .then(result => {
        console.log(result)
      })

    client.close()
  })
