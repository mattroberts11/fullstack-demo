// create db
const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/bug-tracker', {useNewUrlParser: true, useUnifiedTopology: true});
