import React, {Component, useState} from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import { Button } from './Button';

const url = "http://localhost:5000/api/products";


function Form_rezervare()  {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [seat_nr, setSeat] = useState('');
    const [row_nr, setRow] = useState('');

    const handleNameChange = (event) => {

       setName(event.target.value);

    }
    const handleEmailChange = (event) => {

        setEmail(event.target.value);

    }
    const handleSeatNrChange = (event) => {

        setSeat(event.target.value);

    }
    const handleRowNrChange = (event) => {

        setSeat(event.target.value);

    }
    const handleSubmitChange = (event) => {

        event.preventDefault();
        console.log(this.state);
        // axios.post(url, this.state)
        // .then(response => {
        //     console.log(response)
    
        // })
        // .catch(error => {
        //     console.log(error);
        // })
    }
    return(
            <form className="form" onSubmit={e=> handleSubmitChange(e)} >
                        <div className="form-group">
                            <label for="name">{t("nume")}</label>
                            <input type="text" name="name" value={name} onChange={e=> handleNameChange(e)} id="name" className="form-control"/> 
                             
                        </div><br />
                        <div className="form-group">
                            <label for="email">{t("email")} </label>
                            <input type="text" name="price" value={email} onChange={e=> handleEmailChange(e)} className="form-control"/> 
                        </div>
                        
                    <br />
                    <div className="form-group">
                        <label for="row_nr">{t("row_nr")}</label>
                        <input type="text" name="row_nr" value={row_nr} onChange={e=> handleRowNrChange(e)}className="form-control"/> 
                    {/* <textarea value={row_nr} onChange={this.handleRowNrChange}> </textarea> */}
                    </div>
                      
                    <br />
                    <div className="form-group">  
                        <label for="seat_nr">{t("seat_nr")} </label>
                        {/* <input type="text" name="comments" className="form-control"/> */}
                        <input type="text" name="seat_nr" value={seat_nr} onChange={e=> handleSeatNrChange(e)}className="form-control"/> 
                    </div>
                   
                    <br />
                    <Button buttonStyle="btn--outline_red" type="submit">{t("rezervare")}</Button>
                    {/* <button className="oval" type="submit" >{t("rezerva_bilete")}</button> */}
                   
                </form>
               
        )
    
}
export default Form_rezervare;