import BookingVideo from "../../Components4/BookingVideo/BookingVideo";
import CheckingForm from "../../Components4/CheckingForm/CheckingForm";
import ExtraService from "../../Components4/ExtraService/ExtraService";
import Gallery from "../../Components4/Gallery/Gallery";
import HeroSection from "../../Components4/HeroSection/HeroSection";
import LatestNews from "../../Components4/LatestNews/LatestNews";
import Testimonial from "../../Components4/Testimonial/Testimonial";
import WelcomeSection from "../../Components4/WelcomeSection/WelcomeSection";
const Home4 = () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ExtraService />
      {/* <CheckingForm /> */}
      <BookingVideo />
      <Testimonial />
      <LatestNews />
      <Gallery />
    </>
  );
};

export default Home4;
