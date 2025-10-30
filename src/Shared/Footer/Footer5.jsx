import { BiLogoLinkedin, BiMessageRounded } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

import { Link } from "react-router-dom";
const Footer5 = () => {
  return (
    <footer className="relative   bg-[url('/images/home-5/footer-bg.jpg')] bg-cover bg-center bg-no-repeat pt-10">
      <div className="Container grid items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-6  xl:grid-cols-6 justify-between  gap-x-5 sm:gap-x-0 md:gap-x-5 lg:gap-x-3 gap-y-[30px] px-5  py-20 2xl:pt-[120px]">
        {/* logo and text */}
        <div
          className="px-5 sm:px-3 md:px-5 lg:px-3 xl:px-5 lg:col-span-2 xl:col-span-2 "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src="/images/home-2/dark_footer_logo.png" className="" alt="" />
          <p className="text-sm sm:text-base leading-[26px] font-Lora font-normal text-lightGray text-opacity-75 mt-6 lg:mt-[35px]">
            Maecenas posuere neque et volutpat accumsan. Aliquam hendrerit
            tincidunt diam eu imperdiet. Etiam dictum suscipit tempus Vestibulum
            egetpelleor.
          </p>
          <div className="mt-5 lg:mt-[24px]">
            <ul className="flex space-x-3  items-center">
              <p className="text-base lg:text-[20px] leading-[27px] text-[#f7f9fb] font-Garamond sm:hidden md:block">
                Follow Us:
              </p>
              <li className="hover-animBg after:bg-white group bg-normalBlack w-[36px] h-[36px]  grid items-center justify-center rounded-full border border-white hover:border-khaki cursor-pointer after:z-[-1]">
                <Link to="#" className="">
                  <FaFacebookF className="text-white group-hover:text-khaki group-hover:text-slateBlue-0 w-4 h-4 " />
                </Link>
              </li>

              <li className="hover-animBg after:bg-white group bg-normalBlack w-[36px] h-[36px]  grid items-center justify-center rounded-full border border-white hover:border-khaki cursor-pointer">
                <Link to="#">
                  <FaTwitter className="text-white group-hover:text-khaki group-hover:text-slateBlue-0 w-4 h-4 z-[1]" />
                </Link>
              </li>
              <li className="hover-animBg after:bg-white group bg-normalBlack w-[36px] h-[36px]  grid items-center justify-center rounded-full border border-white hover:border-khaki cursor-pointer">
                <Link to="#">
                  <FaInstagram className="text-white group-hover:text-khaki group-hover:text-slateBlue-0 w-4 h-4" />
                </Link>
              </li>
              <li className="hover-animBg after:bg-white group bg-normalBlack w-[36px] h-[36px]  grid items-center justify-center rounded-full border border-white hover:border-khaki cursor-pointer">
                <Link to="#">
                  <BiLogoLinkedin className="text-white group-hover:text-khaki group-hover:text-slateBlue-0 w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* help info */}
        <div
          className="px-5 sm:px-3 md:px-5 lg:px-3 xl:px-5"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h1
            className="text-xl md:text-[22px]  font-Garamond 2xl:text-3xl
          leading-6 md:leading-[26px] font-bold text-[#f7f9fb] relative   "
          >
            Help
          </h1>
          <div className=" mt-3 md:mt-5 overflow-hidden">
            <ul
              className="text-[#f7f9fb] font-Lora font-normal text-sm sm:text-base leading-[26px] list-none hover:list-disc
                 "
            >
              <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[30px] sm:leading-[32px] md:leading-[36px]">
                <Link to="#"> Careers</Link>
              </li>
              <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[30px] sm:leading-[32px] md:leading-[36px]">
                <Link to="#"> Cookie Policy</Link>
              </li>
              <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[30px] sm:leading-[32px] md:leading-[36px]">
                <Link to="#"> Website Feedback</Link>
              </li>
              <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[30px] sm:leading-[32px] md:leading-[36px]">
                <Link to="#"> Service Guarantee</Link>
              </li>
              <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[30px] sm:leading-[32px] md:leading-[36px]">
                <Link to="#"> Insights</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* our service */}
        <div
          className="px-5 sm:px-3 md:px-5 lg:px-3 xl:px-5 "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1
            className="text-xl md:text-[22px]  font-Garamond 2xl:text-3xl
          leading-6 md:leading-[26px] font-bold text-[#f7f9fb] relative   "
          >
            Our Services
          </h1>
          <div className=" mt-3 md:mt-5 overflow-hidden">
            <ul
              className="text-[#f7f9fb] font-Lora font-normal text-sm sm:text-base leading-[26px] list-none hover:list-disc
                 "
            >
              <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[30px] sm:leading-[32px] md:leading-[36px]">
                <Link to="#"> Store Directory</Link>
              </li>
              <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[30px] sm:leading-[32px] md:leading-[36px]">
                <Link to="#"> Top Hotels</Link>
              </li>
              <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[30px] sm:leading-[32px] md:leading-[36px]">
                <Link to="#"> Quick Links</Link>
              </li>
              <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[30px] sm:leading-[32px] md:leading-[36px]">
                <Link to="#"> Important Links</Link>
              </li>
              <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[30px] sm:leading-[32px] md:leading-[36px]">
                <Link to="#"> Insights</Link>
              </li>
              <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[30px] sm:leading-[32px] md:leading-[36px]">
                <Link to="#"> Knowledge Center</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* contact*/}
        <div
          className="px-5 sm:px-3 md:px-5 lg:px-3 xl:px-5 lg:col-span-2 xl:col-span-2"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h1
            className="text-xl md:text-[22px] font-Garamond 2xl:text-3xl
          leading-6 md:leading-[26px] font-bold text-[#f7f9fb] relative   "
          >
            Get In Touch
          </h1>

          <div className="mt-3 md:mt-6  ">
            <div>
              <div className="flex items-start">
                <IoLocationSharp size={17} className="text-khaki mt-[6px]" />
                <div className="ml-[10px]">
                  <p className="text-lg sm:text-xl leading-[27px] text-[#f7f9fb] font-bold font-Garamond ">
                    Location:{" "}
                  </p>
                  <p className="text-sm sm:text-base leading-[27px] text-[#f7f9fb] font-normal font-Lora">
                    2976 Sunrise Avenue, Las Vegas
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2 sm:mt-3 md:mt-4">
              <div className="flex items-start">
                <BiMessageRounded size={17} className="text-khaki mt-[6px]" />
                <div className="ml-[10px]">
                  <p className="text-lg sm:text-xl leading-[27px] text-[#f7f9fb] font-bold font-Garamond ">
                    Email:
                  </p>
                  <p className="text-sm sm:text-base leading-[27px] text-[#f7f9fb] font-normal font-Lora">
                    example@mail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2 sm:mt-3 md:mt-4">
              <div className="flex items-start">
                <IoIosCall size={17} className="text-khaki mt-[6px]" />
                <div className="ml-[10px]">
                  <p className="text-lg sm:text-xl leading-[27px] text-[#f7f9fb] font-bold font-Garamond ">
                    Phone:
                  </p>
                  <p className="text-sm sm:text-base leading-[27px] text-[#f7f9fb] font-normal font-Lora">
                    +8 91230 456 789
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="Container ">
          <hr className=" text-white text-opacity-10 " />
          <p className="text-sm sm:text-base md:text-lg  leading-[27px] text-[#f7f9fb] font-normal font-Lora text-center py-[30px]">
            {`
            Royella @${new Date().getFullYear()}. `}
            <b>Royella</b> All Rights Reserved By{" "}
            <span className="text-khaki">Dream IT</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer5;
