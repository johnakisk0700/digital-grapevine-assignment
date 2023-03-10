import { IComic } from "../../models/Comic";
import Card from "../atoms/Card/Card";
import CardBody from "../atoms/Card/CardBody";
import CardTitle from "../atoms/Card/CardTitle";
import Chip from "../atoms/Chip";

type Props = {
  comic: IComic;
};

function ComicCard({ comic }: Props) {
  const { thumbnail } = comic;
  const price = comic.prices[0];
  return (
    <Card className="max-w-[300px] h-full mx-auto p-3 text-white rounded-md text-center shadow-lg">
      <CardBody>
        <img
          src={thumbnail.path + "." + thumbnail.extension}
          className="h-[250px] mx-auto object-contain shadow-md shadow-black"
          alt={`${comic.title} cover`}
        />
        <CardTitle className="line-clamp-2 h-14">{comic.title}</CardTitle>
        <div>
          <div className="mb-1">
            <Chip text="Issues:" className="bg-black" /> {comic.issueNumber}
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
      </CardBody>
    </Card>
  );
}

export default ComicCard;
