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
    Ticket.findById(req.params.id, function(err, ticket) {
        var flight_id = ticket.flight; //to redirect to /flights/:id
        ticket.delete(function(err, ticket){
            if(err){
                console.log('error deleting ticket')
            } else {
                res.redirect('/flights/' + ticket.flight);
            }
        });
        });
  }
