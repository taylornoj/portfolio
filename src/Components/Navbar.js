import React from 'react';
import { NavLink } from 'react-router-dom';
import Style from './Navbar.module.scss';
import Toggler from "./Toggler";
import classNames from 'classnames';

export default function Navbar({ darkMode, handleClick }) {

    return (
        <nav>
            <ul className={classNames(Style.navList, darkMode ? Style.dark : null)}>
                <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
                <li><NavLink exact activeClassName="current" to='/about'>About Me</NavLink></li>
                <li><NavLink exact activeClassName="current" to='/portfolio'>Portfolio</NavLink></li>
                <li><a href="https://resume.io/r/mMPy9dwPY" exact activeClassName="current" >Resume</a></li>
                <Toggler darkMode={darkMode} handleClick={handleClick} />
            </ul>
        </nav>
    )
}