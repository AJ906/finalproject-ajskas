import React, { Component } from "react";
import Slider from "../../components/Slider/Slider";
import API from "../../utils/API";
import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
//import { Input, TextArea, FormBtn } from "../../components/Form";
import MusicSearchForm from "../../components/MusicSearchForm";

class Search extends Component {

    // componentDidMount() {
    //     $(‘.slider’).slider(); //Initialize slider
    //     $(‘.slider’).slider(‘next’); //Roll slider past initial fadein
    // },

    state = {
        searchValue: "",
        searchResults: {}
    };

    searchMusic = (musicSearch) => {
        API.getMusic(musicSearch)
            .then(res => {
                console.log('Success GetMusic', res);

                if (res.data.status === "error") {
                    throw new Error(res.data.message);

                }
                this.setState({ searchResults: res.data.message, error: "" });
            })
            .catch(err => {
                console.log('error GetMusic', err)
                this.setState({ error: err.message })
            });

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.searchValue);
        const search = this.state.searchValue
        this.searchMusic(search);
        console.log(this.state.searchResults);
    };

    render() {
        return (

            <MusicSearchForm
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                searchValue={this.state.searchValue}
            />


        );
    }
}

export default Search;
