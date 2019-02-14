var mongoose = require('mongoose');
 // optional shortcut to the mongoose.Schema class
 var Schema = mongoose.Schema;

 var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date
        // default: function(){
        //     // var year = new Date().getFullYear()+1;
        //     // var month = new Date().getMonth()+1;
        //     // var day = new Date().getDate()
        //     // var hours = new Date().getHours();
        //     // var min = new Date().getMinutes();
        //     return new Date();
        // },
    }
 });    

 module.exports = mongoose.model('Flight', flightSchema);