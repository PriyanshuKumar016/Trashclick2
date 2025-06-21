const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    // Mongoose schema will be defined here
});

module.exports = mongoose.model('Report', reportSchema); 