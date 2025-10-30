import { BiLogoLinkedin, BiSolidPhoneCall } from "react-icons/bi";
import {
  FaEnvelope,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer3 = () => {
  return (
    <footer className="bg-lightBlack ">
      <div className="Container">
        <div className="grid items-center justify-center py-20 2xl:py-[110px]">
          <img src="/images/home-3/logo.png" className="mx-auto" />
          {/* footer contact */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-x-[30px] 2xl:gap-x-[40px] gap-y-4">
            <div
              className="flex items-center group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span
                className=" w-[35px] h-[35px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px] lg:w-[50px] lg:h-[50px] grid items-center justify-center border-[1px] border-gray
             rounded-full"
              >
                <BiSolidPhoneCall className="text-white" size={15} />
              </span>
              <p className="text-sm sm:text-base leading-[26px] lg:leading-[38px] font-Lora font-medium ml-4 text-white group-hover:text-khaki transition-all duration-300">
                (+088) 210 - 123 - 4567
              </p>
            </div>
            <div
              className="flex items-center group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span
                className="grid items-center justify-center  w-[35px] h-[35px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px] lg:w-[50px] lg:h-[50px] border-[1px] border-gray
             rounded-full"
              >
                <FaEnvelope className="text-white" size={15} />
              </span>
              <p className="text-sm sm:text-base leading-[26px] lg:leading-[38px] font-Lora font-medium ml-4 text-white group-hover:text-khaki transition-all duration-300">
                info@plethorathemes.com
              </p>
            </div>
            <div
              className="flex items-center group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span
                className="grid items-center justify-center  w-[35px] h-[35px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px] lg:w-[50px] lg:h-[50px] border-[1px] border-gray
             rounded-full"
              >
                <IoLocationSharp className="text-white" size={15} />
              </span>
              <p className="text-sm sm:text-base leading-[26px] lg:leading-[38px] font-Lora font-medium ml-4 text-white group-hover:text-khaki transition-all duration-300">
                79 Folsom Ave, San Francisco
              </p>
            </div>
          </div>
        </div>
        <hr className="text-[#353535] w-full h-[2px]" />
        <div className="py-5 md:py-6 lg:py-[22px]   flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="text-[13px] xsm:text-sm sm:text-base leading-[26px] lg:leading-[38px] font-Lora font-medium ml-4 text-white">
            Copyright ©{" "}
            <span className="text-khaki">{`${new Date().getFullYear()} Royella.`}</span>{" "}
            All Rights Reserved.
          </p>
          <div>
            <ul className="flex space-x-3">
              <li className="hover-animBg hover:scale-100 group transition-all duration-300 w-[35px] h-[35px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px] grid items-center justify-center rounded-full border border-[#353535] hover:border-khaki cursor-pointer ">
                <Link to="#" className="">
                  <FaFacebookF className="text-white group-hover:text-slateBlue-0 w-4 h-4" />
                </Link>
              </li>

              <li className="hover-animBg group transition-all duration-300 w-[35px] h-[35px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px] grid items-center justify-center rounded-full border border-[#353535] hover:border-khaki cursor-pointer">
                <Link to="#">
                  <FaTwitter className="text-white group-hover:text-slateBlue-0 w-4 h-4" />
                </Link>
              </li>
              <li className="hover-animBg group transition-all duration-300 w-[35px] h-[35px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px] grid items-center justify-center rounded-full border border-[#353535] hover:border-khaki cursor-pointer">
                <Link to="#">
                  <BiLogoLinkedin className="text-white group-hover:text-slateBlue-0 w-4 h-4" />
                </Link>
              </li>
              <li className="hover-animBg group transition-all duration-300 w-[35px] h-[35px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px] grid items-center justify-center rounded-full border border-[#353535] hover:border-khaki cursor-pointer">
                <Link to="#">
                  <FaPinterestP className="text-white group-hover:text-slateBlue-0 w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
