const mongoose = require('mongoose');

var employee = mongoose.model('employee', {
    name: { type: String },
    email: { type: String },
    salary: { type: String },
    designation: { type: String }
});


module.exports = { employee: employee };