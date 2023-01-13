import React, {useState, useEffect} from 'react'
import Footer from '../Footer'
import { useTranslation } from "react-i18next";
import axios from 'axios'
import { Button } from '../Button';
import{ init } from 'emailjs-com';
init("user_TLxhH9QLJ8Yc6jvQChz9q");
const url = "http://localhost:3003/api/v1/users/register"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUm9sZSI6IkFETUlOIiwiaXNzIjoicHcgYmFja2VuZCIsInN1YiI6InB3IiwiYXVkIjoicHcgY2xpZW50In0.qe1rnDHBnHK4TYccWFa5zs81sGK2zvQ_clyYWifUOms"

function Register(props) {
    const { t } = useTranslation();
    const [name, setname] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(0)
    function nameChange(value) {
        
        setname(value)
    }
    function passwordChange(value) {
        
        setPassword(value)
    }
    const submit = (e) => {
        e.preventDefault()
    }
    // useEffect(() => {
    //        postUserAxios(props.id)
    //     //   .then(post=>setPost(post))
      
    // }, [submit]);
    const postUserAxios = async () => {
        axios.post(url, {
            username: name, 
            password: password
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
        <div>
                <h1 id="title">{t("register")}</h1>
                </div>
                <div className="contact-main">
                    <div className="about-left">
                        {/* <img src='../Images/camera.jpg'></img> */}
                    
                    </div>
                    <div className="form">
                        
                        <form >
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
                                <input className="btn--outline_red"  type="submit" value="Submit" onClick={postUserAxios} />
                            </label>

                        </form>
                        <br />
                        <div>
                            <h3>{t("deja_cont")}</h3>
                            <br />
                            <Button url="/signup" buttonStyle="btn--outline_red" buttonSize="btn--medium" >{t("login")}</Button>
                        </div>
                    
                    </div>
                    
                </div>
            <div>
                <Footer />
            </div>
        </>

    )
}

export default Register
