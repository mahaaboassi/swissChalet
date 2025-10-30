import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Navbar5 from "../Shared/Navbar/Navbar5";
import Footer5 from "../Shared/Footer/Footer5";
import GoToTop from "../Shared/GoToTop";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HelmetChanger from "../Shared/Helmet/Helmet";

const Main5 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <HelmetChanger title="Apartment" />
      <ScrollToTop />
      <GoToTop />
      <Navbar5 />
      <div>
        <Outlet />
      </div>
      <Footer5 />
    </>
  );
};

export default Main5;
