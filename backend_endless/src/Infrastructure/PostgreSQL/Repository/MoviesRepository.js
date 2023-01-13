const {
    queryAsync
} = require('..');

const addAsync = async (movie_name, movie_image_url, movie_description, movie_description_en, movie_format, 
    movie_cast, room_id, date_time, hour_time, gen, trailer) => {
    console.info(`Adding movie in database async...`);

    const movies = await queryAsync('INSERT INTO movies (movie_name, movie_image_url, \
                movie_description, movie_description_en, movie_format, movie_cast, room_id, date_time,\
                hour_time, gen, trailer) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
                [movie_name, movie_image_url, movie_description, movie_description_en, movie_format, movie_cast, room_id, date_time, hour_time, gen, trailer]);
    return movies[0];
};

const getAllAsync = async () => {
    console.info(`Getting all movies from database async...`);
    return await queryAsync('SELECT * FROM movies');
};

const getByIdAsync = async (id) => {
    console.info(`Getting the movie with id ${id} from database async...`);

    const movies = await queryAsync('SELECT * FROM movies WHERE id = $1', [id]);
    return movies[0];
};
const getByDayAsync = async (day_nr, date) => {
    console.info(`Getting the movie for the day ${day_nr}, ${date} from database async...`);

    const movies = await queryAsync('SELECT * FROM movies WHERE EXTRACT(DOW FROM date_time) = $1 AND EXTRACT(DAY FROM date_time) = $2', [day_nr, date]);
    return movies;
};

const updateByIdAsync = async (id, movie_name, movie_image_url, movie_description, movie_format, 
    movie_cast, room_id, date_time, hour_time, gen, trailer) => {
    console.info(`Updating the movie with id ${id} in database async...`);

    const movies =  await queryAsync('UPDATE movies SET movie_name = $1, movie_image_url = $2, movie_description = $3, \
                    movie_format = $5, movie_cast = $6, room_id = $7, date_time = $8, hour_time = $9, gen = $10, trailer = $11, \
                    movie_description_en = $4 \
                    WHERE id = $12 RETURNING *', [movie_name, movie_image_url, movie_description, movie_description_en, movie_format, 
                    movie_cast, room_id, date_time, hour_time, gen, trailer, id]);
    return movies[0];
};


const deleteByIdAsync = async (id) => {
    console.info(`Deleting the movie with id ${id} from database async...`);

    const movie = await queryAsync('DELETE FROM movies WHERE id = $1 RETURNING *', [id]);
    return movie[0];
    
};
module.exports = {
    addAsync,
    getAllAsync,
    getByIdAsync, 
    updateByIdAsync,
    deleteByIdAsync, 
    getByDayAsync

}