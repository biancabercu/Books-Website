import React, {useEffect, useState} from 'react'
import '../../styles/Movies-style.css'
import axios from 'axios'
import Program from '../Program'
import { Link } from 'react-router-dom'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUm9sZSI6IkFETUlOIiwiaXNzIjoicHcgYmFja2VuZCIsInN1YiI6InB3IiwiYXVkIjoicHcgY2xpZW50In0.qe1rnDHBnHK4TYccWFa5zs81sGK2zvQ_clyYWifUOms"

function Duminica() {
    var today = new Date();
    var date = today.getDate(); //17
    var day = today.getDay(); //1
    console.log(day);
    if (day > 0) {
        date = date - day;
    }
    else if (day < 0)
        date = date  - day;
    const url = "http://localhost:3003/api/v1/movies/day/0/" + date;

    const [movies, setMovies] = useState([{}]);
    useEffect(() => {
        getMoviesAxios();
      }, []);
    const getMoviesAxios = async () => {
        // const response = await 
        axios.get(url, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token_curent")}`
            }
        })
        .then((response) => {
            console.log(response.data);
            setMovies(response.data.response);
        })
    }
    return (
        <>
      
        <div className="content">
            {  
            movies.map((movie) =>
            <div className="movies">
                    <div> <h1> {movie.movie_name}</h1></div>
                    <br />
                    <Link to={`/movies/${movie.id}`}>
                    <img src = {movie.movie_image_url} alt="imagine film"></img> <br /></Link>
                    <div className="movie_description"> {movie.movie_description} </div>
                    <div> Distributie: {movie.movie_cast}</div>
                    <div> Format: {movie.movie_format}</div>
                    <div> Sala: {movie.room_id} </div>
                    {/* <div> Data: {movie.date_time} </div> */}
                    <div> Ora: {movie.hour_time}</div>
                    <div> Gen: {movie.gen}</div>
                    <br />
            </div>
            )}
        </div>
        </>
    )
}

export default Duminica
