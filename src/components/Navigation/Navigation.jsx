import React from 'react';
import './Navigation.css'
import { NavLink, Link } from 'react-router-dom';

const Navigation = (props) => {
    let nav = props.user ? 
    <div>
        <ul>
            <li>
                <NavLink exact to="/">
                    Now Logged In
                </NavLink>
            </li>
            <li> 
                <NavLink exact to="/plants">
                    Plants
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/addplant">
                    Place Plant
                </NavLink>
            </li>
            <li>
                <Link to="" onClick={props.handleLogout}>Logout</Link>
            </li>
        </ul>
    </div>
        :
    <div>
        <ul>
            <li>
                <NavLink exact to="/signup">
                    Sign Up
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/login">
                    Log In
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/plants">
                    Plants
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/addplant">
                    Place Plant
                </NavLink> 
            </li>
        </ul>
    </div>
    return(
        <nav>
            {nav}
        </nav>
    );
}

export default Navigation;