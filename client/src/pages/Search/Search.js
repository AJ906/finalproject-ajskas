import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
//import { Input, TextArea, FormBtn } from "../../components/Form";
import MusicSearchForm from "../../components/MusicSearchForm";
import Card from "../../components/Card";
import {Container} from "../../components/Grid";
import SearchCard from "../../components/SearchCard/SearchCard";

let albumArt = "";
let artistName = "";
let trackName = "";
let previewURL = "";
let genreType = "";
let song_id = "";
let trackURL = "";

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
                this.setState({ searchResults: res.data});
                console.log(res.data.results[0].artworkUrl100);
                console.log(res.data.results[0].artistName);
                console.log(res.data.results[0].trackCensoredName);
                console.log(res.data.results[0].previewUrl);
                console.log(res.data.results[0].primaryGenreName);
                console.log(res.data.results[0].trackId);
                console.log(res.data.results[0].trackViewUrl);
                albumArt = res.data.results[0].artworkUrl100;
                artistName = res.data.results[0].artistName;
                trackName = res.data.results[0].trackCensoredName;
                previewURL = res.data.results[0].previewUrl;
                genreType = res.data.results[0].primaryGenreName;
                song_id = res.data.results[0].trackId;
                trackURL = res.data.results[0].trackViewUrl;

            })
            .catch(err => {
                console.log('error GetMusic', err)
                this.setState({ error: err.message })
            });
        console.log(this.state.searchResults);
        console.log("test test test");

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

    };

    render() {
        return (
            <Container>
            <Card title="Music Search">
            <MusicSearchForm
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                searchValue={this.state.searchValue}
            />
            </Card>
                <Card title="Results">
                    {this.state.searchResults.resultCount ? (
                        <List>
                            {this.state.searchResults.results.map(result => (
                                <SearchCard
                                    artwork={result.artworkUrl100}
                                    dtid={result.trackId}
                                    artistName={result.artistName}
                                    trackName={result.trackName}
                                    playBack={result.previewUrl}
                                />
                            ))}
                        </List>
                    ) : (
                        <h2 className="text-center">{this.state.message}</h2>
                    )}
                </Card>
            </Container>


        );
    }
}

export default Search;
