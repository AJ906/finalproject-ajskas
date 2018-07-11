import axios from "axios";

export default {
    getMusic: function(search) {
        console.log(search);
        return axios.get("https://itunes.apple.com/search?term=" + search);
    }
};