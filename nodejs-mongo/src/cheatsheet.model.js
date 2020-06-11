const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Cheatsheet = new Schema({
    cheatsheet_description: {
        type: String
    },
    cheatsheet_responsible: {
        type: String
    },
    cheatsheet_priority: {
        type: String
    },
    cheatsheet_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Cheatsheet', Cheatsheet);