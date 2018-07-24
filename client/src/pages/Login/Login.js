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
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

let loggedInUser = {
    _userName: "",
    _profileId: "",
    _email: "",
    _photo: "",
    _pw: "",
    _twitter: "",
    _instagram: "",
    _about: "",
    _playlistId: "",
    _playlist: "",
    _friendsListId: "",
    _friendsList: "",
    _likedSongs: "",
    _likedSongsId: "",
    _likedPlaylists: "",
    _likedPlaylistsId: ""
};

let borderPatrol = {
    bpResId: "",
}

class Login extends Component {

    state = {
        user: "",
        profile:"",
        _id:"",
        userName: "",
        pw: "",
        email: "",
        pw2compare: "",
        proPic: "",
        instagram: "",
        twitter: "",
        about: "",
        photoURL: "",
        profile_id: "",
        playlist_id: "",
        playlist: "",
        friendList: "",
        friendsList_id: "",
        likedSongs: "",
        likedSongs_id: "",
        likedPlaylists: "",
        likedPlaylists_id: ""

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    loginSubmit = event => {
        event.preventDefault();
        console.log(this.state.userName);
        console.log(this.state.pw);

        this.checkUser();

    };


    checkUser = () => {

        console.log(this.state.userName);
        const id = this.state.userName;
        const pass = this.state.pw;
        API.getUser(id)
            .then(res =>
                this.validateUser(id, pass, res)
            )
            .catch(err =>
                console.log(err)
            );
    };

    validateUser = (id, pass, res) => {
        console.log(res);
        console.log(id);
        console.log(pass);
        console.log(res.data);
        if (res.data !== null) {

            if (res.data._id === id && res.data.pw === pass) {
                this.setState({ _id: res.data._id, userName: res.data.userName, email: res.data.email, pw: res.data.pw,
                    instagram: res.data.instagram, twitter: res.data.twitter, proPic:res.data.proPic,
                    profile_id: res.data.profile_id, friendsList_id: res.data.friendsList_id, playlist_id: res.data.playlist_id});
                console.log("user valid");
                loggedInUser._userName = this.state.userName;
                loggedInUser._email = this.state.email;
                loggedInUser._photo = this.state.proPic;
                loggedInUser._twitter = this.state.twitter;
                loggedInUser._instagram = this.state.instagram;
                loggedInUser._pw = this.state.pw;
                loggedInUser._profileId = this.state.profile_id;
                loggedInUser._friendsListId = this.state.friendsList_id;
                loggedInUser._playlistId = this.state.playlist_id;

                console.log(loggedInUser);
                console.log("logged in as" + loggedInUser._userName);
                this.setState({redirect: true});
            } else  {
                console.log("user invalid");
            }

        } else {
            console.log("user invalid");
        }
    };

    regSubmit = event => {

        event.preventDefault();

            API.saveNewUser({
                email: this.state.email,
                instagram: this.state.instagram,
                profile_id: this.state.profile_id,
                proPic: this.state.proPic,
                pw: this.state.pw,
                twitter: this.state.twitter,
                userName: this.state.userName,
                _id: this.state.userName
            })
                .then(res => {
                    this.loadUser();
                    loggedInUser._userName = this.state.userName;
                    loggedInUser._email = this.state.email;
                    loggedInUser._photo = this.state.proPic;
                    loggedInUser._twitter = this.state.twitter;
                    loggedInUser._instagram = this.state.instagram;
                    loggedInUser._pw = this.state.pw;

                    console.log(res);
                })
                .catch(err => console.log(err));
    };

    loadUser = () => {
        API.getUsers()
            .then(res =>
                this.setState({ user: res.data, _id: "", userName: "", email: "", pw: "", instagram: "", twitter: "", proPic: "", profile_id: ""})
            )
            .catch(err => console.log(err));

        this.saveProfile();
    };

    saveProfile = () => {
        API.saveNewProfile({
            about: this.state.about,
            photoURL: this.state.proPic,
            profile_id: this.state.profile_id
        })
            .then(res => {
                this.loadProfiles();
                loggedInUser._profileId = res.data._id;
                this.addProfile_ID();
                loggedInUser._about = this.state.about;
                console.log(res);
                console.log(loggedInUser);
            })
            .catch(err => console.log(err));
    };

    loadProfiles = () => {
        API.getProfiles()
            .then(res =>
                this.setState({ profile:res.data, about:"", photoURL: "",profile_id: ""})
            )
            .catch(err => console.log(err));
        this.savePlaylist();
    };


    addProfile_ID = () => {
        API.updateUser({
            email: loggedInUser._email,
            instagram: loggedInUser._instagram,
            profile_id: loggedInUser._profileId,
            proPic: loggedInUser._photo,
            pw: loggedInUser._pw,
            twitter: loggedInUser._twitter,
            userName: loggedInUser._userName,
            _id: loggedInUser._userName
        })
            .then(res =>
                console.log(res),
                console.log("user profile_id updated")
            )
            .catch(err => console.log(err));
    };



    savePlaylist = () => {

        const constellation = {
            I: "",
            II: "",
            III: "",
            IV: "",
            V: "",
            VI: "",
            VII: "",
            VIII: "",
            IX: "",
            X: ""
        }

        API.saveNewPlaylist({
            playlist: constellation,
            playlist_id: this.state.playlist_id
        })
            .then(res => {
                this.loadPlaylists();
                loggedInUser._playlistId = res.data._id;
                this.addPlaylist_ID();
                loggedInUser._playlist = res.data.playlist;
                console.log(res);
                console.log(loggedInUser);
            })
            .catch(err => console.log(err));
    };

    loadPlaylists = () => {
        API.getPlaylists()
            .then(res =>
                this.setState({ playlist:res.data.playlist, playlist_id: ""})
            )
            .catch(err => console.log(err));
        this.saveFriendsList();
    };


    addPlaylist_ID = () => {
        API.updateUser({
            email: loggedInUser._email,
            instagram: loggedInUser._instagram,
            playlist_id: loggedInUser._playlistId,
            profile_id: loggedInUser._profileId,
            proPic: loggedInUser._photo,
            pw: loggedInUser._pw,
            twitter: loggedInUser._twitter,
            userName: loggedInUser._userName,
            _id: loggedInUser._userName
        })
            .then(res =>
                    console.log(res),
                console.log("user playlist_id updated")
            )
            .catch(err => console.log(err));
    };


    saveFriendsList = () => {

        const friends = [];

        API.saveNewFriendsList({
            friendsList: friends,
            friendsList_id: this.state.friendsList_id
        })
            .then(res => {
                this.loadFriendLists();
                loggedInUser._friendsListId = res.data._id;
                this.addFriendList_ID();
                loggedInUser._friendsList = res.data.friendsList;
                console.log(res);
                console.log(loggedInUser);
            })
            .catch(err => console.log(err));
    };

    loadFriendLists = () => {
        API.getFriendLists()
            .then(res =>
                this.setState({ friendsList:res.data.friendsList, friendsList_id: ""})
            )
            .catch(err => console.log(err));
        // this.saveSongLikesList();
    };


    addFriendList_ID = () => {
        API.updateUser({
            email: loggedInUser._email,
            friendsList_id: loggedInUser._friendsListId,
            instagram: loggedInUser._instagram,
            playlist_id: loggedInUser._playlistId,
            profile_id: loggedInUser._profileId,
            proPic: loggedInUser._photo,
            pw: loggedInUser._pw,
            twitter: loggedInUser._twitter,
            userName: loggedInUser._userName,
            _id: loggedInUser._userName
        })
            .then(res =>
                    console.log(res),
                console.log("user friendsList_id updated")
            )
            .catch(err => console.log(err));
        this.setState({redirect: true});
    };


    // saveSongLikesList = () => {
    //
    //     const likedSongs = [];
    //
    //     API.saveToLikedSongs({
    //         likedSongs: likedSongs,
    //         likedSongs_id: this.state.likedSongs_id
    //     })
    //         .then(res => {
    //             this.loadSongLikesList();
    //             loggedInUser._likedSongsId = res.data._id;
    //             this.addSongLikes_ID();
    //             loggedInUser._likedSongs = res.data.likedSongs;
    //             console.log(res);
    //             console.log(loggedInUser);
    //         })
    //         .catch(err => console.log(err));
    // };
    //
    // loadSongLikesList = () => {
    //     API.getLikedSongsList()
    //         .then(res =>
    //             this.setState({ likedSongs:res.data.likedSongs, likedSongs_id: ""})
    //         )
    //         .catch(err => console.log(err));
    //     this.savePlaylistLikesList();
    // };
    //
    //
    // addSongLikes_ID = () => {
    //     API.updateUser({
    //         email: loggedInUser._email,
    //         friendsList_id: loggedInUser._friendsListId,
    //         instagram: loggedInUser._instagram,
    //         likedSongs_id: loggedInUser._likedSongsId,
    //         playlist_id: loggedInUser._playlistId,
    //         profile_id: loggedInUser._profileId,
    //         proPic: loggedInUser._photo,
    //         pw: loggedInUser._pw,
    //         twitter: loggedInUser._twitter,
    //         userName: loggedInUser._userName,
    //         _id: loggedInUser._userName
    //     })
    //         .then(res =>
    //                 console.log(res),
    //             console.log("user likedSongs_id updated")
    //         )
    //         .catch(err => console.log(err));
    // };


    // savePlaylistLikesList = () => {
    //
    //     const likedPlaylists = [];
    //
    //     API.saveToLikedConstellations({
    //         likedPlaylists: likedPlaylists,
    //         likedPlaylists_id: this.state.likedPlaylists_id
    //     })
    //         .then(res => {
    //             this.loadPlaylistLikesList();
    //             loggedInUser._likedPlaylistsId = res.data._id;
    //             this.addPlaylistLikes_ID();
    //             loggedInUser._likedPlaylists = res.data.likedPlaylists;
    //             console.log(res);
    //             console.log(loggedInUser);
    //         })
    //         .catch(err => console.log(err));
    // };
    //
    // loadPlaylistLikesList = () => {
    //     API.getLikedConstellations()
    //         .then(res =>
    //             this.setState({ likedPlaylists:res.data.likedPlaylists, likedPlaylists_id: ""})
    //         )
    //         .catch(err => console.log(err));
    // };
    //
    //
    // addPlaylistLikes_ID = () => {
    //     API.updateUser({
    //         email: loggedInUser._email,
    //         friendsList_id: loggedInUser._friendsListId,
    //         instagram: loggedInUser._instagram,
    //         likedPlaylists_id: loggedInUser._likedPlaylistsId,
    //         likedSongs_id: loggedInUser._likedSongsId,
    //         playlist_id: loggedInUser._playlistId,
    //         profile_id: loggedInUser._profileId,
    //         proPic: loggedInUser._photo,
    //         pw: loggedInUser._pw,
    //         twitter: loggedInUser._twitter,
    //         userName: loggedInUser._userName,
    //         _id: loggedInUser._userName
    //     })
    //         .then(res =>
    //                 console.log(res),
    //             console.log("user likedPlaylists_id updated")
    //         )
    //         .catch(err => console.log(err));
    // };

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/Home" />;
        }
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
                                userName={this.state.userName}
                                pw={this.state.pw}
                            />

                            <RegForm
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.regSubmit}
                                userName={this.state.userName}
                                email={this.state.email}
                                pw={this.state.pw}
                                pw2compare={this.state.pw2compare}
                                instagram={this.state.instagram}
                                twitter={this.state.twitter}
                                proPic={this.state.proPic}
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
