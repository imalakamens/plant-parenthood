import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navigation = (props) => {
    let nav = props.user ? 
    <div>
        <NavLink exact to="/">
            Now Logged In |
        </NavLink>
        <NavLink exact to="/plants">
            Plants |
        </NavLink>
        <NavLink exact to="/addplant">
            Place Plant |
        </NavLink>
        <Link to="" onClick={props.handleLogout}>Logout</Link>
    </div>
        :
    <div>
        <NavLink exact to="/signup">
            Sign Up |
        </NavLink>
        <NavLink exact to="/plants">
            Plants |
        </NavLink>
        <NavLink exact to="/addplant">
            Place Plant
        </NavLink>
    </div>
    return(
        <nav>
            {nav}
        </nav>
    );
}

export default Navigation;