import React, { Component } from "react";
//import Jumbotron from "../../components/Jumbotron";
import Slider from "../../components/Slider";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
//import { List } from "../../components/List";

import LoginForm from "../../components/LoginForm";
import RegForm from "../../components/RegForm";

class Login extends Component {
    state = {
        username: "",
        email: "",
        pw: "",
        pw2compare: ""
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
        console.log(this.state.pw2compare)
        console.log(this.state.username)
    };


    render() {
        return (
            <Container>
                <LoginForm
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    email={this.state.email}
                    pw={this.state.pw}
                />

                <RegForm
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    username={this.state.username}
                    email={this.state.email}
                    pw={this.state.pw}
                    pw2compare={this.state.pw2compare}
                />

            </Container>

        );
    }
}

export default Login;
