const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

let Cheatsheet = require('./cheatsheet.model');

app.use(cors());
app.use(bodyParser.json());

// let mongodbURI = process.env.mongodburi || "127.0.0.1";
let mongodbURI = process.env.MONGO_HOST;
mongoose.connect('mongodb://mongo:27017/cheatsheets', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

const cheatsheetRoutes = express.Router();

app.use('/cheatsheets', cheatsheetRoutes);

cheatsheetRoutes.route('/').get(function(req, res) {
    Cheatsheet.find(function(err, cheatsheets) {
        if (err) {
            console.log(err);
        } else {
            res.json(cheatsheets);
        }
    });
});

cheatsheetRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Cheatsheet.findById(id, function(err, cheatsheet) {
        res.json(cheatsheet);
    });
});

cheatsheetRoutes.route('/add').post(function(req, res) {
    let cheatsheet = new Cheatsheet(req.body);
    cheatsheet.save()
        .then(cheatsheet => {
            res.status(200).json({'cheatsheet': 'cheatsheet added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new cheatsheet failed');
        });
});

cheatsheetRoutes.route('/update/:id').post(function(req, res) {
    Cheatsheet.findById(req.params.id, function(err, cheatsheet) {
        if (!cheatsheet)
            res.status(404).send("data is not found");
        else
            cheatsheet.cheatsheet_description = req.body.cheatsheet_description;
            cheatsheet.cheatsheet_responsible = req.body.cheatsheet_responsible;
            cheatsheet.cheatsheet_priority = req.body.cheatsheet_priority;
            cheatsheet.cheatsheet_completed = req.body.cheatsheet_completed;

            cheatsheet.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

cheatsheetRoutes.route('/delete').delete(function(req, res) {
    Cheatsheet.remove({}, function(err, cheatsheet) {
        res.status(200).send("deleted");
    });
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});