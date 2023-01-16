import axios from "axios";
import { URL_API, API_TOKEN } from "./environment";

export const axiosLogin = () => axios.create({
  baseURL: `${URL_API}/login`,
  headers:{
    "api-token": API_TOKEN,
  }
});