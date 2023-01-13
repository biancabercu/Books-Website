const ServerError = require('./ServerError.js');

class MoviePostBody {
    constructor (body) {
        this.movie_name = body.movie_name;
        this.movie_image_url = body.movie_image_url;
        this.movie_description = body.movie_description;
        this.movie_description_en = body.movie_description_en;
        this.movie_format = body.movie_format;
        this.movie_cast = body.movie_cast;
        this.room_id = body.room_id;
        this.date_time = body.date_time;
        this.hour_time = body.hour_time;
        this.gen = body.gen;
        // this.id = body.id;
        this.trailer = body.trailer;

        // if (this.id == null) {
        //     throw new ServerError("Movie id is missing", 400);
        // }
        if (this.movie_name == null || this.movie_name.length < 4) {
            throw new ServerError("Movie name is missing", 400);
        }
    
        if (this.movie_image_url== null || this.movie_image_url.length < 4) {
            throw new ServerError("Movie image url is missing", 400);
        }
        if (this.movie_description == null || this.movie_description.length < 4) {
            throw new ServerError("Movie description is missing", 400);
        }
        if (this.movie_description_en == null || this.movie_description_en.length < 4) {
            throw new ServerError("Movie description en is missing", 400);
        }
    
        if (this.movie_format == null) {
            throw new ServerError("Movie format is missing", 400);
        }
        if (this.movie_cast == null || this.movie_cast.length < 4) {
            throw new ServerError("Movie Cast is missing", 400);
        }
    
        if (this.room_id == null) {
            throw new ServerError("Row number is missing", 400);
        }
        if (this.date_time == null) {
            throw new ServerError("Movie date is missing", 400);
        }
        if (this.hour_time == null) {
            throw new ServerError("Movie hour is missing", 400);
        }
        if (this.gen == null) {
            throw new ServerError("Movie type is missing", 400);
        }
        if (this.trailer == null) {
            throw new ServerError("Movie trailer is missing", 400);
        }
    }

    get movieName () {
        return this.movie_name;
    }

    get movieDescription () {
        return this.movie_description;
    }
    get movieDescriptionEn () {
        return this.movie_description_en;
    }
    get movieCast () {
        return this.movie_cast;
    }
    get movieFormat () {
        return this.movie_format
    }
    get movieImage_url () {
        return this.movie_image_url;
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
    get Type () {
        return this.gen;
    }
    // get Id() {
    //     return this.id;
    // }
    get Trailer() {
        return this.trailer;
    }


}

class MoviePutBody extends MoviePostBody {
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

class MovieResponse {
    constructor(movie) {
        this.id = movie.id;
        this.movie_name = movie.movie_name;
        this.movie_description = movie.movie_description;
        this.movie_description_en = movie.movie_description_en;
        this.movie_image_url = movie.movie_image_url;
        this.movie_format = movie.movie_format;
        this.movie_cast = movie.movie_cast;
        this.room_id = movie.room_id;
        this.gen = movie.gen;
        this.date_time = movie.date_time;
        this.hour_time = movie.hour_time; 
        this.trailer = movie.trailer;
      
    }
}

module.exports =  {
    MoviePostBody,
    MoviePutBody,
    MovieResponse
}