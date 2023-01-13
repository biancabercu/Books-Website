import React, {useState, useEffect} from 'react'
import Footer from '../Footer'
import { useTranslation } from "react-i18next";
import '../styles/AdminUser.css';
import axios from 'axios';
import { Button } from '../Button';


const url = "http://localhost:3003/api/v1/users"

function AdminUser() {
    const { t } = useTranslation();
    const [users, setUsers] = useState([{}]);
    const [isImportant, setImportant] = useState(0)
    const [usersChanged, setUserChanged] = useState(0);
    const [role, SetRole] = useState(0);
    function ImportantQuestion(value) {
        setImportant(1);
    }
    
    const StergeUser = async (id) =>{
        var url_delete = url + "/"+ id;
        axios.delete(url_delete, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token_curent")}`
            }
        })
        .then((response) => {
            console.log("User sters cu succes");
            setUserChanged(!usersChanged);
        });
    }
    function changeRole(value) {
        SetRole(value);
        console.log("ROLL " + value);
    }
    useEffect(() => {
        getUsersAxios();
      }, [usersChanged]);
    const getUsersAxios = async () => {
        // const response = await 
        axios.get(url, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token_curent")}`
            }
        })
        .then((response) => {
            console.log("RASPUNS USERS" + JSON.stringify(response.data.response));
            setUsers(response.data.response);
        })
    }
    const UpdateUser = async (id) => {
        console.log(role);
        var url_update = url + "/"+ id + "/role/" + role;
        axios.put(url_update, {
        },
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token_curent")}`
            }
        })
        .then((response) => {
            console.log("s a trimis CHANGED ROLe------------" + response);
            setUserChanged(!usersChanged);
           
        })
    }
    
        return (
            <>

                <div>
                    <h1 id="title">{t("admin_useri")}</h1>
                </div>
                
                {/* <Button buttonStyle="btn--outline_red" onClick={getQuestionAxios}> {t("vezi_intrebari_primite")}</Button> */}
                <div className="user-content">
                  
                    {users.map((user) =>
                        <div className="user-box">
                                <h3>{t("nume")}: {user.username}</h3> <br />
                                <h3>{t("user_id")}: {user.id}</h3> <br />
                                <h3>{t("role")}: {user.roleId}</h3> <br />
                            {/* <div><Button buttonStyle="btn--outline_red"  buttonSize="btn--" onClick={StergeUser(user.id)}>{t("sterge")}</Button>
                            </div> */}
                            <button className="button" onDoubleClick={(event) => StergeUser(user.id)}> {t("sterge_user")}</button>
                            <br />
                            <select onChange={(event) =>changeRole(event.target.value)}>
                                <option value="1">ADMIN</option>
                                <option value="2">SUPPORT</option>
                                <option value="3">USER</option>
                            </select>
                            <br />
                            <button className="button" onDoubleClick={(event) => UpdateUser(user.id)}>{t("update_user")}</button>
                            
                        
                        </div>
                    )} 
                 
                </div>
             
               

                <div>
                    <Footer/>
                </div>
            </>
        )
    
}

export default AdminUser
