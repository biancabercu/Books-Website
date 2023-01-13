const express = require('express');

const TicketsRepository = require('../../Infrastructure/PostgreSQL/Repository/TicketsRepository.js');
const ServerError = require('../Models/ServerError.js');
const { TicketPostBody, TicketPutBody, TicketResponse } = require('../Models/Ticket.js');
const AuthorizationFilter = require('../Filters/AuthorizationFilter.js');
const RoleConstants = require('../Constants/Roles.js');
const RoomsRepository = require('../../Infrastructure/PostgreSQL/Repository/RoomsRepository.js');
const ResponseFilter = require('../Filters/ResponseFilter.js');

const Router = express.Router();

 Router.post('/', AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN, RoleConstants.USER), async (req, res) => {

    console.log("am intrat in post" + JSON.stringify(req.body));
    const ticketBody = new TicketPostBody(req.body);
    
    const ticket = await TicketsRepository.addAsync(ticketBody.nume, ticketBody.email, ticketBody.movie_id, ticketBody.movie_name, 
                ticketBody.row_nr, ticketBody.seat_nr, ticketBody.room_id, ticketBody.date_time, 
                ticketBody.hour_time);  
    const room = await RoomsRepository.addAsync(ticketBody.seat_nr, ticketBody.row_nr, ticketBody.room_id);
    ResponseFilter.setResponseDetails(res, 201, new TicketResponse(ticket), req.originalUrl);
});

Router.get('/', async (req, res) => {

    const tickets = await TicketsRepository.getAllAsync();
   // res.send(`Filmele din bd sunt ${JSON.stringify(movies)}`);
    ResponseFilter.setResponseDetails(res, 200, tickets.map(ticket => new TicketResponse(ticket)));
});

Router.get('/:id', async (req, res) => {
    let {
        id
    } = req.params;

    id = parseInt(id);

    if (!id || id < 1) {
        throw new ServerError("Id should be a positive integer", 400);
    }
       
    const ticket = await TicketsRepository.getByIdAsync(id);
    
    if (!ticket) {
        throw new ServerError(`Ticket with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 200, new TicketResponse(ticket));
});


Router.get('/nume/:name', async (req, res) => {
    let {
        name
    } = req.params;

   

    if (!name) {
        throw new ServerError("Name doesn' exist", 400);
    }
       
    const tickets = await TicketsRepository.getByNameAsync(name);
    
    if (!tickets) {
        throw new ServerError(`Tickets for the name ${name} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 200, tickets.map(ticket => new TicketResponse(ticket)));
});

Router.put('/:id', AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN), async (req, res) => {

    const ticketBody = new TicketPutBody(req.body, req.params.id);
    var id = req.params.id;
    const ticket = await TicketsRepository.updateByIdAsync(ticketBody.Id, ticketBody.nume, ticketBody.email, ticketBody.movie_id, ticketBody.movie_name, 
        ticketBody.row_nr, ticketBody.seat_nr, ticketBody.room_id, ticketBody.date_time, 
        ticketBody.hour_time);
    
    const room = await RoomsRepository.updateByIdAsync(ticketBody.room_id, ticketBody.seat_nr, ticketBody.row_nr, ticketBody.room_id);
    if (!ticket) {
        throw new ServerError(`Ticket with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 200, new TicketResponse(ticket));
});
Router.delete('/:id', AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN), async (req, res) => {
    const {
        id
    } = req.params;

    if (!id || id < 1) {
        throw new ServerError("Id should be a positive integer", 400);
    }
    
    const ticket = await TicketsRepository.deleteByIdAsync(parseInt(id));
    
    if (!ticket) {
        throw new ServerError(`Ticket with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 204, "Entity deleted succesfully");
});

module.exports = Router;