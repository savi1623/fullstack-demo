// create db
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {});

const bugSchema = new mongoose.Schema({
  bugDescription: String,
  reportedBy: String,
  assignedTo: String,
  threatLevel: String,
});

const Bug = mongoose.model('Bug', bugSchema);

module.exports = Bug;
