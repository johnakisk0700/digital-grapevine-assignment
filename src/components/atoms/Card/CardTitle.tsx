import React, { CSSProperties, PropsWithChildren } from "react";
import classnames from "classnames";

type Props = {
  style?: CSSProperties;
  className?: string;
};

function CardTitle({ children, className }: Props & PropsWithChildren) {
  return (
    <h2 className={classnames(className, "text-xl font-bold")}>{children}</h2>
  );
}

export default CardTitle;
