import React, { Component } from "react";
import Nav from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import SearchCard from "../../components/SearchCard";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";
import "./Home.css";
import ProView from "../../components/ProView/ProView";
import Particles from 'react-particles-js';
import Viber from "../../components/Viber/Viber";



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


class Home extends Component {
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
                console.log(res)
            )
            .catch(err =>
                console.log(err)
            );
        this.setState({ _id: res.data._id, userName: res.data.userName, email: res.data.email, pw: res.data.pw,
            instagram: res.data.instagram, twitter: res.data.twitter, proPic:res.data.proPic,
            profile_id: res.data.profile_id, friendsList_id: res.data.friendsList_id, playlist_id: res.data.playlist_id});
        loggedInUser._userName = this.state.userName;
        loggedInUser._email = this.state.email;
        loggedInUser._photo = this.state.proPic;
        loggedInUser._twitter = this.state.twitter;
        loggedInUser._instagram = this.state.instagram;
        loggedInUser._pw = this.state.pw;
        loggedInUser._profileId = this.state.profile_id;
        loggedInUser._friendsListId = this.state.friendsList_id;
        loggedInUser._playlistId = this.state.playlist_id;
    }




    render() {
        setTimeout(this.normalRender, 80000);
    return (


        <div id="vibeCatcher">
      <Container className="pull-right">
        <Row>
          <Col size="md-12">
              <h2 id="vcHeader"> Vibe Catcher </h2>
                <div id="constellation" className="pull-right">

                    <Row>
                        <Col size="md-12">
                            <div className="vibers" id="viber1">
                                <Viber
                                    profilePic = {"http://thestrategicfellow.com/wp-content/uploads/2018/07/Placeholder.png"}
                                    viberName = {"viberName1"}
                                />
                            </div>

                            <div className="vibers" id="viber2">
                                <Viber
                                    profilePic = {"http://thestrategicfellow.com/wp-content/uploads/2018/07/Placeholder.png"}
                                    viberName = {"viberName"}
                                />
                            </div>
                            <div className="vibers" id="viber3">
                                <Viber
                                    profilePic = {"http://thestrategicfellow.com/wp-content/uploads/2018/07/Placeholder.png"}
                                    viberName = {"viberName"}
                                />
                            </div>
                            <div className="vibers" id="viber4">
                                <Viber
                                    profilePic = {"http://thestrategicfellow.com/wp-content/uploads/2018/07/Placeholder.png"}
                                    viberName = {"viberName"}
                                />
                            </div>
                            <div className="vibers" id="viber5">
                                <Viber
                                    profilePic = {"http://thestrategicfellow.com/wp-content/uploads/2018/07/Placeholder.png"}
                                    viberName = {"viberName"}
                                />
                            </div>
                            <div className="vibers" id="viber6">
                                <Viber
                                    profilePic = {"http://thestrategicfellow.com/wp-content/uploads/2018/07/Placeholder.png"}
                                    viberName = {"viberName"}
                                />
                            </div>
                            <div className="vibers" id="viber7">
                                <Viber
                                    profilePic = {"http://thestrategicfellow.com/wp-content/uploads/2018/07/Placeholder.png"}
                                    viberName = {"viberName"}
                                />
                            </div>
                            <div className="vibers" id="viber8">
                                <Viber
                                    profilePic = {"http://thestrategicfellow.com/wp-content/uploads/2018/07/Placeholder.png"}
                                    viberName = {"viberName"}
                                />
                            </div>
                            <div className="vibers" id="viber9">
                                <Viber
                                    profilePic = {"http://thestrategicfellow.com/wp-content/uploads/2018/07/Placeholder.png"}
                                    viberName = {"viberName"}
                                />
                            </div>
                            <div className="vibers" id="viber10">
                                <Viber
                                    profilePic = {"http://thestrategicfellow.com/wp-content/uploads/2018/07/Placeholder.png"}
                                    viberName = {"viberName"}
                                />
                            </div>

                            <div className="vibers" id="user">
                                <Viber
                                    profilePic = {"http://thestrategicfellow.com/wp-content/uploads/2018/07/Placeholder.png"}
                                    viberName = {"viberName"}
                                />
                            </div>

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
                      height: '100%',
                      backgroundImage: `url(${"http://thestrategicfellow.com/wp-content/uploads/2018/07/galaxy.jpg"})`
                  }}
              />

          </Col>

        </Row>

      </Container>
        </div>

    );
  }
}

export default Home;
