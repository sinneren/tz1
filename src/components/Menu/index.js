import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return (
            <ul className="App-menu">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/news'>News</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
            </ul>
        )
    }
}