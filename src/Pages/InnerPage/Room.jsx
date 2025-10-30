import { FaStar } from "react-icons/fa";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import { BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { IoIosCall } from "react-icons/io";
import { MdEmail, MdOutlineShareLocation } from "react-icons/md";
import Swal from "sweetalert2";
import { spaces } from "../../data";

const Room = () => {
  // facilities slider breckpoints
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { origin: "center", perView: 1 },
        spacing: 10,
      },
      "(min-width: 500px)": {
        slides: { origin: "center", perView: 1.5 },
        spacing: 10,
      },
      "(min-width: 600px)": {
        slides: { origin: "center", perView: 1 },
        spacing: 15,
      },
      "(min-width: 768px)": {
        slides: { origin: "center", perView: 1 },
        spacing: 18,
      },
      "(min-width: 992px)": {
        slides: { origin: "center", perView: 2 },
        spacing: 20,
      },
    },
    loop: true,
    initial: 0,
  });

  return (
    <section className="">
      <BreadCrumb title="OUR SPACES" home={"/"} />

      {/* All rooms */}

      <div className="bg-whiteSmoke dark:bg-lightBlack py-20 2xl:py-[120px]">
        <div className="Container ">
          {/* section heading */}
          <div
            className=" text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]  mx-auto  px-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Section Logo */}
            <div className="flex items-center justify-center space-x-2">
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
              <img
                src="/images/swiss_logo.png"
                alt="room_section_logo"
                className="w-[50px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
            </div>
            <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-7 sm:leading-8 md:leading-9 lg:leading-[42px] 2xl:leading-[52px] text-lightBlack dark:text-white mt-[30px] mb-[24px] font-Garamond font-semibold uppercase">
              Swiss Chalet Villa 
            </h1>
          </div>
          {/* Rooms Slider Container */}

          <div className="mt-14 2xl:mt-[60px] grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[30px]">
            {
              spaces.map((e,idx)=>(<div
              key={`Spaces_${e.name}_${idx}`}
              className="overflow-x-hidden 3xl:w-[410px] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src={e.images[0]}
                    className="w-full h-full object-cover group-group-hover:scale-110 transition-all duration-300"
                    alt=""
                  />
                </div>
                {/* <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center text-white  absolute top-[10px] right-[10px] ">
                  <span className="">$450</span>
                  <span className="mx-2">|</span>
                  <span>Night</span>
                </div> */}

                <Link to={`/space_details/${e.id}`}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-khaki  absolute bottom-0 -left-40 px-6 py-1 text-white  group-hover:left-0 transition-all duration-300">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                  </button>
                </Link>
              </div>
              <div className="font-Garamond">
                <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242]  border-t-0">
                  <div className="py-6 px-[30px]">
                    <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                      Luxury Space
                    </h4>
                    <Link
                      to={`/space_details/${e.id}`}
                      state={{ price: "450", title: "Delux Family Rooms" }}
                    >
                      <h2 className="text-2xl lg:text-[24px] xl:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                        {e.name}
                      </h2>
                    </Link>
                    {/* <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                      1500 SQ.FT/Rooms
                    </p> */}
                  </div>
                  <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-5">
                    <div className="px-[30px] flex items-center justify-between">
                      <div className="">
                        <span className="font-Lora text-base flex items-center ">
                          <img
                            src="/images/home-1/room-bottom-icon.png"
                            alt=""
                          />
                          <span className="ml-[10px] text-gray dark:text-lightGray">
                            {e.rooms}
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
            </div>))
            }
          
          </div>
        </div>
      </div>

      {/* Extra Facilities */}
      <div className="bg-normalBlack py-20 lg:py-[120px] relative">
        <div className="Container pb-[100px] ">
          {/* Section heading */}
          <div
            className="flex items-center justify-between relative"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className=" sapce-y-3 md:space-y-4 lg:space-y-5 md:w-[450px] xl:w-[550px] font-Garamond">
              <h5 className="text-base text-khaki leading-[26px] font-medium">
                LUXURY HOTEL AND RESORT
              </h5>
              <h1 className="text-xl sm:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-white font-semibold uppercase">
                RESOTE’S EXTRA FACILITIES FOR LUXURIOUS LIFE
              </h1>
            </div>
            <div className="hidden sm:flex items-center lg:space-x-5  space-x-3">
              <button
                className="lg:w-[50px] w-[30px] h-[30px] lg:h-[50px]  flex items-center justify-center border-[1px] border-gray  text-lightGray hover:bg-khaki hover:border-none group"
                title="Button disabled use swapping"
                disabled
              >
                <BsChevronLeft className="w-5 h-5 text-gray  group-hover:text-white " />
              </button>
              <button
                className="lg:w-[50px] w-[30px] h-[30px] lg:h-[50px]  flex items-center justify-center border-[1px] border-gray  text-lightGray hover:bg-khaki
             hover:border-none group"
                title="Button disabled use swapping"
                disabled
              >
                <BsChevronRight className="w-5 h-5 text-gray   group-hover:text-white" />
              </button>
            </div>
          </div>
          <hr className="w-full h-[2px] text-gray bg-gray mt-10 " />

          {/* Clients Facilities  */}
          <div className="mt-14 2xl:mt-[60px] grid grid-cols-6 gap-5 md:gap-[30px] ">
            <div
              className="col-span-6 sm:col-span-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/inner/faciliies-icon.png"
                alt="facilities-icon"
                className="w-10 h-10 md:w-20 md:h-20 xl:h-[100px] xl:w-[100px]"
              />
              <div className="my-5 2xl:my-[30px]">
                <h2 className="text-white text-xl sm:text-2xl 2xl:text-3xl leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] font-semibold font-Garamond">
                  SPA & Parlor Center
                </h2>
                <p className="text-sm sm:text-base font-Lora leading-[26px] text-lightGray">
                  Rapidiously myocardinate cross-platform are model.
                  Appropriately create interactive infrast Holisticly
                  facilitate.
                </p>
              </div>
              <Link
                to={"/room_details"}
                className="flex items-center text-lightGray text-base font-Garamond font-semibold group hover:text-khaki dark:hover:text-khaki"
              >
                VIEW DETAILS
                <HiArrowLongRight className="w-6 h-5 text-khaki ml-2 group-hover:ml-3 transition-all duration-300" />
              </Link>
            </div>
            {/* facilities slider */}
            <div
              ref={sliderRef}
              className="keen-slider col-span-6 sm:col-span-4"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              {/* slide 1 */}
              <div className="keen-slider__slide number-slide1">
                <div className="col-span-2 relative">
                  <img
                    src="/images/inner/facilities-1.jpg"
                    className=""
                    alt=""
                  />
                  <div className="inline-flex items-center justify-between bg-lightBlack  hover:bg-whiteSmoke dark:hover:bg-white transition-all duration-300 w-[90%] float-right absolute bottom-0 right-[20px] group">
                    <p className="text-white text-lg sm:text-xl lg:text-[18px] xl:text-[22px]  group-hover:text-lightBlack leading-6 font-semibold font-Garamond px-5">
                      Gym Training Ground
                    </p>
                    <button className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]  flex items-center justify-center bg-khaki">
                      <HiArrowLongRight className="w-5 h-5 text-white    " />
                    </button>
                  </div>
                </div>
              </div>
              {/* slide 2 */}
              <div className="keen-slider__slide number-slide1">
                <div className="col-span-2 relative">
                  <img
                    src="/images/inner/facilities-2.jpg"
                    className=""
                    alt=""
                  />
                  <div className="inline-flex items-center justify-between bg-lightBlack  hover:bg-whiteSmoke dark:hover:bg-white transition-all duration-300 w-[90%] float-right absolute bottom-0 right-[20px] group">
                    <p className="text-white text-lg sm:text-xl lg:text-[18px] xl:text-[22px]  group-hover:text-lightBlack leading-6 font-semibold font-Garamond px-5">
                      Gym Training Ground
                    </p>
                    <button className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]  flex items-center justify-center bg-khaki">
                      <HiArrowLongRight className="w-5 h-5 text-white    " />
                    </button>
                  </div>
                </div>
              </div>
              {/* slide 3 */}
              <div className="keen-slider__slide number-slide1">
                <div className="col-span-2 relative">
                  <img
                    src="/images/inner/facilities-3.jpg"
                    className=""
                    alt=""
                  />
                  <div className="inline-flex items-center justify-between bg-lightBlack  hover:bg-whiteSmoke dark:hover:bg-white transition-all duration-300 w-[90%] float-right absolute bottom-0 right-[20px] group">
                    <p className="text-white text-lg sm:text-xl lg:text-[18px] xl:text-[22px]  group-hover:text-lightBlack leading-6 font-semibold font-Garamond px-5">
                      Gym Training Ground
                    </p>
                    <button className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]  flex items-center justify-center bg-khaki">
                      <HiArrowLongRight className="w-5 h-5 text-white    " />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>

      {/* Contact with Us */}
      <div className="">
        <div className="Container bg-whiteSmoke  px-7 md:px-10 lg:px-14 2xl:px-20 py-10 md:py-14 lg:py-18 xl:py-20 2xl:py-[100px] relative  z-[1] mt-[-100px] mb-[100px]">
          <div className="flex md:items-center flex-col md:flex-row">
            <div
              className="px-2 py-5 sm:p-5 flex-1"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <p className="text-Garamond text-base leading-[26px] text-khaki font-medium">
                CONTACT US
              </p>
              <h2 className="text-Garamond text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] text-uppercase text-lightBlack  font-semibold my-3 md:my-5">
                CONTACT WITH US
              </h2>
              <p className="text-Lora text-sm sm:text-base leading-[26px]  text-gray  font-normal">
                Rapidiously myocardinate cross-platform intellectual capital
                after the model. Appropriately create interactive
                infrastructures after maintance Holisticly facilitate
                stand-alone
              </p>

              {/* call */}
              <div className="flex items-center my-4  lg:my-[26px] group">
                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-white group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full transition-all duration-300">
                  <IoIosCall
                    size={20}
                    className="text-khaki group-hover:text-whiteSmoke"
                  />
                </div>
                <div className="ml-3 md:ml-4">
                  <p className="font-Lora text-sm leading-[26px] text-gray  font-normal">
                    Call Us Now
                  </p>
                  <p className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack  font-medium">
                    +980 123 (4567) 890
                  </p>
                </div>
              </div>
              <hr className="dark:text-gray dark:bg-gray text-lightGray bg-lightGray h-[1px]" />
              {/* email */}
              <div className="flex items-center my-4  lg:my-[26px] group">
                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-white group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full transition-all duration-300">
                  <MdEmail
                    size={20}
                    className="text-khaki group-hover:text-whiteSmoke"
                  />
                </div>
                <div className="ml-3 md:ml-4">
                  <p className="font-Lora text-sm leading-[26px] text-gray  font-normal">
                    Send Email
                  </p>
                  <p className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack  font-medium ">
                    example@gmail.com
                  </p>
                </div>
              </div>
              <hr className="dark:text-gray dark:bg-gray text-lightGray bg-lightGray h-[1px]" />
              {/* location */}
              <div className="flex items-center my-4  lg:my-[26px] group">
                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-white group-hover:bg-khaki dark:group-hover:bg-khaki grid items-center justify-center rounded-full transition-all duration-300">
                  <MdOutlineShareLocation
                    size={20}
                    className="text-khaki group-hover:text-whiteSmoke"
                  />
                </div>
                <div className="ml-3 md:ml-4">
                  <p className="font-Lora text-sm leading-[26px] text-gray  font-normal">
                    Our Locations
                  </p>
                  <p className="font-Garamond text-lg sm:text-xl md:text-[22px] leading-[26px] text-lightBlack  font-medium ">
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
              <div className="bg-lightBlack  p-[30px] lg:p-[45px] 2xl:p-[61px]">
                <h2 className="font-Garamond text-[22px] sm:text-2xl md:text-[28px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] text-white font-semibold text-center">
                  GET IN TOUCH
                </h2>
                <form className="grid items-center grid-cols-1 gap-2 mt-8">
                  <input
                    type="text"
                    className="w-full h-12 md:h-13 lg:h-[59px] px-4 border border-gray  text-lightGray outline-none focus:border-gray bg-transparent mt-4 focus:ring-0 placeholder:text-gray"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    className="w-full h-12 md:h-13 lg:h-[59px] px-4 border  border-gray  text-lightGray outline-none focus:border-gray  bg-transparent mt-4 focus:ring-0 placeholder:text-gray"
                    placeholder="Enter E-mail"
                    required
                  />
                  <select
                    className="w-full h-12 md:h-13 lg:h-[59px] px-4 border border-gray  text-lightGray outline-none  bg-transparent mt-4 focus:ring-0 focus:border-gray "
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
                    className="w-full h-[121px] px-4 border border-gray  text-lightGray outline-none  bg-transparent mt-4 focus:ring-0  focus:border-gray placeholder:text-gray resize-none"
                    placeholder="Write Message:"
                    required
                  ></textarea>
                  <button
                    className="w-full bg-khaki text-white text-center h-10 2xl:h-[55px] mt-5"
                    onClick={() => {
                      Swal.fire({
                        title: "Form Fill-Up Complete?",
                        text: "Please Fill All Type Of Field",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#008000",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, complete!",
                        color: "#fff",
                        background: "#c19d68",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire({
                            title: "Congratulation!",
                            text: "Your Appointment Added Successful!",
                            icon: "success",
                            background: "#c19d68",
                            color: "#fff",
                            confirmButtonColor: "#008000",
                          });
                        }
                      });
                    }}
                  >
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

export default Room;
