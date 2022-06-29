import axios from "axios";

export const key = "PUT YOUR API KEY HERE";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default api;
