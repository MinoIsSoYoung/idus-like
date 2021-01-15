import React from 'react';
import { Link, NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
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
                    <Button variant="contained" id='login_btn'>로그인</Button>
                </div>
                <div className='signin'>아직 회원이 아니신가요? &nbsp;&nbsp;<a href="www.naver.com"><strong>회원가입하기</strong></a></div>
            </div>
            <Footer />
        </>
    );
};

export default Login;