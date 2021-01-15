import React from 'react';
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

import '../css/Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <span>(주)블라블라</span>
                <span> | </span>
                <span>대표 : 홍길동 </span>
                <span> | </span>
                <span>사업자등록번호 : 000-00-0000</span>
                <span> | </span>
                <p> 주소 : 안드로메다 헤네시스마을 1004번길 00 </p>
                <p className='ids'><strong>Ids.</strong></p>
                <span><CallIcon /></span>
                <span><EmailIcon /></span>
                <span><FacebookIcon /></span>
                <span><TwitterIcon /></span>
            </div>
        </>
    );
};

export default Footer;