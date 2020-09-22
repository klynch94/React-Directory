import axios from "axios";
const URL = "https://randomuser.me/api/?results=150";

export default {
  search: function() {
    return axios.get(URL);
  }
};
