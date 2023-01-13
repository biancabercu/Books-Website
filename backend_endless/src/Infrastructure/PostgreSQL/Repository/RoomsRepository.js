const {
    queryAsync
} = require('..');

const addAsync = async (seats_nr, rows_nr, room_nr) => {
    console.info(`Adding room seat in database async...`);

    const rooms = await queryAsync('INSERT INTO rooms (seats_nr, rows_nr, room_nr) VALUES ($1, $2, $3) RETURNING *', [seats_nr, rows_nr, room_nr]);
    return rooms[0];
};

const getAllAsync = async () => {
    console.info(`Getting all seats from database async...`);
    return await queryAsync('SELECT * FROM rooms');
};

const getByIdAsync = async (id) => {
    console.info(`Getting the room with id ${id} from database async...`);

    const rooms = await queryAsync('SELECT * FROM rooms WHERE id = $1', [id]);
    return rooms[0];
};


const updateByIdAsync = async (id, seats_nr, rows_nr, room_nr) => {
    console.info(`Updating the room with id ${id} in database async...`);

    const rooms =  await queryAsync('UPDATE rooms SET seats_nr = $1, rows_nr = $2, room_nr = $3 \
                WHERE room_nr = $4 RETURNING *', [seats_nr, rows_nr, room_nr, id]);
    return rooms[0];
};


const deleteByIdAsync = async (id) => {
    console.info(`Deleting the room with id ${id} from database async...`);

    const room = await queryAsync('DELETE FROM rooms WHERE id = $1 RETURNING *', [id]);
    return room[0];
    
};
module.exports = {
    addAsync,
    getAllAsync,
    getByIdAsync, 
    updateByIdAsync,
    deleteByIdAsync

}