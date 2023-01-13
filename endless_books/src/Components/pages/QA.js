import React, {useState, useEffect} from 'react'
import Footer from '../Footer'
import '../styles/About.css';
import '../styles/Contact.css';
import { useTranslation } from "react-i18next";
import '../styles/Qa.css';
import axios from 'axios';
import { Button } from '../Button';


const url_support = "http://localhost:3003/api/v1/qa"
const url_put_a = "http://localhost:3003/api/v1/qa/"
const token_support = localStorage.getItem("token_support");
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUm9sZSI6IlNVUFBPUlQiLCJpc3MiOiJwdyBiYWNrZW5kIiwic3ViIjoicHciLCJhdWQiOiJwdyBjbGllbnQifQ.cKsgX1t6VYKrCn6ALOKyKRd7KZdxJsazqWdY1n4n3pk"

function QA() {
    const { t } = useTranslation();
    const [questions, setQuestions] = useState([{}]);
    const [isImportant, setImportant] = useState(1)

    function ImportantQuestion(value) {
        console.log("IS IMPORTANT" + value);
        setImportant(value);
    }
    useEffect(() => {
        getQuestionAxios();
      }, []);
    const getQuestionAxios = async () => {
        // const response = await 
        axios.get(url_support, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token_curent")}`
            }
        })
        .then((response) => {
            console.log("RASPUNS INTREBARI" + response.data.response);
            setQuestions(response.data.response);
        })
    }
    const putAnswer = async (value, id) => {
        axios.put(`http://localhost:3003/api/v1/qa/${id}`, {
            answer:value,
            show: isImportant
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token_curent")}`
            }
        })
        .then((response) => {
            console.log("s a trimis ------------" + response);
           
        })
    }
    
        return (
            <>

                <div>
                    <h1 id="title">{t("suport_intrebari")}</h1>
                </div>
                
                {/* <Button buttonStyle="btn--outline_red" onClick={getQuestionAxios}> {t("vezi_intrebari_primite")}</Button> */}
                <div className="qa-content">
                    <ul>
                    {questions.map((question) =>
                        <div>
                        
                            <li><h3>{question.question}</h3> <br />
                            <form  ><label>
                                    {t("intrebare_importanta")}
                                    <br />
                                <select onChange={(event) =>ImportantQuestion(event.target.value)}>
                                    <option value="1">DA</option>
                                    <option value="0">NU</option>
                                </select>
                                <br />
                                </label>
                                {/* <label>
                                    {t("intrebare_importanta")}
                                    <input type="checkbox" onChange={e=> ImportantQuestion(e.target.value)}/>
                                </label> */}
                                <label>{t("answer")}
                                    <br />
                                    <input type="text" name="answer" onChange={e=> putAnswer(e.target.value, question.id)} />
                                </label>
                                
                                </form>
                            </li>
                        
                        </div>
                    )} 
                  </ul>   
                </div>
             
               

                <div>
                    <Footer/>
                </div>
            </>
        )
    
}
export default QA
