const mongoose = require('mongoose')
const connection = 'mongodb://localhost:27017/mongoosedb'

const Cat = mongoose.model('Cat', {
  name: String,
  age: Number
})

mongoose
  .connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB up and running!')

    const cat = new Cat({
      name: 'Miki',
      age: 'a'
    })

    cat
      .save()
      .catch(console.error)
      .then(console.log)
  })
