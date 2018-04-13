import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return (
            <ul className="App-menu">
                <li><NavLink activeClassName='App-menu-active' to='/' exact>Home</NavLink></li>
                <li><NavLink activeClassName='App-menu-active' to='/news'>News</NavLink></li>
                <li><NavLink activeClassName='App-menu-active' to='/profile'>Profile</NavLink></li>
            </ul>
        )
    }
}