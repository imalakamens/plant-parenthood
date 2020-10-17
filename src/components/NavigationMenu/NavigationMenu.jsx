import React from 'react';
import './NavigationMenu.css'
import { NavLink, Link } from 'react-router-dom';

const NavigationMenu = (props) => {
    let nav = props.user ? 
    <div className="navbar">
        <ul className="nav">
            <li className="nav-item d-flex justify-content-start">
                <NavLink exact to="/">
                    <h2>
                        .plant parenthood.
                    </h2>
                </NavLink>
            </li>
            <li> 
                <NavLink exact to="/plants">
                    Plants
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/addplant">
                    Place Plant
                </NavLink>
            </li>
            <li className="nav-item">
                <Link to="" onClick={props.handleLogout}>Logout</Link>
            </li>
        </ul>
    </div>
        :
    <div className="navbar">
        <ul className="nav">
            <li className="nav-item row align-self-start">
                <NavLink exact to="/">
                    <h2>
                        .plant parenthood.
                    </h2>
                </NavLink>
                </li>
            <li className="nav-item">
                <NavLink exact to="/signup">
                    Sign Up
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/login">
                    Log In
                </NavLink>
            </li>
        </ul>
    </div>
    return(
        <div>
            {nav}
        </div>
    );
}

export default NavigationMenu;