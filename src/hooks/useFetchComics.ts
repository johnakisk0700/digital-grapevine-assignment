import { useEffect, useState } from "react";
import { comicsApi } from "../http/api";
import { IComic } from "../models/Comic";
import { v4 as uuidv4 } from "uuid";

interface ComicApiResponse {
  data: {
    offset: number;
    total: number;
    results: IComic[];
  };
}

export const useFetchComics = (offset: number) => {
  const [loading, setLoading] = useState(false);
  const [comics, setComics] = useState<IComic[]>([]);
  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        const comics = await comicsApi.get<ComicApiResponse>("", {
          params: { offset: offset },
          signal: controller.signal,
        });

        // set a custom id for each to be used as key
        // because this api fetches duplicates
        const actualComics = comics.data.data.results.map((comic) => ({
          ...comic,
          uuid: uuidv4(),
        }));

        setComics((prev) => prev.concat(actualComics));
      } catch (e) {
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [offset]);
  return { comics, loading };
};

// this was an attempt on react-virtualized Grid, might need later
const splitComicsToRows = (comics: IComic[], rows: number) => {
  const length = comics.length;
  const columns = length / rows;

  const split = [];
  for (let i = 0; i < rows; i++) {
    const start = (rows + 1) * i;
    const end = start + columns;

    split.push(comics.slice(start, end));
  }
  return split;
};
