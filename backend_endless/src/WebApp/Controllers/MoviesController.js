const express = require('express');

const MoviesRepository = require('../../Infrastructure/PostgreSQL/Repository/MoviesRepository.js');
const ServerError = require('../Models/ServerError.js');
const { MoviePostBody, MoviePutBody, MovieResponse } = require('../Models/Movie.js');
const AuthorizationFilter = require('../Filters/AuthorizationFilter.js');
const RoleConstants = require('../Constants/Roles.js');

const ResponseFilter = require('../Filters/ResponseFilter.js');

const Router = express.Router();

 Router.post('/', AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN), async (req, res) => {

    const movieBody = new MoviePostBody(req.body);
    console.log("am intrat in post" + req.body);
    const movie = await MoviesRepository.addAsync(movieBody.movie_name, movieBody.movie_image_url, movieBody.movie_description,
        movieBody.movie_description_en, movieBody.movie_format, movieBody.movie_cast, movieBody.room_id, movieBody.date_time, 
        movieBody.hour_time, movieBody.gen, movieBody.trailer);  

    ResponseFilter.setResponseDetails(res, 201, new MovieResponse(movie), req.originalUrl);
});

Router.get('/', async (req, res) => {

    const movies = await MoviesRepository.getAllAsync();
    // res.send(`Filmele din bd sunt ${JSON.stringify(movies)}`);
    ResponseFilter.setResponseDetails(res, 200, movies.map(movie => new MovieResponse(movie)));
});

Router.get('/day/:day_nr/:date', async (req, res) => {
    let {
        day_nr,
        date
    } = req.params;

    day_nr = parseInt(day_nr);

    // if (day_nr) {
    //     throw new ServerError("Day number should be a positive integer", 400);
    // }
       
    const movies = await MoviesRepository.getByDayAsync(day_nr, date);
    
    if (!movies) {
        throw new ServerError(`No movies in ${day_nr, date} day!`, 404);
    }
    console.log("MOVIEEE FROM BD" + JSON.stringify(movies));
    ResponseFilter.setResponseDetails(res, 200,  movies.map(movie => new MovieResponse(movie)));
});

Router.get('/:id', async (req, res) => {
    let {
        id
    } = req.params;

    id = parseInt(id);

    if (!id || id < 1) {
        throw new ServerError("Id should be a positive integer", 400);
    }
       
    const movie = await MoviesRepository.getByIdAsync(id);
    
    if (!movie) {
        throw new ServerError(`Movie with id ${id} does not exist!`, 404);
    }
    console.log("MOVIEEE FROM BD" + movie);
    ResponseFilter.setResponseDetails(res, 200, new MovieResponse(movie));
});

Router.put('/:id', AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN), async (req, res) => {

    const movieBody = new MoviePutBody(req.body, req.params.id);
    var id = req.params.id;
    const movie = await MoviesRepository.updateByIdAsync(movieBody.Id, movieBody.movie_name, movieBody.movie_image_url, movieBody.movie_description,
        movieBody.movie_description_en, movieBody.movie_format, movieBody.movie_cast, movieBody.room_id, movieBody.date_time, 
        movieBody.hour_time, movieBody.gen);
        
    if (!movie) {
        throw new ServerError(`Movie with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 200, new MovieResponse(movie));
});

Router.delete('/:id', AuthorizationFilter.authorizeRoles(RoleConstants.ADMIN), async (req, res) => {
    const {
        id
    } = req.params;

    if (!id || id < 1) {
        throw new ServerError("Id should be a positive integer", 400);
    }
    
    const movie = await MoviesRepository.deleteByIdAsync(parseInt(id));
    
    if (!movie) {
        throw new ServerError(`Movie with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 204, "Entity deleted succesfully");
});

module.exports = Router;