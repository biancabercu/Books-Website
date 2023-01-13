import React from 'react'
import Footer from '../Footer'
import '../styles/Outdoor.css'
import { useTranslation } from "react-i18next";
import { Button } from '../Button';

function OutdoorCinema() {
    const { t } = useTranslation();
    return (
        <>
            <h1 id="title_cinema">{t("outdoor_cinema")}</h1>
            <div className="outdoor-main">
                <div className="outdoor-left">
                    <h2>
                        {t("descriere_outdoor_cinema_p1")}
                    </h2>
                    <h2>
                        {t("descriere_outdoor_cinema_p2")}
                    </h2>
                    <h2>
                        {t("descriere_outdoor_cinema_p3")}
                    </h2>
                </div>

                <div className="outdoor-right">

                </div>

            </div>
            <div className="buton-event">
                <Button buttonStyle="btn--outline_red" url="/outdoor_weather"> {t("vezi_vremea")}</Button>
            </div>
            <div>
                <Footer />
            </div>

        </>
    )
}

export default OutdoorCinema
