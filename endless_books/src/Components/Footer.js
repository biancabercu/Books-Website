import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Footer.css';
import LanguageSelect from '../languageSelect';
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();
    return (
        <div className="Footer"> 
            <div className="hfooter">
                <h2 className="footer-subscription-heading">
                    Keep calm & read endless books
                </h2>
            </div>
            
            <div className="fcontent">
                
                <div className="footer-links">
                         <div className="footer-link-items"><Link to='/contact'>    {t("contact_f")}   </Link></div>
                         <div  className="footer-link-items"> <Link to='/about'>    {t("despre_f")}   </Link></div>
                         <div  className="footer-link-items">  <Link to='/fa'>     {t("intrebari_frecvente_f")}   </Link> </div>
                         <div  className="footer-link-items">  <Link to='/info'>    {t("info_f")}   </Link></div>
                         <div  className="footer-link-items">    Social Media   
                             
                             <div className="socials-icons"><br />
                                 <div>
                                 <a href='https://www.facebook.com/'> <i class="fa fa-facebook-square" aria-hidden="true"> </i></a>
                                    <br />
                                </div>
                                <div>
                                   <a href='https://www.instagram.com/'> <i class="fa fa-instagram" aria-hidden="true"></i></a>
                                    <br />
                                </div> 
                            </div>
                         </div>
                            {/* <Link to='/info'>Informatii</Link> */}
                        
                </div>
                <div >
                    <form className="input-area">
                        <div><input type="email" name="email" placeholder={t("enter_your_email")} className="footer-input">
                        </input> 
                        </div>
                        <div><Button buttonStyle='btn--outline'>{t("subscribe")}</Button></div>
                    
                    </form>

                </div>
            </div>
        
            
        </div>
    )
}

export default Footer
