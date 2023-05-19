import CategoryTabs from "../CategoryTabs/CategoryTabs";
import Gallery from "../Gallery/Gallery";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery />
      <CategoryTabs />
    </div>
  );
};

export default Home;
