import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import SearchCard from "../../components/SearchCard";
import Footer from "../../components/Footer";
import Nav2 from "../../components/Nav2";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";
import LoginForm from "../../components/LoginForm";
import RegForm from "../../components/RegForm";

class Login extends Component {
    state = {
        users: [],
        username: "",
        email: "",
        pw: "",
        pw2compare: "",
        _id: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    regSubmit = event => {
        event.preventDefault();
        console.log(this.state.email);
        console.log(this.state.pw);
        console.log(this.state.pw2compare);
        console.log(this.state.username);



         const _id = this.state.username;
         const username = this.state.username;
         const pw = this.state.pw;
         const email = this.state.email;

        API.saveNewUser(_id, username, pw, email).then(res => this.getUsers());
    };
    loginSubmit = event => {
        event.preventDefault();
        console.log(this.state.email);
        console.log(this.state.pw);

    };
    getUsers = () => {
        API.getUsers()
            .then(res =>
                this.setState({
                    users: res.data
                })
            )
            .catch(err => console.log(err));
    };



    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center">
                                <strong>Welcome to Vibe'n</strong>
                            </h1>
                            <h2 className="text-center">
                                All Things Music
                            </h2>
                        </Jumbotron>
                    </Col>
                    <Col size="md-12">
                        <Card title="Login" icon="sign-in">
                            <LoginForm
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.loginSubmit}
                                email={this.state.email}
                                pw={this.state.pw}
                            />

                            <RegForm
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.regSubmit}
                                username={this.state.username}
                                email={this.state.email}
                                pw={this.state.pw}
                                pw2compare={this.state.pw2compare}
                            />
                        </Card>
                    </Col>
                </Row>

                <Footer />
            </Container>
        );
    }
}

export default Login;
