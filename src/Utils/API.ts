import axios from "axios";

const axiosInstanse = axios.create({
  baseURL: `http://localhost:3030/`,
  responseType: "json",
});

export default axiosInstanse;
