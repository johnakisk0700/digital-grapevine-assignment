import { FC, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  AutoSizer as _AutoSizer,
  AutoSizerProps,
  List as _List,
  ListProps,
  ListRowProps,
  WindowScroller as _WindowScroller,
  WindowScrollerProps,
} from "react-virtualized";
import { useFetchComicsInfinite } from "../../hooks/useFetchComicsInfinite";
import Loader from "../atoms/Loader";
import ComicCard from "../molecules/ComicCard";

// type cast because of incompatibilities between react versions
// and react-virtualized having broken exports
const WindowScroller = _WindowScroller as unknown as FC<WindowScrollerProps>;
const List = _List as unknown as FC<ListProps>;
const AutoSizer = _AutoSizer as unknown as FC<AutoSizerProps>;

function ComicsCatalogue() {
  const [offset, setOffset] = useState(0);
  const {
    comics,
    loading: loadingComics,
    error,
  } = useFetchComicsInfinite(offset);

  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    // ERR_CANCELED because of strict mode double hooks
    if (!error || error.message === "canceled") {
      if (inView) {
        setOffset((prev) => prev + 20);
      }
    }
  }, [inView, error]);

  function rowRenderer({
    index, // Index of row
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    key, // Unique key within array of rendered rows
    parent, // Reference to the parent List (instance)
    style, // Style object to be applied to row (to position it);
  }: ListRowProps) {
    const comic = comics[index];
    return (
      <div key={key} style={style} className="p-2">
        <ComicCard comic={comic} />
      </div>
    );
  }

  if (!comics.length) return <Loader />;
  return (
    <div className="container px-4">
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop, width }) => (
          <AutoSizer disableHeight>
            {({ width }) => (
              <List
                autoHeight
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                rowRenderer={rowRenderer}
                scrollTop={scrollTop}
                itemData={comics}
                columnCount={5}
                columnWidth={width / 5}
                rowCount={comics.length}
                rowHeight={425}
                width={width}
                height={height}
              />
            )}
          </AutoSizer>
        )}
      </WindowScroller>

      {!loadingComics ? <div ref={ref} className="h-8 w-8"></div> : ""}
      {loadingComics ? <Loader /> : null}
      {error ? (
        <div className="text-red-700 text-center">{error.message}</div>
      ) : null}
    </div>
  );
}

export default ComicsCatalogue;
