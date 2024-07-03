import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "d5ab93544ade2e46f5e7421f7222610c",
    language: "en-US",
  },
});
