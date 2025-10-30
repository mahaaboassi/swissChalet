import Events from "../../Components3/Events/Events";
import HeroSection from "../../Components3/HeroSection/HeroSection";
import Newsletter from "../../Components3/Newsletter/Newsletter";
import Offers from "../../Components3/Offers/Offers";
import Player from "../../Components3/Player/Player";
import Rooms from "../../Components3/Rooms/Rooms";

import Testimonials from "../../Components3/Testimonials/Testimonials";

const Home3 = () => {
  return (
    <>
      <HeroSection />
      <Rooms />
      <Player />
      <Offers />
      <Events />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Home3;
