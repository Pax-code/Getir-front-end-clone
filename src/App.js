import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import Campaigns from "./components/Campaigns";
import DownloadMobileApp from "./components/DownloadMobileApp";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Favorites from "./components/Favorites";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <Campaigns />
      <div className="container mx-auto grid gap-y-6">
        <Favorites />
        <DownloadMobileApp />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
