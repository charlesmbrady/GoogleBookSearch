import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=intitle:";


export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};
