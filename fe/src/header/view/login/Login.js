import React from 'react';
import { Link, NavLink } from "react-router-dom";

import idsLogo from '../../images/idsLogo.gif'
import Footer from '../../../footer/view/Footer'

import './Login.css'
const Login = () => {
    return (
        <>
            <div className='login_'>
                <Link to="/">
                    <img
                        src={idsLogo}
                        alt=""
                        className="logo_"
                    />
                </Link>
                <div className='login_box'>
                    <div className='login_text'><strong>Log In</strong></div>
                    <form className='login_form'>
                        <div className='id_'>
                            <p className='id_text'>ID</p>
                            <input className='input_' />
                        </div>
                        <div className='id_'>
                            <p className='id_text'>P/W</p>
                            <input className='input_' />
                        </div>
                    </form>
                    <button className='login_btn'>로그인</button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;