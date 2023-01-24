import axios from "axios";
import { IComic } from "../models/Comic";

const baseUrl = "https://gateway.marvel.com/v1/public/";
const apiKey = process.env.REACT_APP_MARVEL_API_KEY;

export interface ComicApiResponse {
  data: {
    offset: number;
    total: number;
    results: IComic[];
  };
}
export const comicsApi = axios.create({
  baseURL: baseUrl + "comics",
  params: {
    apikey: apiKey,
    orderBy: "modified",
  },
});
