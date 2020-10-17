import React from 'react';
import './Navigation.css'
import NavigationMenu from '../NavigationMenu/NavigationMenu';

const Navigation = (props) => {
    return(
        <nav className="nav shadow p-3 mb-5 bg-white rounded">
            <NavigationMenu
                user={props.user}
                handleLogout={props.handleLogout}
            />
        </nav>
    );
}

export default Navigation;