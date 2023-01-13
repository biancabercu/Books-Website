const ServerError = require('./ServerError.js');

class TicketPostBody {
    constructor (body) {
        this.nume = body.nume;
        this.email = body.email;
        this.movie_name = body.movie_name;
        this.movie_id= body.movie_id;
        this.room_id = body.room_id;
        this.row_nr = body.row_nr;
        this.seat_nr = body.seat_nr;
        this.date_time = body.date_time;
        this.hour_time = body.hour_time;
        

        if (this.email == null || this.email.length < 4) {
            throw new ServerError("Email is missing", 400);
        }
        if (this.nume == null || this.nume.length < 4) {
            throw new ServerError("Name for the ticket is missing", 400);
        }
        if (this.movie_name == null || this.movie_name.length < 4) {
            throw new ServerError("Movie name is missing", 400);
        }
    
        if (this.movie_id== null) {
            throw new ServerError("Movie id is missing", 400);
        }
        
        if (this.room_id == null) {
            throw new ServerError("Room number is missing", 400);
        }
        if (this.date_time == null) {
            throw new ServerError("Movie date is missing", 400);
        }
        if (this.hour_time == null) {
            throw new ServerError("Movie hour is missing", 400);
        }
        if (this.row_nr == null) {
            throw new ServerError("Movie hour is missing", 400);
        }
        if (this.seat_nr== null) {
            throw new ServerError("Seat nr is missing", 400);
        }
    }

    get movieName () {
        return this.movie_name;
    }
    get movieId() {
        return this.movie_id;
    }
    get roomId () {
        return this.room_id;
    }
    get dateTime () {
        return this.date_time;
    }
    get hourTime () {
        return this.hour_time;
    }
    get SeatNr () {
        return this.seat_nr;
    }
    get RowNr () {
        return this.row_nr;
    }
    get Nume () {
        return this.nume;
    }
    get Email () {
        return this.email;
    }


}

class TicketPutBody extends TicketPostBody {
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

class TicketResponse {
    constructor(ticket) {
        this.nume = ticket.nume;
        this.email = ticket.email;
        this.movie_name = ticket.movie_name;
        this.movie_id= ticket.movie_id;
        this.room_id = ticket.room_id; 
        this.row_nr = ticket.row_nr;
        this.seat_nr = ticket.seat_nr;
        this.date_time = ticket.date_time;
        this.hour_time = ticket.hour_time;
       
      
    }
}

module.exports =  {
    TicketPostBody,
    TicketPutBody,
    TicketResponse
}