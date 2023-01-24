import React, { CSSProperties, PropsWithChildren } from "react";
import classnames from "classnames";

type Props = {
  style?: CSSProperties;
  className?: string;
};

function CardBody({ children, className }: Props & PropsWithChildren) {
  return (
    <h2 className={classnames(className, "flex flex-col h-full gap-3")}>
      {children}
    </h2>
  );
}

export default CardBody;
