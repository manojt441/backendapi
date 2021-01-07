const express = require('express');
const { ObjectId } = require('mongodb');
var router = express.Router();

var { employee } = require('../models/employee');


router.get('/', (req, res) => {


    employee.find((err, docs) => {
        if (!err) {

            res.send(docs);


        } else {

            consoyle.log('Something went wrong/No records Present' + JSON.stringify(err, undefined, 2));
        }

    });



});

// Get Single Record By ID

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('no records with given info');

    employee.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else {
            console.log('Something went wrong/No records Present' + JSON.stringify(err, undefined, 2));
        }
    });

});


router.post('/save', (req, res) => {

    console.log(req.body);
    var emp = new employee({
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary,
        designation: req.body.designation,

    });
    emp.save((err, doc) => {

        if (!err) {

            res.send(doc);


        } else {

            console.log('Something went wrong/No records Present' + JSON.stringify(err, undefined, 2));
        }
    });

});


router.put('/update/`:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('no records with given info');

    console.log(req.body);
    var emp = new employee({
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary,
        designation: req.body.designation,

    });
    employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, { upsert: true }, (err, doc) => {


    });


});

router.delete('/delete/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('no records with given info');

    employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else {
            console.log('Something went wrong/No records Present' + JSON.stringify(err, undefined, 2));
        }
    });

});




module.exports = router;