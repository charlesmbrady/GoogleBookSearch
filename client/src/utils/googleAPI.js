import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  searchTitles: function(query) {
    return axios.get(BASEURL + query + "+intitle:&maxResults=40");
  },
  getBooks: function() {
    return axios.get("/api/books");
  },
  saveBook: function(book) {
    return axios.post("/api/books", book);
  },
  removeBook: function(id) {
    return axios.delete(`/api/books/${id}`);
  }
};
