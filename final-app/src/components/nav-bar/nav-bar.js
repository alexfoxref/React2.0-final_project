import React from 'react';
import {Link} from 'react-router-dom';

import logoBlack from '../../logo/Logo_black.svg';
import logo from '../../logo/Logo.svg';


const NavBar = ({place}) => {
    const img = (place === 'header') ? logo : logoBlack;

    return (
        <ul className={`${place}`}>
            <li className={`${place}__item`}>
                <Link to="/">
                    <img src={img} alt="logo"></img>
                </Link>
            </li>
            <li className={`${place}__item`}>
                <Link to="/coffee/">Our coffee</Link>
            </li>
            <li className={`${place}__item`}>
                <Link to="/pleasure/">For your pleasure</Link>
            </li>
            <li className={`${place}__item`}>
                <Link to="/contact/">Contact us</Link>
            </li>
        </ul>
    )
};

export default NavBar;