import axios from "axios";
//import filterParams from "./filterParams";

export default {
    getMusic: function(search) {
        console.log(search);
        return axios.get("https://itunes.apple.com/search?term=" + search);
        //return axios.get("https://api.napster.com/v2.1/artists/"+ search +"?apikey=NWNhNWQyYzQtYTlkYi00MWMwLTk1Y2ItY2ZmM2Y3YTgwZTg5");
    }
  // // Gets all saved articles
  // getSavedArticles: function() {
  //   return axios.get("/api/articles");
  // },
  // // Deletes the saved article with the given id
  // deleteArticle: function(id) {
  //   return axios.delete("/api/articles/" + id);
  // },
  // // Saves an article to the database
  // saveArticle: function(articleData) {
  //   return axios.post("/api/articles", articleData);
  // }
};
