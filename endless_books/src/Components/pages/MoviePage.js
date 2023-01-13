import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Footer from '../Footer.js'
import ReactPlayer from "react-player"
import { Button } from '../Button.js'
import { useTranslation } from "react-i18next";
import Form_rezervare from '../Form_Rezervare.js'

const url = "http://localhost:3003/api/v1/movies/"
const url_tickets = "http://localhost:3003/api/v1/tickets/"
const url_room = "http://localhost:3003/api/v1/rooms/"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUm9sZSI6IkFETUlOIiwiaXNzIjoicHcgYmFja2VuZCIsInN1YiI6InB3IiwiYXVkIjoicHcgY2xpZW50In0.qe1rnDHBnHK4TYccWFa5zs81sGK2zvQ_clyYWifUOms"

function MoviePage(props) {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [seat_nr, setSeat] = useState('');
    const [row_nr, setRow] = useState('');
    const [rooms, setRoom] = useState('')
    console.log("ID" + props.match.params.id);
    var url_id = url + props.match.params.id;
    const [movie, setMovie] = useState([{}]);
    const [form, setForm] = useState(0);
    const [isSent, setSent] = useState();
    useEffect(() => {
        getMoviesAxios();
      }, []);
    useEffect(() => {
        getRoomsAxios();
      }, []);
    const getMoviesAxios = async () => {
        // const response = await 
        axios.get(url_id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log("RASPUNS FILME" + response.data.response);
            setMovie(response.data.response);
        })
    }
    const getRoomsAxios = async () => {
        // const response = await 
        axios.get(url_room, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log("RASPUNS rooms" + response.data.response);
            setRoom(response.data.response);
        })
    }
    function appearForm () {
        setForm(1);
    }
   
    const handleNameChange = (event) => {

       setName(event.target.value);
       localStorage.setItem("nume_curent", event.target.value);
       console.log("NUME CURENT" + localStorage.getItem("nume_curent"));

    }
    const handleEmailChange = (event) => {

        setEmail(event.target.value);

    }
    const handleSeatNrChange = (event) => {

        setSeat(event.target.value);

    }
    const handleRowNrChange = (event) => {

        setRow(event.target.value);

    }
    const submit = (e) => {
        e.preventDefault()
    }
    // useEffect(() => {
    //         postUserAxios(props.id)
    //     //   .then(post=>setPost(post))
      
    // }, [submit]);
  
     const postUserAxios = async () => {
            axios.post(url_tickets, {
                nume: name,
                email: email,
                movie_id: movie.id, 
                movie_name: movie.movie_name,
                row_nr: parseInt(row_nr),
                seat_nr: parseInt(seat_nr),
                room_id: movie.room_id,
                date_time: movie.date_time,
                hour_time: movie.hour_time
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token_curent")}`
                }
            })
            .then((response) => {
                console.log("s a trimis ------------" + response);
                setSent(1);

               
            })
        }
    const handleSubmitChange = async (event) => {

        event.preventDefault();
        axios.post(url, {
            nume: name,
            email: email,
            movie_id: movie.id, 
            movie_name: movie.movie_name,
            row_nr: row_nr,
            seat_nr: seat_nr,
            room_id: movie.room_id,
            date_time: movie.date_time,
            hour_time: movie.hour_time
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log("s a trimis ------------" + response);
           
        })
    }
    return (
        <>
            <div className="movie-header">
                <h1> {movie.movie_name}</h1>
            </div>
            <div className="single-movie">
                <div className="movie-left"> 
                
                </div>
                <div className="movie-right">
                    <div>
                        <ReactPlayer 
                        url = {movie.trailer}
                       
                        />
                    </div>
                    <div className="movie-image-details">
                        <div>
                        <img src = {movie.movie_image_url} alt="imagine film"></img> <br />
                        </div>
                        <div className="movie-details">
                            <div className="movie_description">{movie.movie_description} </div>
                            <br />
                            <div> Distributie: {movie.movie_cast}</div>
                            <div> Format: {movie.movie_format}</div>
                            <div> Sala: {movie.room_id} </div>
                            <div> Data: {movie.date_time} </div>
                            <div> Ora: {movie.hour_time}</div>
                            <div> Gen: {movie.gen}</div>
                           
                        </div>
                    </div>
                    <div><Button buttonStyle="btn--outline_red" onClick={appearForm} >{t("rezervare")}</Button> </div>
                    
                </div>
            </div>
            {form && <div className="form-div"> 
                        <div className="div-left">
                            <div className="cinema_locuri">
                            
                            </div>
                            <div className="locuri-ocupate">
                                <h2>{t("locurile_ocupate")}:</h2>
                                <select onClick={getRoomsAxios}>
                                                {rooms.map((room) =>
                                                    <option value={room.id}>{room.seats_nr}</option>
                                                )}
                                </select>
                            </div>
                        </div>
                        <form  className="form">
                                <div className="form-group">
                                    <label for="name">{t("nume")}</label>
                                    <input type="text" name="name" value={name} onChange={e=> handleNameChange(e)} id="name" className="form-control"/> 
                                    
                                </div><br />
                                <div className="form-group">
                                    <label for="email">{t("email")} </label>
                                    <input type="text" name="email" value={email} onChange={e=> handleEmailChange(e)} className="form-control"/> 
                                </div>
                                
                                <br />
                                <div className="form-group">
                                    <label for="row_nr">{t("row_nr")} </label>
                                    <input type="text" name="row_nr" value={row_nr} onChange={e=> handleRowNrChange(e)} className="form-control"/> 
                                </div>
                                
                                <br />
                                <div className="form-group">  
                                    <label for="seat_nr">{t("seat_nr")} </label>
                                    {/* <input type="text" name="comments" className="form-control"/> */}
                                    <input type="text" name="seat_nr" value={seat_nr} onChange={e=> handleSeatNrChange(e)} className="form-control"/> 
                                    

                                </div>
                            
                                <br />
                                <Button buttonStyle="btn--outline_red" type="submit" onClick={postUserAxios}>{t("rezervare")}</Button>
                                {/* <button className="oval" type="submit" >{t("rezerva_bilete")}</button> */}
                                <br />
                                {isSent && <Button buttonStyle="btn--outline_red" url = "/tickets">{t("vezi_bilete")}</Button>}
                        </form>
                        
            </div>}
            
            <div>
                <Footer />
            </div>
        </>
    )
}

export default MoviePage

