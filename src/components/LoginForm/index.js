import React, { Component } from 'react';
import './index.css';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.loginInput = React.createRef();
        this.passInput = React.createRef();
        this.state = {
            err: false
        }
    }
    onLoginBtnHandler(event) {
        let data = {
            name: this.loginInput.current.value,
            password: this.passInput.current.value
        }
        if (data.name.toLowerCase() === 'admin' && data.password === '12345') {
            this.setState({
                err: false
            });
            localStorage.setItem('auth', true);
            window.location = '/profile';
        } else {
            this.setState({
                err: true
            });
        }
    }
    render() {
        const errMsg = <div className="col err-txt">
            <p>Имя пользователя или пароль введены не верно </p>
        </div>;
        return (
            <div className="form">
                <h2>Авторизация</h2>
                <div className="col">
                    <input type="text" ref={this.loginInput} placeholder="Login" className="form-control" />
                    <input type="password" ref={this.passInput} placeholder="Password" className="form-control" />
                    <button className="btn" onClick={this.onLoginBtnHandler.bind(this)}>Enter</button>
                </div>
                {this.state.err ? errMsg : ''}
            </div>
        )
    }
}