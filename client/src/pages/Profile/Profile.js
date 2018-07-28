import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
//import { Input, TextArea, FormBtn } from "../../components/Form";
import { Galaxy } from "../../components/Viber";
import Particles from 'react-particles-js';
import "./Profile.css";
import ProView from "../../components/ProView/ProView";





class Profile extends Component {

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
        likedPlaylists_id: "",
        v0:"",
        v1:"",
        v2:"",
        v3:"",
        v4:"",
        v5:"",
        v6:"",
        v7:"",
        v8:"",
        v9:"",
        v00:"",
        v11:"",
        v22:"",
        v33:"",
        v44:"",
        v55:"",
        v66:"",
        v77:"",
        v88:"",
        v99:"",
    };

    // componentDidMount() {
    //     $(‘.slider’).slider(); //Initialize slider
    //     $(‘.slider’).slider(‘next’); //Roll slider past initial fadein
    // },

    componentDidMount() {
        this.retrieveUser()
    }

    retrieveUser = () => {

        API.getLoggedIn()
            .then(res =>
                    this.populateUser(res)
                // console.log(res)
            )
            .catch(err =>
                console.log(err)
            );
    };

    populateUser = (res) => {
        const id = res.data[res.data.length-1].lastUser
        API.getUser(id)
            .then(res =>
                this.setState({ _id: res.data._id, userName: res.data.userName, email: res.data.email, pw: res.data.pw,
                    instagram: res.data.instagram, twitter: res.data.twitter, proPic:res.data.proPic,
                    profile_id: res.data.profile_id, friendsList_id: res.data.friendsList_id, playlist_id: res.data.playlist_id})
            )
            .catch(err =>
                console.log(err)
            );

        console.log(id)
    };

    render() {
        return (


            <Row id="profile-body" >
                <Col id="profileData" size="md-6">
                    <ProView
                        profilePic = {this.state.proPic}
                        userName = {this.state.userName}
                        userLocation = {"user location here"}
                        user411 = {"user 411 here"}
                        instagram={"Instagram"}
                        twitter={"Twitter"}
                    />
                </Col>
                <Col id="musicSide" size="md-6">
                    <div id= "headx">
                        <h2 id="tcHeader"> Track Constellation </h2>
                        <div id="constellation">
                            <Row>
                                <Col size="md-6">
                                    <p class="tracks" id="track1"> I <span></span> </p>
                                    <p class="tracks" id="track2"> II <span ></span> </p>
                                    <p class="tracks" id="track3"> III <span  ></span> </p>
                                    <p class="tracks" id="track4"> IV <span  ></span> </p>
                                    <p class="tracks" id="track5"> V <span  ></span> </p>
                                </Col>
                                <Col size="md-6">
                                    <p class="tracks" id="track6"> VI <span ></span> </p>
                                    <p class="tracks" id="track7"> VII <span ></span> </p>
                                    <p class="tracks" id="track8"> VIII <span ></span> </p>
                                    <p class="tracks" id="track9"> IX <span  ></span> </p>
                                    <p class="tracks" id="track10"> X <span ></span> </p>
                                </Col>
                            </Row>
                        </div>
                    <Particles
                        params={{
                            particles: {
                                number: {
                                    value: 130,
                                    density: {
                                        enable: true,
                                        value_area: 800
                                    }
                                },
                                color: {
                                    value: "#ffffff"
                                },
                                shape: {
                                    type: "circle",
                                    stroke: {
                                        width: 0,
                                        color: "#000000"
                                    },
                                    polygon: {
                                        nb_sides: 5
                                    },
                                    image: {
                                        src: "img/github.svg",
                                        width: 100,
                                        height: 100
                                    }
                                },
                                opacity: {
                                    value: 0.5,
                                    random: false,
                                    anim: {
                                        enable: false
                                    },
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: false
                                }
                            },
                            line_linked: {
                                shadow: {
                                    enable: true,
                                    color: "#3CA9D1",
                                    blur: 1
                                },
                                enable: true,
                                distance: 150,
                                color: "#ffffff",
                                opacity: 0.4,
                                width: 1
                            },
                            move: {
                                enable: true,
                                speed: 6,
                                direction: "none",
                                random: false,
                                straight: false,
                                out_mode: "out",
                                bounce: true,
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200
                                }
                            },
                            interactivity: {
                                detect_on: "canvas",
                                events: {
                                    onhover: {
                                        enable: true,
                                        mode: "repulse"
                                    },
                                    onclick: {
                                        enable: true,
                                        mode: "push"
                                    },
                                    resize: true
                                },
                                modes: {
                                    grab: {
                                        distance: 400,
                                        line_linked: {
                                            opacity: 1
                                        }
                                    },
                                    bubble: {
                                        distance: 400,
                                        size: 40,
                                        duration: 2,
                                        opacity: 8,
                                        speed: 3
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.4
                                    },
                                    push: {
                                        particles_nb: 4
                                    },
                                    remove: {
                                        particles_nb: 2
                                    }
                                }
                            },
                            retina_detect: true
                        }}
                        style={{
                            width: '100%',
                            height: '500px',
                            backgroundImage: `url(${"http://thestrategicfellow.com/wp-content/uploads/2018/07/galaxy.jpg"})`
                        }}
                    />
                    </div>
                </Col>
            </Row>
        )

    }
}

export default Profile;
