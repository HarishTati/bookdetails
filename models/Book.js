var mongoose = require('mongoose');
//Defining Schema
var bookSchema = mongoose.Schema({


    Bid: {
        type: String,
        required: true
    },

    Bname: {
        type: String,
        required: true
    },

    Cost: {
        type: Number,
        required: true
    },

    Author: {
        type: String,
        required: true
    },

    Publications: {
        type: String,
        required: true
    }
});

var bookpackage = module.exports = mongoose.model('bookcollection', bookSchema); //Binding schema

module.exports.addBook = function(data, callback) {
    bookpackage.create(data, callback);
}
module.exports.getBookByField = function(ret, callback) {
    bookpackage.find({Bname:ret}, callback);
}
module.exports.updateBook = function(Bname, data, options, callback) {
    var query = {
        Bname: Bname
    };
    var update = {
        Bid: data.Bid,
        Bname: data.Bname,
        Cost: data.Cost,
        Author: data.Author,
        Publications: data.Publications
    }
    bookpackage.findOneAndUpdate(query, update, options, callback);
}
module.exports.removeBook = function (Bname, callback) {
    var query = {
        Bname: Bname
    };
    bookpackage.remove(query, callback);
}
module.exports.getDetails = function(callback) {
    bookpackage.find(callback);
}
