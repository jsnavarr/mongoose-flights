var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
  create,
  delete: deleteTicket
};

function create(req, res) {
    var ticket = new Ticket({seat: req.body.seat, price: req.body.price, flight: req.params.id});
    ticket.save(function(err){
        if(err) {
            console.log(err.message);
          } else {
            res.redirect('/flights/' + req.params.id);
          }
    })
}    

function deleteTicket(req, res) {
    console.log('trying to delete ticket');
    console.log('ticket id'+ req.params.id);
    Ticket.findById(req.params.id, function(err, ticket) {
        console.log('ticket '+ticket);
        res.redirect('/flights/' + req.params.id);
        });
  }
