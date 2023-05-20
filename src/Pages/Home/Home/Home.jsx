import CategoryTabs from "../CategoryTabs/CategoryTabs";
import Gallery from "../Gallery/Gallery";
import SubscribeNewsletter from "../SubscribeNewsletter/SubscribeNewsletter";
import Trusted from "../Trusted/Trusted";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery />
      <CategoryTabs />
      <Trusted />
      <SubscribeNewsletter />
    </div>
  );
};

export default Home;
