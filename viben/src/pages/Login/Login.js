import React, { Component } from "react";
//import Jumbotron from "../../components/Jumbotron";
import Slider from "../../components/Slider";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
//import { List } from "../../components/List";

import LoginForm from "../../components/LoginForm";

class Login extends Component {
    state = {
        email: "",
        pw: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();
       console.log(this.state.email)
       console.log(this.state.pw)
    };


    render() {
        return (
                <LoginForm
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    email={this.state.email}
                    pw={this.state.pw}
                />

        );
    }
}

export default Login;
