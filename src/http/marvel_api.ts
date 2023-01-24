import axios from "axios";
import { IComic } from "../models/Comic";

const baseUrl = "https://gateway.marvel.com/v1/public/";
const apiKey = "04aace4f699fa3248ccc7d117714e1da";

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
