import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGitHub, signInWithGoogle } from "../helpers/auth";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.googleSignIn = this.googleSignIn.bind(this);
        this.githubSignIn = this.githubSignIn.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ error: "" });
        try {
            await signin(this.state.email, this.state.password);
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    async googleSignIn() {
        try {
            await signInWithGoogle();
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    async githubSignIn() {
        try {
            await signInWithGitHub();
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    render() {
        return (
            <div className="login-container">
                { this.state.error ? <p className="message-error">{this.state.error}</p> : null }
                <form className="login-form-container" autoComplete="off" onSubmit={ this.handleSubmit } id="form-login">
                    <div className="title">
                        <h1><Link to="/">Chatty</Link></h1>
                    </div>
                    <p className="subtitle">Enter your credentials</p>
                    <div className="input-login">
                        <input placeholder="Email" name="email" type="email" onChange={ this.handleChange } value={ this.state.email } />
                    </div>
                    <div className="input-login">
                        <input placeholder="Password" name="password" onChange={ this.handleChange } value={ this.state.password } type="password" />
                    </div>
                    <div className="button-login"> 
                        <button type="submit">Login</button>
                    </div>
                    <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </form>
            </div>
        );
    }

}