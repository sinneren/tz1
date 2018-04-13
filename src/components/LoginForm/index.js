import React, { Component } from 'react';
import './index.css';

export default class LoginForm extends Component {
    render() {
        return (
            <div className="form">
                <h2>Авторизация</h2>
                <div className="col">
                    <input type="text" placeholder="Login" className="form-control" />
                    <input type="password" placeholder="Password" className="form-control" />
                    <button className="btn">Enter</button>
                </div>
            </div>
        )
    }
}