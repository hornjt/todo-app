/**
 * Created by Jon on 1/9/16.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todoApp');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema;

var TodoSchema = new Schema({
   //number: {
   //    type: Number
   //},
   todo: {
       type: String,
       required: true
   }
});

module.exports = mongoose.model('TodoList', TodoSchema);