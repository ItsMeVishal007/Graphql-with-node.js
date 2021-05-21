const mongoose = require('mongoose');

const connection = {};

async function dbconnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect('mongodb+srv://drcyberx:<password>@cluster0.yyra3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected)
}

module.exports = dbconnect;