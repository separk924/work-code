import axios from "axios";

const starwars = {
  getPeople: async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/people");
      return response.data.results;
    } catch (error) {
      return error;
    }
  },
  getPlanets: async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/planets");
      return response.data.results;
    } catch (error) {
      return error;
    }
  },
  getStarships: async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/starships");
      return response.data.results;
    } catch (error) {
      return error;
    }
  },
  getFilms: async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/films");
      return response.data.results;
    } catch (error) {
      return error;
    }
  },
  getSpecies: async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/species");
      return response.data.results;
    } catch (error) {
      return error;
    }
  },
  getVehicles: async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/vehicles");
      return response.data.results;
    } catch (error) {
      return error;
    }
  },
};

export default starwars;