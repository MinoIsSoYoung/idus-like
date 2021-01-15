import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { IconName } from "react-icons/fi";
import { IconContext } from "react-icons";

import idsLogo from '../images/idsLogo.gif'
import Navbar from './navbar/Navbar';
import "../scss/Header.css"

import Input from '@material-ui/core/Input';
import { TiShoppingCart } from "react-icons/ti";
import { FiUser } from "react-icons/fi";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'inline-flex',
        position: 'relative',
        width: 500,
        marginTop: '20px',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    // divider: {
    //     height: 28,
    //     margin: 4,
    // },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <div className="header">
                <span>
                    <Navbar className='navbar' />
                </span>
                <span>
                    <Link to="/">
                        <img
                            src={idsLogo}
                            alt=""
                            className="logo"
                        />
                    </Link>
                </span>
                <span className='searchbar'>
                    {/* <Input placeholder="Search.." inputProps={{ 'aria-label': 'description' }} id="searchbar_" /> */}
                    <Paper component="form" className={classes.root}>
                        <InputBase
                            className={classes.input}
                            placeholder="Search"
                        // inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </span>
                <span>
                    <IconContext.Provider value={{ size: "2.6rem", title: "Cart" }}>
                        <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
                            <div className='login'>
                                <TiShoppingCart />
                                <p style={{ height: 0, margin: "6px", marginRight: 0 }}>Cart</p>
                            </div>
                        </Link>
                    </IconContext.Provider>
                </span>
                <span>
                    <IconContext.Provider value={{ size: "2.4rem", title: "Login" }}>
                        <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                            <div className='login'>
                                <FiUser />
                                <p style={{ height: 0, margin: "6px" }}>Login</p>
                            </div>
                        </Link>
                    </IconContext.Provider>
                </span>
            </div>
        </div>
    );
};

export default Header;