import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return(
        <nav>
            <NavLink exact to="/signup">
                Sign Up |
            </NavLink>
            <NavLink exact to="/plants">
                Plants |
            </NavLink>
            <NavLink exact to="/addplant">
                Place Plant
            </NavLink>
        </nav>
    );
}

export default Navigation;