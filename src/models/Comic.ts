export type IComic = {
  uuid: string;
  title: string;
  issueNumber: number;
  prices: IComicPrice[];
  thumbnail: IComicImage;
  images: IComicImage[];
};

export type IComicImage = {
  path: string;
  extension: string;
};

export type IComicPrice = {
  type: string;
  price: number;
};
