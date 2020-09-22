import axios from "axios";
const URL = "https://randomuser.me/api/?results=150";

export default {
  search: function(query) {
    return axios.get(URL);
  }
};
