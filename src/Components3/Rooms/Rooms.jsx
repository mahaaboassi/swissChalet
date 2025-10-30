import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";
const Rooms = () => {
  const [rooms, setRooms] = useState(false);
  return (
    <section className="bg-whiteSmoke dark:bg-lightBlack py-20 2xl:py-[120px]">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-[30px] items-center">
          {rooms ? (
            <>
              {/* Room - 1 */}
              <div
                className=" p-[30px] bg-white dark:bg-normalBlack 
          boxShadow transition-all duration-300"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home-3/room-1.jpg"
                  className="object-cover w-full "
                  alt=""
                />
                <div className="pt-[10px] pb-[5px] font-Garamond">
                  <h3 className="text-[22px] sm:text-2xl lg:text-[28px] xl:text-[34px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white mt-[20px] mb-4 font-semibold  hover:text-khaki dark:hover:text-khaki cursor-pointer transition-all duration-300">
                    <Link to="/room_details">
                      Co-working suite For modern startups
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-5 md:mb-[28px] font-normal">
                    Accommodation at Hotel Room features best contemporary
                    design and central heating. All rooms include a 26-inch…
                  </p>
                  <Link
                    to="/room_details"
                    className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Garamond hover:text-khaki uppercase dark:hover:text-khaki font-semibold "
                  >
                    DETAILS & BOOKING
                    <HiOutlineArrowNarrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
              {/* Room -2 */}
              <div
                className=" p-[30px] bg-white dark:bg-normalBlack 
          boxShadow transition-all duration-300"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home-3/room-2.jpg"
                  className="object-cover w-full"
                  alt=""
                />
                <div className="pt-[10px] pb-[5px] font-Garamond">
                  <h3 className="text-[22px] sm:text-2xl lg:text-[28px] xl:text-[34px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white mt-[20px] mb-4 font-semibold  hover:text-khaki dark:hover:text-khaki cursor-pointer transition-all duration-300">
                    <Link to="/room_details">
                      {" "}
                      The Grand Suite Do you feel great?
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-5 md:mb-[28px] font-normal">
                    Accommodation at Hotel Room features best contemporary
                    design and central heating. All rooms include a 26-inch…
                  </p>
                  <Link
                    to="/room_details"
                    className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Garamond hover:text-khaki uppercase dark:hover:text-khaki font-semibold "
                  >
                    DETAILS & BOOKING
                    <HiOutlineArrowNarrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
              {/* Room -3 */}
              <div
                className=" p-[30px] bg-white dark:bg-normalBlack 
          boxShadow transition-all duration-300"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home-3/room-3.jpg"
                  className="object-cover w-full"
                  alt=""
                />
                <div className="pt-[10px] pb-[5px] font-Garamond">
                  <h3 className="text-[22px] sm:text-2xl lg:text-[28px] xl:text-[34px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white mt-[20px] mb-4 font-semibold  hover:text-khaki dark:hover:text-khaki cursor-pointer transition-all duration-300">
                    <Link to="/room_details">
                      Double Deluxe This is classic best
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-5 md:mb-[28px] font-normal">
                    Accommodation at Hotel Room features best contemporary
                    design and central heating. All rooms include a 26-inch…
                  </p>
                  <Link
                    to="/room_details"
                    className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Garamond hover:text-khaki uppercase dark:hover:text-khaki font-semibold "
                  >
                    DETAILS & BOOKING
                    <HiOutlineArrowNarrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
              {/* Room - 1 */}
              <div
                className=" p-[30px] bg-white dark:bg-normalBlack 
          boxShadow transition-all duration-300"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home-3/room-1.jpg"
                  className="object-cover w-full"
                  alt=""
                />
                <div className="pt-[10px] pb-[5px] font-Garamond">
                  <h3 className="text-[22px] sm:text-2xl lg:text-[28px] xl:text-[34px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white mt-[20px] mb-4 font-semibold  hover:text-khaki dark:hover:text-khaki cursor-pointer transition-all duration-300">
                    <Link to="/room_details">
                      Co-working suite For modern startups
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-5 md:mb-[28px] font-normal">
                    Accommodation at Hotel Room features best contemporary
                    design and central heating. All rooms include a 26-inch…
                  </p>
                  <Link
                    to="/room_details"
                    className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Garamond hover:text-khaki uppercase dark:hover:text-khaki font-semibold "
                  >
                    DETAILS & BOOKING
                    <HiOutlineArrowNarrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
              {/* Room -2 */}
              <div
                className=" p-[30px] bg-white dark:bg-normalBlack 
          boxShadow transition-all duration-300"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home-3/room-2.jpg"
                  className="object-cover w-full"
                  alt=""
                />
                <div className="pt-[10px] pb-[5px] font-Garamond">
                  <h3 className="text-[22px] sm:text-2xl lg:text-[28px] xl:text-[34px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white mt-[20px] mb-4 font-semibold  hover:text-khaki dark:hover:text-khaki cursor-pointer transition-all duration-300">
                    <Link to="/room_details">
                      {" "}
                      The Grand Suite Do you feel great?
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-5 md:mb-[28px] font-normal">
                    Accommodation at Hotel Room features best contemporary
                    design and central heating. All rooms include a 26-inch…
                  </p>
                  <Link
                    to="/room_details"
                    className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Garamond hover:text-khaki uppercase dark:hover:text-khaki font-semibold "
                  >
                    DETAILS & BOOKING
                    <HiOutlineArrowNarrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
              {/* Room -3 */}
              <div
                className=" p-[30px] bg-white dark:bg-normalBlack 
          boxShadow transition-all duration-300"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home-3/room-3.jpg"
                  className="object-cover w-full"
                  alt=""
                />
                <div className="pt-[10px] pb-[5px] font-Garamond">
                  <h3 className="text-[22px] sm:text-2xl lg:text-[28px] xl:text-[34px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white mt-[20px] mb-4 font-semibold  hover:text-khaki dark:hover:text-khaki cursor-pointer transition-all duration-300">
                    <Link to="/room_details">
                      Double Deluxe This is classic best
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-5 md:mb-[28px] font-normal">
                    Accommodation at Hotel Room features best contemporary
                    design and central heating. All rooms include a 26-inch…
                  </p>
                  <Link
                    to="/room_details"
                    className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Garamond hover:text-khaki uppercase dark:hover:text-khaki font-semibold "
                  >
                    DETAILS & BOOKING
                    <HiOutlineArrowNarrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Room - 1 */}
              <div
                className=" p-[30px] bg-white dark:bg-normalBlack 
          boxShadow transition-all duration-300"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home-3/room-1.jpg"
                  className="object-cover w-full"
                  alt=""
                />
                <div className="pt-[10px] pb-[5px] font-Garamond">
                  <h3 className="text-[22px] sm:text-2xl lg:text-[28px] xl:text-[34px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white mt-[20px] mb-4 font-semibold  hover:text-khaki dark:hover:text-khaki cursor-pointer transition-all duration-300">
                    <Link to="/room_details">
                      Co-working suite For modern startups
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-5 md:mb-[28px] font-normal">
                    Accommodation at Hotel Room features best contemporary
                    design and central heating. All rooms include a 26-inch…
                  </p>
                  <Link
                    to="/room_details"
                    className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Garamond hover:text-khaki uppercase dark:hover:text-khaki font-semibold "
                  >
                    DETAILS & BOOKING
                    <HiOutlineArrowNarrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
              {/* Room -2 */}
              <div
                className=" p-[30px] bg-white dark:bg-normalBlack 
          boxShadow transition-all duration-300"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home-3/room-2.jpg"
                  className="object-cover w-full"
                  alt=""
                />
                <div className="pt-[10px] pb-[5px] font-Garamond">
                  <h3 className="text-[22px] sm:text-2xl lg:text-[28px] xl:text-[34px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white mt-[20px] mb-4 font-semibold  hover:text-khaki dark:hover:text-khaki cursor-pointer transition-all duration-300">
                    <Link to="/room_details">
                      {" "}
                      The Grand Suite Do you feel great?
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-5 md:mb-[28px] font-normal">
                    Accommodation at Hotel Room features best contemporary
                    design and central heating. All rooms include a 26-inch…
                  </p>
                  <Link
                    to="/room_details"
                    className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Garamond hover:text-khaki uppercase dark:hover:text-khaki font-semibold "
                  >
                    DETAILS & BOOKING
                    <HiOutlineArrowNarrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
              {/* Room -3 */}
              <div
                className=" p-[30px] bg-white dark:bg-normalBlack 
          boxShadow transition-all duration-300"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home-3/room-3.jpg"
                  className="object-cover w-full"
                  alt=""
                />
                <div className="pt-[10px] pb-[5px] font-Garamond">
                  <h3 className="text-[22px] sm:text-2xl lg:text-[28px] xl:text-[34px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white mt-[20px] mb-4 font-semibold  hover:text-khaki dark:hover:text-khaki cursor-pointer transition-all duration-300">
                    <Link to="/room_details">
                      Double Deluxe This is classic best
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-5 md:mb-[28px] font-normal">
                    Accommodation at Hotel Room features best contemporary
                    design and central heating. All rooms include a 26-inch…
                  </p>
                  <Link
                    to="/room_details"
                    className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Garamond hover:text-khaki uppercase dark:hover:text-khaki font-semibold "
                  >
                    DETAILS & BOOKING
                    <HiOutlineArrowNarrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        {/* See more button */}
        <div className="text-center mt-[48px]">
          <Link >
            <button
              className="btn-items 3xl:h-[58px] 2xl:before:top-16"
              onClick={() => setRooms(!rooms)}
            >
              {rooms ? "CLOSE ALL" : "VIEW ALL ROOMS"}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
