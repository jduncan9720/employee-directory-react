import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

const API = {
  getRandomEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=5");
  }
};

export default API