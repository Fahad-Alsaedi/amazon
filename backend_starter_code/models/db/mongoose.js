
const mongoose = require('mongoose');
// Require DB Configuration File
const db_url = require('./models/db/db');

// Establish Database Connection
mongoose.connect(db_url, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Mongo');
});
module.exports={
mongoose
}
