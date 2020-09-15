import React from 'react';

import './Navbar.scss';
// import {ReactComponent as Logo} from '../../assets/icons/logo.svg'
import logo from '../../assets/icons/logo.svg';
import notification from '../../assets/icons/bell.svg';
import message from '../../assets/icons/new-envelope.svg';
import avatar from '../../assets/icons/avatar.png';
function Navbar () {
    return(
        <div className="navbar">
            <ul>
                <li>
                    {/* <Logo/> */}

                    <img src={logo} alt=""/>
                </li>
                <li>
                    <a href="/dashboard">PRACTICE</a>
                </li>
                <li>
                    <a href="/dashboard">CERTIFICATION</a>
                </li>
                <li>
                    <a href="/dashboard">COMPETE</a>
                </li>
                <li>
                    <a href="/dashboard">JOBS</a>
                </li>
                <li>
                    <a href="/dashboard">LEADERBOARD</a>
                </li>
                <li>
                    <input type="search" name="" id=""/>
                </li>
                <li>
                    <img src={message} alt=""/>
                </li>
                <li>
                    <img src={notification} alt=""/>
                </li>
                <li>
                   <img src={avatar} alt=""/> <span className="navbar__username">username</span></li>
            </ul>
        </div>
    )
}

export default Navbar;