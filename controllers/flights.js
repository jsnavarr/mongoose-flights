var Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function index(req, res) {
    Flight.find({}).sort({departs: 1}).exec(function(err, flights){
      res.render('flights/index', { flights });
    });
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', { title: 'Flight Details', flight });
  });
}

function create(req, res) {
    for (let key in req.body){
        if (req.body[key] === '') delete req.body[key];
    }
    var flight = new Flight(req.body);
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flights/new');
      console.log(flight);
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
    });
  }

function newFlight(req, res) {
    res.render('flights/new');
  }