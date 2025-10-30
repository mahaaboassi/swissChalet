import { Outlet } from "react-router-dom";
import Navbar2 from "../Shared/Navbar/Navbar2";
import ScrollToTop from "../ScrollToTop";
import Footer2 from "../Shared/Footer/Footer2";
import GoToTop from "../Shared/GoToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HelmetChanger from "../Shared/Helmet/Helmet";

const Main2 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <HelmetChanger title="Resort" />
      <ScrollToTop />
      <GoToTop />
      <Navbar2 />
      <div>
        <Outlet />
      </div>
      <Footer2 />
    </>
  );
};

export default Main2;
