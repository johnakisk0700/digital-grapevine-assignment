import React from "react";

type Props = {};

function Loader({}: Props) {
  return (
    <div className="w-max mx-auto">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default Loader;
