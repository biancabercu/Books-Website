import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import "../styles/About.css";
import "../styles/Contact.css";
import { useTranslation } from "react-i18next";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { MapContainer } from "../MapContainer";
import axios from "axios";

const url_support = "http://localhost:3003/api/v1/qa/question";
const token_support = localStorage.getItem("token_support");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUm9sZSI6IlNVUFBPUlQiLCJpc3MiOiJwdyBiYWNrZW5kIiwic3ViIjoicHciLCJhdWQiOiJwdyBjbGllbnQifQ.cKsgX1t6VYKrCn6ALOKyKRd7KZdxJsazqWdY1n4n3pk";

function Contact(props) {
  const { t } = useTranslation();

  const [name, setname] = useState("");
  const [subiect, setSubiect] = useState("");
  const [email, setEmail] = useState("");
  const [continut, setContinut] = useState("");

  function nameChange(value) {
    setname(value);
  }
  function subiectChange(value) {
    setSubiect(value);
  }
  function emailChange(value) {
    setEmail(value);
  }
  function continutChange(value) {
    setContinut(value);
  }
  const submit = (e) => {
    e.preventDefault();
  };
  // useEffect(() => {
  //         postUserAxios(props.id)
  //     //   .then(post=>setPost(post))

  // }, [submit]);
  const postUserAxios = async () => {
    axios
      .post(
        url_support,
        {
          question: continut,
          subiect: subiect,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token_curent")}`,
          },
        }
      )
      .then((response) => {
        console.log("s a trimis ------------" + response);
      });
  };

  return (
    <>
      <div>
        <h1 id="title">{t("contacteaza-ne")}</h1>
      </div>
      <div className="contact-main">
        <div className="about-left">
          {/* <img src='../Images/camera.jpg'></img> */}
        </div>
        <div className="form">
          <form>
            <label>
              {t("nume")}
              <br />
              <input
                type="text"
                name="username"
                onChange={(e) => nameChange(e.target.value)}
              />
            </label>
            <br />
            <label>
              {t("email")}
              <br />
              <input
                type="text"
                onChange={(e) => emailChange(e.target.value)}
                name="email"
              />
            </label>
            <br />
            <label>
              {t("subiect")}
              <br />
              <input
                type="text"
                onChange={(e) => subiectChange(e.target.value)}
                name="subiect"
              />
            </label>
            <br />
            <label>
              {t("continut")}
              <br />
              <textarea onChange={(e) => continutChange(e.target.value)}>
                {t("mesaj")}
              </textarea>
            </label>

            <br />
            <label>
              <br />
              <br />
              <input
                className="btn--outline_red"
                type="submit"
                value="Submit"
                onClick={postUserAxios}
              />
            </label>
          </form>
          <br />
          <div>{t("nr_de_telefon_cinema")}: 0762010578</div>
        </div>
      </div>
      <br />

      <div className="map-container">
        <h2>{t("adresa_cinema")}</h2>
        <br />
        <div className="adresa">
          <p>
            Endless books <br></br>Bulevardul Unirii 301, Buzău 120000{" "}
          </p>
        </div>

        <br />
        <MapContainer />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Contact;
