import ComicsCatalogue from "../organisms/ComicsCatalogue/ComicsCatalogue";
import Header from "../organisms/Header/Header";
import WelcomeSection from "../organisms/Welcome/WelcomeSection";

type Props = {};

function HomePage({}: Props) {
  return (
    <div className="container mx-auto">
      <Header />
      <WelcomeSection />
      <br></br>
      <ComicsCatalogue />
    </div>
  );
}

export default HomePage;
