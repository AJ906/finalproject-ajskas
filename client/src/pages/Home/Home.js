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

let vibersNames = {
    v0:"",
    v1:"",
    v2:"",
    v3:"",
    v4:"",
    v5:"",
    v6:"",
    v7:"",
    v8:"",
    v9:""
};
let vibersPics = {
    v0:"",
    v1:"",
    v2:"",
    v3:"",
    v4:"",
    v5:"",
    v6:"",
    v7:"",
    v8:"",
    v9:""
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

        loggedInUser._userName = this.state.userName;
        loggedInUser._email = this.state.email;
        loggedInUser._photo = this.state.proPic;
        loggedInUser._twitter = this.state.twitter;
        loggedInUser._instagram = this.state.instagram;
        loggedInUser._pw = this.state.pw;
        loggedInUser._profileId = this.state.profile_id;
        loggedInUser._friendsListId = this.state.friendsList_id;
        loggedInUser._playlistId = this.state.playlist_id;
        this.populateVibers()

    };

    populateVibers = () => {

        API.getUsers()
            .then(res =>
                this.setState({ v0: res.data[0].userName, v1: res.data[1].userName, v2: res.data[2].userName,
                    v00: res.data[0].proPic, v11: res.data[1].proPic, v22: res.data[2].proPic})
            )
            .catch(err =>
                console.log(err)
            );

        // loggedInUser._userName = this.state.userName;
        // loggedInUser._email = this.state.email;
        // loggedInUser._photo = this.state.proPic;
        // loggedInUser._twitter = this.state.twitter;
        // loggedInUser._instagram = this.state.instagram;
        // loggedInUser._pw = this.state.pw;
        // loggedInUser._profileId = this.state.profile_id;
        // loggedInUser._friendsListId = this.state.friendsList_id;
        // loggedInUser._playlistId = this.state.playlist_id;


    };

    // loadVibers = (res) => {
    //
    //     // for (var i = 0; i < res.data.length; i++) {
    //     //     vibersNames.push(res.data[i].userName);
    //     //     vibersPics.push(res.data[i].proPic);
    //     // }
    //     vibersNames.v0 = res.data[0].userName;
    //     vibersPics.v0 = res.data[0].proPic;
    //     vibersNames.v1 = res.data[1].userName;
    //     vibersPics.v1 = res.data[1].proPic;
    //     vibersNames.v2 = res.data[2].userName;
    //     vibersPics.v2 = res.data[2].proPic;
    //     vibersNames.v3 = res.data[3].userName;
    //     vibersPics.v3 = res.data[3].proPic;
    //
    //
    // };





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
                                    profilePic = {this.state.v00}
                                    viberName = {this.state.v0}
                                />
                            </div>

                            <div className="vibers" id="viber2">
                                <Viber
                                    profilePic = {this.state.v22}
                                    viberName = {this.state.v2}
                                />
                            </div>
                            <div className="vibers" id="viber3">
                                <Viber
                                    profilePic = {this.state.v11}
                                    viberName = {this.state.v1}
                                />
                            </div>
                            {/*<div className="vibers" id="viber4">*/}
                                {/*<Viber*/}
                                    {/*profilePic = {"http://thestrategicfellow.com/wp-content/uploads/2018/07/Placeholder.png"}*/}
                                    {/*viberName = {"viberName"}*/}
                                {/*/>*/}
                            {/*</div>*/}
                            {/*<div className="vibers" id="viber5">*/}
                                {/*<Viber*/}
                                    {/*profilePic = {"http://thestrategicfellow.com/wp-content/uploads/2018/07/Placeholder.png"}*/}
                                    {/*viberName = {"viberName"}*/}
                                {/*/>*/}
                            {/*</div>*/}
                            {/*<div className="vibers" id="viber6">*/}
                                {/*<Viber*/}
                                    {/*profilePic = {"http://thestrategicfellow.com/wp-content/uploads/2018/07/Placeholder.png"}*/}
                                    {/*viberName = {"viberName"}*/}
                                {/*/>*/}
                            {/*</div>*/}
                            {/*<div className="vibers" id="viber7">*/}
                                {/*<Viber*/}
                                    {/*profilePic = {"http://thestrategicfellow.com/wp-content/uploads/2018/07/Placeholder.png"}*/}
                                    {/*viberName = {"viberName"}*/}
                                {/*/>*/}
                            {/*</div>*/}
                            {/*<div className="vibers" id="viber8">*/}
                                {/*<Viber*/}
                                    {/*profilePic = {"http://thestrategicfellow.com/wp-content/uploads/2018/07/Placeholder.png"}*/}
                                    {/*viberName = {"viberName"}*/}
                                {/*/>*/}
                            {/*</div>*/}
                            {/*<div className="vibers" id="viber9">*/}
                                {/*<Viber*/}
                                    {/*profilePic = {"http://thestrategicfellow.com/wp-content/uploads/2018/07/Placeholder.png"}*/}
                                    {/*viberName = {"viberName"}*/}
                                {/*/>*/}
                            {/*</div>*/}
                            {/*<div className="vibers" id="viber10">*/}
                                {/*<Viber*/}
                                    {/*profilePic = {"http://thestrategicfellow.com/wp-content/uploads/2018/07/Placeholder.png"}*/}
                                    {/*viberName = {"viberName"}*/}
                                {/*/>*/}
                            {/*</div>*/}

                            <div className="vibers" id="user">
                                <Viber
                                    profilePic = {this.state.proPic}
                                    viberName = {this.state.userName}
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
