import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import Footer from "../Footer";
import { useTranslation } from "react-i18next";
import "../styles/IntrebariFrecvente.css";
import axios from "axios";

const url = "http://localhost:3003/api/v1/qa/important";
const user_curent = localStorage.getItem("user_curent");
function IntrebariFrecvente() {
  const { t } = useTranslation();

  const [questions, setQuestions] = useState([{}]);
  useEffect(() => {
    getQuestionAxios();
  }, []);
  const getQuestionAxios = async () => {
    // const response = await
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_curent")}`,
        },
      })
      .then((response) => {
        console.log("RASPUNS INTREBARI" + response.data.response);
        setQuestions(response.data.response);
      });
  };
  return (
    <>
      <div>
        <h1 id="title">{t("intrebari_frecvente_f")}</h1>
      </div>
      <div className="fa-main">
        <div className="fa-left"></div>

        <div className="fa-content">
          <ol>
            {questions.map((question) => (
              <div>
                <li>
                  <h3>{question.question}</h3> <br />
                  <br />
                  <h3>{question.answer}</h3>
                </li>
                <br />
              </div>
            ))}
          </ol>
        </div>
        {user_curent == "SUPPORT" && (
          <Button url="/qa" buttonStyle="btn--outline_red">
            {user_curent} Vezi intrebari
          </Button>
        )}
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default IntrebariFrecvente;
