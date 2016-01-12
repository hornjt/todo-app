/**
 * Created by Jon on 1/9/16.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todoApp');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to MongoDb");
});

var Schema = mongoose.Schema;

var TodoListItemSchema = new Schema({
   //number: {
   //    type: Number
   //},
   todoItem: {
       type: String,
       required: true
   },
    editing: {
        type: Boolean,
        default: false
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('TodoListItem', TodoListItemSchema);