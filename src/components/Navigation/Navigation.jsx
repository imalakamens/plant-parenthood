import React from 'react';
import './Navigation.css'
import NavigationMenu from '../NavigationMenu/NavigationMenu';

const Navigation = (props) => {
    return(
        <nav>
            <NavigationMenu
                user={props.user}
                handleLogout={props.handleLogout}
            />
        </nav>
    );
}

export default Navigation;