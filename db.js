var mongoose = require('mongoose');

// Connect to the db
mongoose.connect("mongodb://localhost:27017/crudAPI", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, function(err, db) {

    if (err) throw err;

    else console.log('success')

    //Write databse Insert/Update/Query code here..

});

module.exports = mongoose;