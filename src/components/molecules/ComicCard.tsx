import { IComic } from "../../models/Comic";
import Card from "../atoms/Card/Card";
import CardTitle from "../atoms/Card/CardTitle";
import Chip from "../atoms/Chip";

type Props = {
  comic: IComic;
};

function ComicCard({ comic }: Props) {
  const { thumbnail } = comic;
  const price = comic.prices[0];
  return (
    <Card className="max-w-[450px] mx-auto bg-slate-800 p-4 text-white rounded-md">
      <div className="flex h-full gap-2">
        <div className="flex-grow flex flex-col justify-between">
          <CardTitle>{comic.title}</CardTitle>
          <div>
            <div className="mb-1">
              <Chip text="Issues:" className="bg-zinc-800" />{" "}
              {comic.issueNumber}
            </div>
            <div>
              <Chip text="Price:" className="bg-red-800" />{" "}
              {price.price > 0 ? (
                `${price.price}$`
              ) : (
                <span className="italic">Unavailable</span>
              )}
            </div>
          </div>
        </div>
        <img
          src={thumbnail.path + "." + thumbnail.extension}
          className="h-full object-contain shadow-md shadow-black"
          alt={`${comic.title} cover`}
        />
      </div>
    </Card>
  );
}

export default ComicCard;
