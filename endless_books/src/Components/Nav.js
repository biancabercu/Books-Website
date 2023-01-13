import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import LanguageSelect from '../languageSelect';
import { Button } from './Button';
import './Nav.css';
import { useTranslation } from "react-i18next";


function Nav() {
    const { t } = useTranslation();
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    //sets the click with the opposite value
    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false);
    }

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }
    window.addEventListener('resize', showButton);
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <i class="fa fa-book" aria-hidden="true"></i> ENDLESS BOOKS <i class="fa fa-book" aria-hidden="true"></i>
                 </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>{t("Home_nav")}</Link>
                        
                    </li> 
                    <li className='nav-item'>
                        <Link to='/profil' className='nav-links' onClick={closeMobileMenu}>{t("profil_nav")}</Link>
                        
                    </li>  
                    <li className='nav-item'>
                        <Link to='/cos' className='nav-links' onClick={closeMobileMenu}>{t("Program_nav")}</Link>
                       
                    </li> 
                    <li className='nav-item'>
                        <Link to='/info-preturi' className='nav-links' onClick={closeMobileMenu}>{t("info_tarife_nav")}</Link>
                       
                    </li>
                    
                    {localStorage.getItem('user_curent') == "ADMIN" && <li className='nav-item'>
                        <Link to='/admin-useri' className='nav-links' onClick={closeMobileMenu}>{t("vezi_useri")}</Link>
                       
                    </li> }
                   
                  
                </ul>
               
               
            </div>
            <div>
                {button && <Button buttonStyle="btn--outline" url='/signup'>{t("sign_up")}</Button>}
                </div>
                  <div className="language-select">
                                    <LanguageSelect />
                 </div>
                  
        </nav>
        
        </>
    )
}

export default Nav;
