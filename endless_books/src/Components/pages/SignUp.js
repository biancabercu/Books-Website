import React, {useState, useEffect} from 'react'
import Footer from '../Footer'
import { useTranslation } from "react-i18next";
import axios from 'axios'
import { Button } from '../Button';
import '../styles/sign.css';

const url = "http://localhost:3003/api/v1/users/login"
const token_a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUm9sZSI6IkFETUlOIiwiaXNzIjoicHcgYmFja2VuZCIsInN1YiI6InB3IiwiYXVkIjoicHcgY2xpZW50In0.qe1rnDHBnHK4TYccWFa5zs81sGK2zvQ_clyYWifUOms"
const token_s = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIyIiwidXNlclJvbGUiOiJVU0VSIiwiaXNzIjoicHcgYmFja2VuZCIsInN1YiI6InB3IiwiYXVkIjoicHcgY2xpZW50In0.GuAfRGFXCsdaMGyyaNzDYaOwtXfyWrWEucxYIEPe85o"
const token_u = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUm9sZSI6IlVTRVIiLCJpc3MiOiJwdyBiYWNrZW5kIiwic3ViIjoicHciLCJhdWQiOiJwdyBjbGllbnQifQ.3fx4019bMt5dQV1ekTk4-Bkz9t3_KOSXbpDh3dZwk34"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUm9sZSI6IkFETUlOIiwiaXNzIjoicHcgYmFja2VuZCIsInN1YiI6InB3IiwiYXVkIjoicHcgY2xpZW50In0.qe1rnDHBnHK4TYccWFa5zs81sGK2zvQ_clyYWifUOms"
var token_from_login = ''
var role_from_login = ''

function SignUp(props) {
    const { t } = useTranslation();
    const [name, setname] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(0)
    // const [submit, setSubmit] = useState(0)
    function nameChange(value) {
        
        setname(value)
    }
    function passwordChange(value) {
        
        setPassword(value)
    }
    const submit = (e) => {
        e.preventDefault()
    }
    // function onSubmithandler (event) {
    //     setSubmit(1);
        
    // }
    useEffect(() => {
           postUserAxios(props.id)
        //   .then(post=>setPost(post))
      
    }, [submit]);
    const postUserAxios = async () => {
        axios.post(url, {
            username: name, 
            password: password
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token_admin")}`
            }
        })
        .then((response) => {
            console.log("s a trimis ------------" + JSON.stringify(response));
            console.log("TOKEN-------" + response.data.response.token)
            token_from_login = response.data.response.token;
            role_from_login = response.data.response.role;
            setIsLoggedIn(1)
            //alert(token_from_login);
            
            
            localStorage.setItem("token_curent", token_from_login);
            localStorage.setItem("user_curent", role_from_login);
            console.log("TOKENNNNNNN" + token_from_login + "=========" + localStorage.getItem("user_curent"));
            
                
        
           
        })
    }
    return (
        <>
                <div>
                    <h1 id="title">{t("login")}</h1>
                </div>
               
                <div className="contact-main">
                    <div className="about-left">
                        {/* <img src='../Images/camera.jpg'></img> */}
                    
                    </div>
                    <div  className="form">
                        
                        <form  >
                            <label>{t("nume")}
                                <br />
                                <input type="text" name="username" onChange={e=> nameChange(e.target.value)} />
                            </label>
                            <br />
                            <label>{t("password")}
                                <br />
                                <input type="password"  onChange={e=> passwordChange(e.target.value)}  name="password" />
                            </label>
                            <br />
                            
                            <br />
                            <label>
                                <br />
                                <br />
                                <input className="btn--outline_red"  type="submit" value="Submit" onClick={submit} />
                            </label>
                        </form>
                        <br />
                        <div>
                            <h3>{t("no_cont")}</h3>
                            <br />
                            <Button url="/register" buttonStyle="btn--outline_red" buttonSize="btn--medium" >{t("register")}</Button>
                         </div>
                    
                    </div>
                    
                </div>
            <div>
                <Footer />
            </div>
        </>

    )
}

export default SignUp
