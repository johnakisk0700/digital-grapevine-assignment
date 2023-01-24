import axios from "axios";

const baseUrl = "https://gateway.marvel.com/v1/public/";
const apiKey = "04aace4f699fa3248ccc7d117714e1da";

export const comicsApi = axios.create({
  baseURL: baseUrl + "comics",
  params: {
    apikey: apiKey,
    orderBy: "modified",
  },
});
