import axios from "axios";
//import filterParams from "./filterParams";


export default {

    // Gets all users
    getUsers: function() {
        return axios.get("/api/users");
    },
    // Gets the user with the given id
    getUser: function(id) {
        return axios.get("/api/users/" + id);
    },
    updateUser: function (updatedData) {
        console.log(updatedData.id);
        return axios.put("/api/users/" + updatedData.id, updatedData);
    },
    // Deletes the user with the given id
    deleteUser: function(id) {
        return axios.delete("/api/users/" + id);
    },
    // Saves a user to the database
    saveNewUser: function(userData) {
        console.log(userData);
        return axios.post("/api/users/", userData);
    },

    // Gets all profiles
    getProfiles: function() {
        return axios.get("/api/profiles");
    },
    // Gets the profile with the given id
    getProfile: function(id) {
        return axios.get("/api/profiles/" + id);
    },
    // Deletes the profile with the given id
    deleteProfile: function(id) {
        return axios.delete("/api/profiles/" + id);
    },
    // Saves a profile to the database
    saveNewProfile: function(profileData) {
        console.log(profileData);
        return axios.post("/api/profiles/", profileData);
    },


    // Gets all playlists
    getPlaylists: function() {
        return axios.get("/api/constellations");
    },
    // Gets the profile with the given id
    getPlaylist: function(id) {
        return axios.get("/api/constellations/" + id);
    },
    // Deletes the profile with the given id
    deletePlaylist: function(id) {
        return axios.delete("/api/constellations/" + id);
    },
    // Saves a profile to the database
    saveNewPlaylist: function(playlistData) {
        console.log(playlistData);
        return axios.post("/api/constellations/", playlistData);
    },

    // Gets all friends
    getFriendLists: function() {
        return axios.get("/api/friends");
    },
    // Gets the friend with the given id
    getFriends: function(id) {
        return axios.get("/api/friends/" + id);
    },
    // Deletes the friend with the given id
    deleteFriend: function(id) {
        return axios.delete("/api/friends/" + id);
    },
    // Saves a friend to friends list
    saveNewFriendsList: function(friendData) {
        console.log(friendData);
        return axios.post("/api/friends/", friendData);
    },

    // Gets all liked songs
    getLikedSongsList: function() {
        return axios.get("/api/likedSongs");
    },
    // Gets the liked song with the given id
    getLikedSongs: function(id) {
        return axios.get("/api/likedSongs/" + id);
    },
    // Deletes the liked song with the given id
    deleteLikedSong: function(id) {
        return axios.delete("/api/likedSongs/" + id);
    },
    // Saves a liked song to db
    saveToLikedSongs: function(likedSongsData) {
        console.log(likedSongsData);
        return axios.post("/api/likedSongs/", likedSongsData);
    },


    // Gets all liked constellations
    getLikedConstellations: function() {
        return axios.get("/api/likedConstellations");
    },
    // Gets the liked constellations with the given id
    getLikedConstellation: function(id) {
        return axios.get("/api/likedConstellations/" + id);
    },
    // Deletes the liked Constellations with the given id
    deleteLikedConstellations: function(id) {
        return axios.delete("/api/likedConstellations/" + id);
    },
    // Saves a liked constellation to db
    saveToLikedConstellations: function(likedConstellationsData) {
        console.log(likedConstellationsData);
        return axios.post("/api/likedConstellations/", likedConstellationsData);
    },


    getMusic: function(search) {
        console.log(search);
        return axios.get("https://itunes.apple.com/search?term=" + search);
        //return axios.get("https://api.napster.com/v2.1/artists/"+ search +"?apikey=NWNhNWQyYzQtYTlkYi00MWMwLTk1Y2ItY2ZmM2Y3YTgwZTg5");
    },
    saveTrack: function(search) {
        console.log(search);
        return axios.get("https://itunes.apple.com/search?term=" + search);
        //return axios.get("https://api.napster.com/v2.1/artists/"+ search +"?apikey=NWNhNWQyYzQtYTlkYi00MWMwLTk1Y2ItY2ZmM2Y3YTgwZTg5");
    },

    // Gets all tracks
    getTracklist: function() {
        return axios.get("/api/tracks");
    },
    // Gets the track with the given id
    getTracks: function(id) {
        return axios.get("/api/tracks/" + id);
    },
    // Deletes the track with the given id
    deleteTrack: function(id) {
        return axios.delete("/api/tracks/" + id);
    },
    // Saves a track to constellation
    saveToList: function(trackData) {
        console.log(trackData);
        return axios.post("/api/tracks/", trackData);
    }

};