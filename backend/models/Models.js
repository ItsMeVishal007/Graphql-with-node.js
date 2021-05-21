const mongoose = require('mongoose');

const FilmSchema = new mongoose.Schema({
  name: {
    type: String
  },
  year: {
    type: String
  }
})

// const Film = mongoose.model('film', FilmSchema)

module.exports = mongoose.models.Film ||  mongoose.model('Film' , FilmSchema);