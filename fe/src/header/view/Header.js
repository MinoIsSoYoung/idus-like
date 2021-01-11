import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { IconName } from "react-icons/fi";
import { IconContext } from "react-icons";

import idsLogo from '../images/idsLogo.gif'
import Navbar from './navbar/Navbar';
import "../scss/Header.css"

import { FiUser } from "react-icons/fi";

const Header = () => {
    return (
        <div>
            <div className="header">
                {/* <Navbar className='navbar' /> */}
                <Link to="/">
                    <img
                        src={idsLogo}
                        alt=""
                        className="logo"
                    />
                </Link>
                <IconContext.Provider value={{ size: "2.5rem", title: "Login" }}>
                    <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                        <div className='login'>
                            <FiUser />
                            <p style={{ height: 0, margin: "8px" }}>Login</p>
                        </div>
                    </Link>

                </IconContext.Provider>
            </div>
        </div>
    );
};

export default Header;