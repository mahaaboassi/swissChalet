import { BiChevronDown } from "react-icons/bi";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { MdEmail, MdOutlineShareLocation } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

const FindRoom = () => {
  //  room info
  const location = useLocation();
  const roomsData = location.state && location.state;
  const [open, setOpen] = useState(false);
  const [guestOpen, setGuestOpen] = useState(false);
  const [room, setRoom] = useState(1);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [selectedInDate, setSelectedInDate] = useState("");
  const [selectedOutDate, setSelectedOutDate] = useState("");

  const handleCheckInDate = (e) => {
    let newDate = e.target.value;
    setSelectedInDate(newDate);
  };
  const handleCheckOutDate = (e) => {
    let newDate = e.target.value;
    setSelectedOutDate(newDate);
  };
  const bookingInfo = {
    ...roomsData,
    selectedInDate,
    selectedOutDate,
    room,
    adult,
    children,
  };

  return (
    <section>
      <BreadCrumb title="Find Room" />
      {/* Check Availability */}
      <div className="bg-whiteSmoke dark:bg-normalBlack py-20 2xl:py-[120px]">
        <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[34px] leading-7 sm:leading-8 md:leading-9 lg:leading-10 2xl:leading-[44px] text-lightBlack dark:text-white  mb-5  md:mb-8 lg:mb-10 font-Garamond font-semibold uppercase text-center">
          CHECK Availability
        </h1>
        {/* Date and rome info */}
        <div
          className="Container bg-white dark:bg-lightBlack  grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 items-center justify-center font-Lora py-3 lg:py-4 xl:py-5 2xl:py-6 border-t-[3px] border-t-khaki  px-5 md:px-7 2xl:px-10"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="p-3">
            <p className="text-sm text-gray dark:text-lightGray">Check In</p>
            <div className="flex items-center pt-[6px] ">
              <input
                type="date"
                required
                className="border-none pl-0 bg-transparent focus:outline-transparent focus:border-transparent text-lightBlack dark:text-white focus:border-none outline-0  text-sm lg:text-base focus:ring-transparent"
                value={selectedInDate}
                onChange={handleCheckInDate}
              />
            </div>
          </div>
          <div className="p-3">
            <p className="text-sm text-gray dark:text-lightGray">Check Out</p>
            <div className="flex items-center pt-[6px] ">
              <input
                type="date"
                required
                className="border-none pl-0 bg-transparent focus:outline-transparent focus:border-transparent text-lightBlack dark:text-white focus:border-none outline-0  text-sm lg:text-base focus:ring-transparent"
                value={selectedOutDate}
                onChange={handleCheckOutDate}
              />
            </div>
          </div>
          <div className="p-3">
            <div
              className={` px-3 py-2 w-full block transition-all duration-300 group relative `}
              to="#"
            >
              <span
                className="flex items-center justify-between text-sm text-gray dark:text-lightGray cursor-pointer"
                onClick={() => setOpen(!open)}
                title="click hear to open and close rooms extender"
              >
                Rooms
                <BiChevronDown className="" />
              </span>
              <div className="text-sm pt-[6px] lightBlack dark:text-white">
                {room} Room
              </div>
              <div className="absolute pt-5  z-20">
                <div
                  className={`shadow-2xl ${
                    open ? "" : "hidden"
                  } rounded-sm bg-white text-black w-60 text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-4 `}
                >
                  <div className="py-2 px-5 group cursor-pointer">
                    <li className="flex items-center justify-between">
                      <div className="text-lightBlack dark:text-white">
                        {room} Room
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white"
                          onClick={() => setRoom(room + 1)}
                        >
                          +
                        </button>
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white"
                          onClick={() => setRoom(room - 1)}
                          disabled={room <= 1}
                        >
                          -
                        </button>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3">
            <div
              className={`text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative `}
              to="#"
            >
              <span
                className="flex items-center justify-between text-sm text-gray dark:text-lightGray cursor-pointer"
                onClick={() => setGuestOpen(!guestOpen)}
                title="click hear to open and close Adult And Children extender"
              >
                Guests
                <BiChevronDown className="" />
              </span>
              <div className="pt-[6px] text-sm  text-lightBlack dark:text-white">
                {adult} Adult, {children} Child
              </div>
              <div className="absolute pt-5  z-20 right-0 md:left-5">
                <div
                  className={`shadow-2xl ${
                    guestOpen ? "" : "hidden"
                  } rounded-sm bg-white text-black w-60 text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-4 `}
                >
                  <div className="py-2 px-5 group cursor-pointer">
                    <li className="flex items-center justify-between">
                      <div className="">{adult} Adult</div>
                      <div className="flex items-center space-x-2">
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white"
                          onClick={() => setAdult(adult + 1)}
                        >
                          +
                        </button>
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white"
                          onClick={() => setAdult(adult - 1)}
                          disabled={adult <= 1}
                        >
                          -
                        </button>
                      </div>
                    </li>
                    <li className="flex items-center justify-between mt-1">
                      <div className="">{children} Child</div>
                      <div className="flex items-center space-x-2">
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white"
                          onClick={() => setChildren(children + 1)}
                        >
                          +
                        </button>
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white"
                          onClick={() => setChildren(children - 1)}
                          disabled={children < 1}
                        >
                          -
                        </button>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/room_details" state={bookingInfo ? bookingInfo : ""}>
            <button className="w-[142px] h-[50px] text-[15px] bg-khaki font-Garamond text-white">
              Checkout Now
            </button>
          </Link>
        </div>
        {/* Room Details */}
        <div className="mt-14 2xl:mt-[60px] grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-[30px] Container">
          {/* Room - 1 */}
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="overflow-x-hidden 3xl:w-[410px] group relative">
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src="/images/home-1/room-1.jpg "
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                    alt=""
                  />
                </div>
                <Link to={"/room_details"}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-lightBlack absolute bottom-0 -left-40 px-5 text-white  group-hover:left-0 transition-all duration-300 hover:bg-khaki">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                  </button>
                </Link>
              </div>
              <div className="font-Garamond">
                <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center text-white  absolute top-[10px] right-[10px] font-Lora font-normal leading-[26px]">
                  <span className="">$560</span>
                  <span className="mx-2">|</span>
                  <span>Night</span>
                </div>

                <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242] border-t-0">
                  <div className="py-6 px-[30px]">
                    <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                      Luxury Room
                    </h4>
                    <Link to="/room_details">
                      <h2 className="text-2xl lg:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                        Double Suite Rooms
                      </h2>
                    </Link>
                    <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                      1500 SQ.FT/Rooms
                    </p>
                  </div>
                  <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242] py-5">
                    <div className="px-[30px] flex items-center justify-between">
                      <div className="">
                        <span className="font-Lora text-base flex items-center ">
                          <img
                            src="/images/home-1/room-bottom-icon.png"
                            alt=""
                          />
                          <span className="ml-[10px] text-gray dark:text-lightGray">
                            2 King Bed
                          </span>
                        </span>
                      </div>
                      <span className="w-[1px] h-[25px] bg-[#ddd] dark:bg-gray"></span>
                      <ul className="flex items-center text-khaki space-x-[5px]">
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            {/* Room - 2 */}
            <div className="overflow-x-hidden 3xl:w-[410px] group relative">
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src="/images/home-1/room-2.jpg "
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                    alt=""
                  />
                </div>
                <Link to={"/room_details"}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-lightBlack absolute bottom-0 -left-40 px-5 text-white  group-hover:left-0 transition-all duration-300 hover:bg-khaki">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                  </button>
                </Link>
              </div>
              <div className="font-Garamond">
                <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center font-Lora font-normal leading-[26px] text-white  absolute top-[10px] right-[10px] ">
                  <span className="">$560</span>
                  <span className="mx-2">|</span>
                  <span>Night</span>
                </div>

                <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242] border-t-0">
                  <div className="py-6 px-[30px]">
                    <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                      Luxury Room
                    </h4>
                    <Link to="/room_details">
                      <h2 className="text-2xl lg:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                        Delux Family Rooms
                      </h2>
                    </Link>
                    <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                      1500 SQ.FT/Rooms
                    </p>
                  </div>
                  <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242] py-5">
                    <div className="px-[30px] flex items-center justify-between">
                      <div className="">
                        <span className="font-Lora text-base flex items-center ">
                          <img
                            src="/images/home-1/room-bottom-icon.png"
                            alt=""
                          />
                          <span className="ml-[10px] text-gray dark:text-lightGray">
                            2 King Bed
                          </span>
                        </span>
                      </div>
                      <span className="w-[1px] h-[25px] bg-[#ddd] dark:bg-gray"></span>
                      <ul className="flex items-center text-khaki space-x-[5px]">
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            {/* Room - 3 */}
            <div className="overflow-x-hidden 3xl:w-[410px] group relative">
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src="/images/home-1/room-3.jpg "
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                    alt=""
                  />
                </div>
                <Link to={"/room_details"}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-lightBlack absolute bottom-0 -left-40 px-5 text-white  group-hover:left-0 transition-all duration-300 hover:bg-khaki">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                  </button>
                </Link>
              </div>
              <div className="font-Garamond">
                <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center font-Lora font-normal leading-[26px] text-white  absolute top-[10px] right-[10px] ">
                  <span className="">$560</span>
                  <span className="mx-2">|</span>
                  <span>Night</span>
                </div>

                <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242] border-t-0">
                  <div className="py-6 px-[30px]">
                    <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                      Luxury Room
                    </h4>
                    <Link to="/room_details">
                      <h2 className="text-2xl lg:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                        Suprior Bed Rooms
                      </h2>
                    </Link>
                    <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                      1500 SQ.FT/Rooms
                    </p>
                  </div>
                  <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242] py-5">
                    <div className="px-[30px] flex items-center justify-between">
                      <div className="">
                        <span className="font-Lora text-base flex items-center ">
                          <img
                            src="/images/home-1/room-bottom-icon.png"
                            alt=""
                          />
                          <span className="ml-[10px] text-gray dark:text-lightGray">
                            2 King Bed
                          </span>
                        </span>
                      </div>
                      <span className="w-[1px] h-[25px] bg-[#ddd] dark:bg-gray"></span>
                      <ul className="flex items-center text-khaki space-x-[5px]">
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact form */}
      <div className="py-20 2xl:py-[120px] dark:bg-lightBlack">
        <div className="Container border border-lightGray dark:border-gray px-2 sm:px-7 md:px-10 lg:px-14 2xl:px-20 py-10 md:py-14 lg:py-18 xl:py-20 2xl:py-[100px]">
          <div className="flex items-center flex-col md:flex-row">
            <div
              className="p-5 flex-1"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <p className="font-Garamond text-base leading-[26px] text-khaki font-medium">
                CONTACT US
              </p>
              <h2 className="font-Garamond text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] text-uppercase text-lightBlack dark:text-white font-semibold my-3 md:my-5">
                CONTACT WITH US
              </h2>
              <p className="font-Lora text-sm sm:text-base leading-[26px]  text-gray dark:text-lightGray  font-normal">
                Rapidiously myocardinate cross-platform intellectual capital
                after the model. Appropriately create interactive
                infrastructures after maintance Holisticly facilitate
                stand-alone
              </p>

              {/* call */}
              <div className="flex items-center my-4 md:my-5 lg:my-[26px] group">
                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-white dark:bg-normalBlack group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full">
                  <IoIosCall
                    size={20}
                    className="text-khaki group-hover:text-whiteSmoke"
                  />
                </div>
                <div className="ml-3 md:ml-4">
                  <p className="font-Lora text-sm leading-[26px] text-gray  font-normal dark:text-lightGray">
                    Call Us Now
                  </p>
                  <p className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack dark:text-white font-medium">
                    +980 123 (4567) 890
                  </p>
                </div>
              </div>
              <hr className="dark:text-gray dark:bg-gray text-lightGray bg-lightGray h-[1px]" />
              {/* email */}
              <div className="flex items-center my-4 md:my-5 lg:my-[26px] group">
                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-whiteSmoke dark:bg-normalBlack group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full">
                  <MdEmail
                    size={20}
                    className="text-khaki group-hover:text-whiteSmoke"
                  />
                </div>
                <div className="ml-3 md:ml-4">
                  <p className="font-Lora text-sm leading-[26px] text-gray dark:text-lightGray font-normal">
                    Send Email
                  </p>
                  <p className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack dark:text-white font-medium ">
                    example@gmail.com
                  </p>
                </div>
              </div>
              <hr className="dark:text-gray dark:bg-gray text-lightGray bg-lightGray h-[1px]" />
              {/* location */}
              <div className="flex items-center my-4 md:my-5 lg:my-[26px] group">
                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-whiteSmoke dark:bg-normalBlack group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full">
                  <MdOutlineShareLocation
                    size={20}
                    className="text-khaki group-hover:text-whiteSmoke"
                  />
                </div>
                <div className="ml-3 md:ml-4">
                  <p className="font-Lora text-sm leading-[26px] text-gray dark:text-lightGray font-normal">
                    Our Locations
                  </p>
                  <p className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack dark:text-white font-medium ">
                    New elephant Road, Dhanmondi <br />
                    Dhaka - 1212
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex-1 py-5 sm:p-5"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="bg-lightBlack dark:bg-normalBlack  p-[30px] lg:p-[45px] 2xl:p-[61px]">
                <h2 className="font-Garamond text-[22px] sm:text-2xl md:text-[28px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] text-white font-semibold text-center">
                  GET IN TOUCH
                </h2>
                <form className="grid items-center grid-cols-1 gap-2 mt-8">
                  <input
                    type="text"
                    className="w-full h-12 md:h-13 lg:h-[59px] px-4 border border-gray dark:border-lightGray  outline-none  bg-transparent mt-4 focus:ring-0 placeholder:text-gray focus:outline-none focus:border-lightGray text-lightGray"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    className="w-full h-12 md:h-13 lg:h-[59px] px-4 border  border-gray dark:border-lightGray  outline-none  bg-transparent mt-4 focus:ring-0 placeholder:text-gray focus:outline-none focus:border-lightGray text-lightGray"
                    placeholder="Enter E-mail"
                    required
                  />
                  <select
                    className="w-full h-12 md:h-13 lg:h-[59px] px-4 border border-gray dark:border-lightGray  outline-none  bg-transparent mt-4 focus:ring-0 focus:outline-none focus:border-lightGray  text-lightGray"
                    onFocus={(e) => {
                      e.target.size = 6;
                    }}
                    onBlur={(e) => {
                      e.target.size = 0;
                    }}
                    onChange={(e) => {
                      e.target.size = 1;
                      e.target.blur();
                    }}
                  >
                    <option
                      className="bg-khaki text-white px-3 py-3"
                      value=""
                      disabled
                    >
                      Select Subject
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option1"
                    >
                      Subject One
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option2"
                    >
                      Subject Two
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option3"
                    >
                      Select Three
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option4"
                    >
                      Select Four
                    </option>
                  </select>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="w-full h-[121px] px-4 border border-gray dark:border-lightGray  outline-none  bg-transparent mt-4 focus:ring-0 placeholder:text-gray focus:outline-none focus:border-lightGray  text-lightGray resize-none"
                    placeholder="Write Message:"
                  ></textarea>
                  <button className="w-full bg-khaki text-white text-center h-10 2xl:h-[55px] mt-5 hover-animBg after:bg-normalBlack dark:after:bg-lightBlack after:rounded-none">
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindRoom;
