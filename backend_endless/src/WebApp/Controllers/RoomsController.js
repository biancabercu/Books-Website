const express = require('express');
const ServerError = require('../Models/ServerError.js');
const AuthorizationFilter = require('../Filters/AuthorizationFilter.js');
const RoleConstants = require('../Constants/Roles.js');
const { RoomPostBody, RoomPutBody, RoomResponse } = require('../Models/Room.js');

const RoomsRepository = require('../../Infrastructure/PostgreSQL/Repository/RoomsRepository.js');
const ResponseFilter = require('../Filters/ResponseFilter.js');
const Router = express.Router();

Router.get('/', async (req, res) => {

    const rooms = await RoomsRepository.getAllAsync();
   // res.send(`Filmele din bd sunt ${JSON.stringify(movies)}`);
    ResponseFilter.setResponseDetails(res, 200, rooms.map(room => new RoomResponse(room)));
});


module.exports = Router;