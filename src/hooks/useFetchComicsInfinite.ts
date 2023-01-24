import { useMemo, useState } from "react";
import { comicsApi } from "../http/marvel_api";
import { IComic } from "../models/Comic";
import { v4 as uuidv4 } from "uuid";
import { useAutoFetch } from "./useAutoFetch";

interface ComicApiResponse {
  data: {
    offset: number;
    total: number;
    results: IComic[];
  };
}

export const useFetchComicsInfinite = (offset: number) => {
  // we stringify the object and parse it again so that react diff algo
  // works, maybe there's a more elegant way to pass the config on AxiosInstance???
  // oh welp, it works for now and it's not like this object is gonna get so big it's a bottleneck so...
  const config = JSON.stringify({ params: { offset: offset } });
  const { data, error, loading } = useAutoFetch<ComicApiResponse>(
    comicsApi,
    "",
    config
  );

  const [comics, setComics] = useState<IComic[]>([]);

  // memo below could be done with transformResponse Axios callback but that would make
  // useAutoFetch more of a hassle to use because of too many params
  useMemo(() => {
    if (data) {
      const comicsWithId = data.data.results.map((comic) => ({
        ...comic,
        uuid: uuidv4(),
      }));
      setComics((prev) => prev.concat(comicsWithId));
    }
  }, [data]);

  return { comics, loading, error };
};

// this was an attempt on react-virtualized Grid, might need later
// const splitComicsToRows = (comics: IComic[], rows: number) => {
//   const length = comics.length;
//   const columns = length / rows;

//   const split = [];
//   for (let i = 0; i < rows; i++) {
//     const start = (rows + 1) * i;
//     const end = start + columns;

//     split.push(comics.slice(start, end));
//   }
//   return split;
// };
