import React from "react";
import MarvelLogo from "../../atoms/MarvelLogo";

type Props = {};

function WelcomeSection({}: Props) {
  return (
    <section className="text-center w-max max-w-full mx-auto p-4">
      <span>WELCOME TO</span>
      <MarvelLogo width={400} />
      <h1 className="text-4xl mt-2">[ COMICS CATALOGUE ]</h1>
    </section>
  );
}

export default WelcomeSection;
