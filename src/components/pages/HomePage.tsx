import ComicsCatalogue from "../organisms/ComicsCatalogue";
import Header from "../organisms/Header";
import WelcomeSection from "../organisms/WelcomeSection";

function HomePage() {
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
