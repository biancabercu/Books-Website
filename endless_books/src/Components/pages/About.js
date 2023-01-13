import React from 'react'
import Footer from '../Footer'
import '../styles/About.css'
import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation();
    return (
      <>
        <div>
          <h1 id="title">{t("povestea_endless")}</h1>
        </div>
        <div className="about-main">
          <div className="about-left">
            {/* <img src='../Images/camera.jpg'></img> */}
          </div>
          <div className="about-content">
            <div>
              <p> {t("descriere_about_p1")} </p>
              <br></br>
              <p> {t("description_about")} </p>
              <br></br>
              <p> {t("descriere_about_p2")} </p>
            </div>
            <br />
            {/* <div>
                        <h1> {t("misiunea_noastra")} </h1>
                        <br />
                        <p> {t("descriere_about_p3")} </p>
                    </div>
                    <br />
                    <br />
                    <div>
                        <h1>{t("tehnologie_de_ultima_generatie")}</h1>
                        <br />
                        <p> {t("descriere_tehnologie")} </p>
                    </div> */}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </>
    );
}

export default About
