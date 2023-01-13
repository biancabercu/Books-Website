const {
    queryAsync
} = require('..');

const addAsync = async (nume, email, movie_id, movie_name, row_nr, seat_nr, room_id, date_time, hour_time) => {
    console.info(`Adding tickets in database async...`);

    const tickets = await queryAsync('INSERT INTO tickets (nume, email, movie_id, movie_name, row_nr, seat_nr, room_id, \
                 date_time, hour_time) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
                [nume, email, movie_id, movie_name, row_nr, seat_nr, room_id, date_time, hour_time]);
    return tickets[0];
};

const getAllAsync = async () => {
    console.info(`Getting all tickets from database async...`);

    return await queryAsync('SELECT * FROM tickets');
};

const getByIdAsync = async (id) => {
    console.info(`Getting the ticket with id ${id} from database async...`);

    const tickets = await queryAsync('SELECT * FROM tickets WHERE id = $1', [id]);
    return tickets[0];
};

const getByNameAsync = async (name) => {
    console.info(`Getting the ticket for the user with the name ${name} from database async...`);

    const tickets = await queryAsync('SELECT * FROM tickets WHERE nume = $1', [name]);
    return tickets;
};

const updateByIdAsync = async (id, nume, email, movie_id, movie_name, row_nr, seat_nr, room_id, date_time, hour_time) => {
    console.info(`Updating the ticket with id ${id} in database async...`);

    const tickets =  await queryAsync('UPDATE tickets SET nume = $8, email = $9, movie_id = $1, movie_name = $2, row_nr = $3, seat_nr = $4, \
                    room_id = $5, date_time = $6, hour_time = $7 WHERE id = $10 RETURNING *', [ movie_id, movie_name, 
                    row_nr, seat_nr, room_id, date_time, hour_time, nume, email, id]);
    return tickets[0];
};

const deleteByIdAsync = async (id) => {
    console.info(`Deleting the ticket with id ${id} from database async...`);

    const ticket = await queryAsync('DELETE FROM tickets WHERE id = $1 RETURNING *', [id]);
    return ticket[0];
    
};
module.exports = {
    addAsync,
    getAllAsync,
    getByIdAsync, 
    updateByIdAsync,
    deleteByIdAsync,
    getByNameAsync
}