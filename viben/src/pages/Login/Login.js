import React, { Component } from "react";
import Slider from "../../components/Slider/Slider";
import Nav from "../../components/Nav/Nav";
import API from "../../utils/API";
import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
//import { Input, TextArea, FormBtn } from "../../components/Form";

class Login extends Component {

    state = {
        emailInput: "",
        pwInput: "",
    };

    handleInputChange = event => {
        const { type, value } = event.target;
        this.setState({
            [type]: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({
            emailInput: this.state.email,
            pwInput:this.state.pw

        });
    };



    // componentDidMount() {
    //     $(‘.slider’).slider(); //Initialize slider
    //     $(‘.slider’).slider(‘next’); //Roll slider past initial fadein
    // },

    render() {
        return (

        <h1>test</h1>


        );
    }
}



export default Login;
