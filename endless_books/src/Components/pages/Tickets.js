import React, {useState, useEffect} from 'react';
import { Button } from '../Button'
import Footer from '../Footer'
import '../styles/Tickets.css'
import axios from 'axios';
import { useTranslation } from 'react-i18next';


const url = `http://localhost:3003/api/v1/tickets/nume/${localStorage.getItem("nume_curent")}`
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUm9sZSI6IkFETUlOIiwiaXNzIjoicHcgYmFja2VuZCIsInN1YiI6InB3IiwiYXVkIjoicHcgY2xpZW50In0.qe1rnDHBnHK4TYccWFa5zs81sGK2zvQ_clyYWifUOms"
function Tickets(props) {
    const { t } = useTranslation();
    const [tickets, setTickets] = useState([{}]);
    useEffect(() => {
        getTicketsAxios();
      }, []);
    const getTicketsAxios = async () => {
        // const response = await 
        axios.get(url, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token_curent")}`
            }
        })
        .then((response) => {
            console.log(response);
            setTickets(response.data.response);
        })
        // console.log("RESPONSE ===============" + response.data);
        // console.log(" array " + response.data);
       
        // console.log("ticketssssss" + tickets);
        
    };
    return (
       
        <> <h1>{t("bilete")}</h1>
        <div className="ticket-content" >
            {  

           
            tickets.map((ticket) =>
            <div className="tickets">
                    
                    <div className="product_price"> <h1> {ticket.movie_name}</h1></div>
                    <br />
                    {/* <img src = {ticket.movie_image_url} alt="imagine film"></img> */}
                    <div className="product_description">Rand: {ticket.row_nr} </div>
                    <div className="product_comments">Loc: {ticket.seat_nr} </div>
                    <div className="product_comments">Sala: {ticket.room_id} </div>
                    <div className="product_rating"> Data: {ticket.date_time} </div>
                    <div> Ora: {ticket.hour_time}</div>
                    <br />
            </div>
            
        
            )
        
            }
      
        </div>
 
        <div>
             <Footer />
        </div>
        </>
    )
}

export default Tickets
/*
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './mainstyle.css'
import Form from './Form';

const url = "http://localhost:5000/api/products"

function HomePage(props) {
    
  
    const [products, setProducts] = useState([{}]);
    useEffect(() => {
        getProductsAxios();
      }, []);
    const getProductsAxios = async () => {
        const response = await axios.get(url);
        console.log("RESPONSE ===============" + JSON.stringify(response.data));
        setProducts(response.data);
    };
    console.log("prod------------" + products);
   
    return (
     <>
    <div className="title">Products</div>
     <ul className="products">
    {
        products.map(product =>
        <li>
            <div className="product">
            <br />
                <img className="product_image" src={product.image} alt="product"></img>
                <br />
                <div className="product_name"> {product.name}</div>
                <div className="product_price">{product.price}</div>
                <div className="product_description">Descriere: " {product.description} "</div>
                <div className="product_comments">Comentarii: "{product.comments} "</div>
                <div className="product_rating">{product.rating} Stars {product.nrReviews}</div>
                <p> EDIT INFO ABOUT BOOK</p>
                <div>
                <Form />
                </div>
            </div>
        </li>
        )
       
    }
       <div className="add_object" >
          <div>Add new object</div>
          <br />
            < Form/>
        </div>
  </ul>
 
  </>
    )
}

export default HomePage;
*/