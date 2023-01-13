const ServerError = require('./ServerError.js');

class RoomPostBody {
    constructor (body) {
        this.room_nr = body.room_nr;
        this.rows_nr = body.rows_nr;
        this.seats_nr = body.seats_nr;
        
        if (this.room_nr == null) {
            throw new ServerError("Room number is missing", 400);
        }
        
        if (this.rows_nr == null) {
            throw new ServerError("Movie hour is missing", 400);
        }
        if (this.seats_nr== null) {
            throw new ServerError("Seat nr is missing", 400);
        }
    }
   
    get roomId () {
        return this.room_id;
    }
    
    get SeatNr () {
        return this.seats_nr;
    }
    get RowNr () {
        return this.rows_nr;
    }


}

class RoomPutBody extends RoomPostBody {
    constructor (body, id) {
        super(body);
        this.id = parseInt(id);

        if (!this.id || this.id < 1) {
            throw new ServerError("Id should be a positive integer", 400);
        }
    }

    get Id () {
        return this.id;
    }
}

class RoomResponse {
    constructor(room) { 
        this.room_nr = room.room_nr; 
        this.rows_nr = room.rows_nr;
        this.seats_nr = room.seats_nr;
       
      
    }
}

module.exports =  {
    RoomPostBody,
    RoomPutBody,
    RoomResponse
}