import Footer from '../Footer';
import '../styles/Cont.css';
import Main from '../Main';
import { Button } from '../Button';
import { useTranslation } from "react-i18next";
import profil from '../Images/profil.png'; 
import bestseller from '../Images/best.png';
import top3 from'../Images/TOP.jpg';
import todo from'../Images/todo.jpg';
import pile from '../Images/pile3.png';
function Cont() {
    const { t } = useTranslation();

    return(
        <>
       
        <div className="event ">
            
            <img  className="img1 mtop40" src={profil} alt="bookfest" />
            <h1>x </h1>
        </div>
        <div className="break_line mbot40"></div>
        {/* <div className="buton-event mtop40">
            <Button buttonStyle="btn--outline_red" url="/outdoor"> {t("vezi_evenimentul")}</Button>
        </div> */}
        <div className="top_box">
            <h1>BOOKS READ</h1>
            <img  className="img3 mtop40 mbot40" src={top3} alt="TOP" /><br></br>
           
            <div className="buton-event"> <Button buttonStyle="btn--outline_red" url="/top_alegeri"> {t("top_alegeri")}</Button></div>
        </div>
        <div className="break_line mbot40"></div>
        <div className="bestseller_box">
            <h1>CURRENTLY READING</h1>
            <img  className="img2 mtop40 mbot40" src={pile} alt="bestseller" /><br></br>
           
            <div className="buton-event"> <Button buttonStyle="btn--outline_red" url="/bestsellers"> {t("descopera_bestseller")}</Button></div>
        </div>
        <div className="break_line mbot40"></div>
        <div className="bestseller_box">
            <h1>TO READ LIST</h1>
            <img  className="img2 mtop40 mbot40" src={todo} alt="bestseller" /><br></br>
           
            <div className="buton-event"> <Button buttonStyle="btn--outline_red" url="/bestsellers"> {t("descopera_bestseller")}</Button></div>
        </div>
        <Footer />

        </>
    )
}

export default Cont;