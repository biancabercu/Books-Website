import React, {useState, useEffect} from 'react'
import Footer from '../Footer'
import '../styles/Program.css'
import { Button } from '../Button';
import Luni from './Zile_Program/Luni';
import Marti from './Zile_Program/Marti';
import Miercuri from './Zile_Program/Miercuri';
import Joi from './Zile_Program/Joi';
import Vineri from './Zile_Program/Vineri';
import Sambata from './Zile_Program/Sambata';
import Duminica from './Zile_Program/Duminica';
import { useTranslation } from "react-i18next";

function Program() {
    const { t } = useTranslation();
    var today = new Date();
    var day = today.getDay();
    console.log(day + " ziuaaaaaaaaa de azi " + today.getDate()) ;
    const [luni, setLuni] = useState(1);
    const [marti, setMarti] = useState(0);
    const [miercuri, setMiercuri] = useState(0);
    const [joi, setJoi] = useState(0);
    const [vineri, setVineri] = useState(0);
    const [sambata, setSambata] = useState(0);
    const [duminica, setDuminica] = useState(0);
    function luniChange() {
        setLuni(1);
        setMarti(0);
        setMiercuri(0);
        setJoi(0);
        setVineri(0);
        setSambata(0);
        setDuminica(0);
    }
    function  martiChange() {
        setMarti(1);
        setLuni(0);
        setMiercuri(0);
        setJoi(0);
        setVineri(0);
        setSambata(0);
        setDuminica(0);
    }
    function miercuriChange() {
        setLuni(0);
        setMarti(0);
        setMiercuri(1);
        setJoi(0);
        setVineri(0);
        setSambata(0);
        setDuminica(0);
    }
    function joiChange() {
        setLuni(0);
        setMarti(0);
        setMiercuri(0);
        setJoi(1);
        setVineri(0);
        setSambata(0);
        setDuminica(0);
    }
    function vineriChange() {
        setLuni(0);
        setMarti(0);
        setMiercuri(0);
        setJoi(0);
        setVineri(1);
        setSambata(0);
        setDuminica(0);
    }
    function sambataChange() {
        setLuni(0);
        setMarti(0);
        setMiercuri(0);
        setJoi(0);
        setVineri(0);
        setSambata(1);
        setDuminica(0);
    }
    function duminicaChange() {
        setLuni(0);
        setMarti(0);
        setMiercuri(0);
        setJoi(0);
        setVineri(0);
        setSambata(0);
        setDuminica(1);
    }

    return (
        <>
            <div className="program">
                
                {today.getDay() === 0 ? <div><Button buttonStyle="btn--outline_yellow" onClick={duminicaChange}>{t("duminica")}</Button></div>
                    :  <div><Button buttonStyle="btn--outline" onClick={duminicaChange}>{t("duminica")}</Button></div>}
                {today.getDay() === 1 ? <div><Button buttonStyle="btn--outline_yellow" onClick={luniChange}>{t("luni")}</Button></div>
                    : <div><Button buttonStyle="btn--outline" onClick={luniChange}>{t("luni")}</Button></div>}
                {today.getDay() === 2 ? <div><Button buttonStyle="btn--outline_yellow" onClick={martiChange}>{t("marti")}</Button></div>
                    : <div><Button buttonStyle="btn--outline" onClick={martiChange}>{t("marti")}</Button></div> }
                {today.getDay() === 3  ? <div><Button buttonStyle="btn--outline_yellow" onClick={miercuriChange}>{t("miercuri")}</Button></div>
                    : <div><Button buttonStyle="btn--outline" onClick={miercuriChange}>{t("miercuri")}</Button></div>}
                {today.getDay() === 4 ? <div><Button buttonStyle="btn--outline_yellow" onClick={joiChange}>{t("joi")}</Button></div>
                    : <div><Button buttonStyle="btn--outline" onClick={joiChange}>{t("joi")}</Button></div>}
                {today.getDay() === 5 ? <div><Button buttonStyle="btn--outline_yellow" onClick={vineriChange}>{t("vineri")}</Button></div>
                    :  <div><Button buttonStyle="btn--outline" onClick={vineriChange}>{t("vineri")}</Button></div>}
                {today.getDay() === 6 ? <div><Button buttonStyle="btn--outline_yellow" onClick={sambataChange}>{t("sambata")}</Button></div>
                    :  <div><Button buttonStyle="btn--outline" onClick={sambataChange}>{t("sambata")}</Button></div>}
                
                
               
               
                

            </div>
            <h3>{t("Ziua_curenta")}: {today.getDate()}</h3>
            {luni===1 && <Luni /> }
            {marti===1 && <Marti /> }
            {miercuri===1 && <Miercuri /> }
            {joi === 1 && <Joi />}
            {vineri === 1 && <Vineri />}
            {sambata === 1 && <Sambata />}
            {duminica ===1 && <Duminica />}
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Program
