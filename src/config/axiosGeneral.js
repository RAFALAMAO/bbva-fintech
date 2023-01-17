import axios from "axios";
import { URL_API, API_TOKEN } from "./environment";

export const axiosLogin = () => axios.create({
  baseURL: `${URL_API}/login`,
  headers:{
    "api-token": API_TOKEN,
  }
});

export const axiosUploadFile = () => axios.create({
  baseURL: `${URL_API}/upload-files`,
  headers:{
    "api-token": API_TOKEN,
  }
});

export const axiosGetUsersDoctos = () => axios.create({
  baseURL: `${URL_API}/get-files`,
  headers:{
    "api-token": API_TOKEN,
  }
});

export const axiosCreateUpdateUser = () => axios.create({
  baseURL: `${URL_API}/user/create-update`,
  headers:{
    "api-token": API_TOKEN,
  }
});