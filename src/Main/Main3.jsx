import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Navbar3 from "../Shared/Navbar/Navbar3";
import Footer3 from "../Shared/Footer/Footer3";
import GoToTop from "../Shared/GoToTop";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HelmetChanger from "../Shared/Helmet/Helmet";

const Main3 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <HelmetChanger title="Hostel" />
      <ScrollToTop />
      <GoToTop />
      <Navbar3 />
      <div>
        <Outlet />
      </div>
      <Footer3 />
    </>
  );
};

export default Main3;
