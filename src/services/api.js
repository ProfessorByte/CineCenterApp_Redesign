import axios from "axios";
import Constants from "expo-constants";

export const key = Constants.manifest.extra.tmdbApiKey;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default api;
