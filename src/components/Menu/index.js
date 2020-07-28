import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
//import ButtonLink from '../components/ButtonLink';
import Button from '../Button/index';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AppleFlix logo"/>
            </a>
            <Button as="a" className="ButtonLink" href="/">
               New Video
            </Button>
        </nav>
    );
}

export default Menu;