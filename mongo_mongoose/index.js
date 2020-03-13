const mongoose = require('mongoose')
const connection = 'mongodb://localhost:27017/mongoosedb'

const Owner = mongoose.model('Owner', {
  name: { type: String, required: true }
})

mongoose
  .connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB up and running!')

    const owner = new Owner({
      name: "Miki's owner"
    })

    owner
      .save()
      .catch(console.error)
      .then(console.log)
  })
