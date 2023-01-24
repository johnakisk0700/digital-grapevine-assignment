import React, { CSSProperties, PropsWithChildren } from "react";
import classnames from "classnames";

type Props = {
  style?: CSSProperties;
  className?: string;
};

function Card({ children, className }: Props & PropsWithChildren) {
  return <div className={classnames(className, "h-full")}>{children}</div>;
}

export default Card;
