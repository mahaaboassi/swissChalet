import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="">
      {/* // banner section */}
      <section
        className="bg-[url('/images/home-3/hero-bg.jpg')] bg-no-repeat bg-center w-full bg-cover h-[700px] lg:h-[780px]  grid items-center justify-center bg-[rgba(30,30,30,0.4)] bg-opacity-30 relative"
        data-aos="fade-down"
      >
        <div className="px-5 font-Garamond text-center text-[#fefefe] ">
          <h5 className="text-sm sm:text-base lg:text-lg leading-[26px] md:leading-8 lg:leading-[36px] font-bold bg-khaki bg-opacity-40 inline-block text-center px-3 sm:px-6 uppercase  relative">
            Welcome To Royella City Hotel
          </h5>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-[80px] font-bold leading-[28px] md:leading-9 2xl:leading-[100px] mt-4 mb-5 md:mb-7">
            A New Vision Of Comfort
          </h1>
          <Link to={"/about"}>
            <button className="btn-secondary lg:h-[55px] before:top-[3.3rem] lg:before:top-[4rem]">
              Discover more
            </button>
          </Link>
        </div>
      </section>
      {/* // banner bottom */}
      <div className="bg-whiteSmoke dark:bg-lightBlack">
        <div className="-mt-[120px] relative z-[1]">
          <section
            className="Container bg-lightBlack dark:bg-normalBlack "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <form className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  items-center justify-center  gap-[10px]  py-5 sm:pt-8 sm:pb-8 lg:pt-[50px] lg:pb-[40px] 2xl:pt-[70px] 2xl:pb-[55px] px-3 sm:px-10 md:px-14 lg:px-16 xl:px-20 font-Garamond">
              <div className="bg-normalBlack dark:bg-lightBlack px-5 pt-4 pb-3">
                <p className="text-sm lg:text-[15px] font-bold text-[#fefefe] text-opacity-30 uppercase pt-1">
                  Check In
                </p>
                <div className="flex items-center pt-[5px] ">
                  <input
                    required
                    type="text"
                    className=" bg-transparent ml-[-9px] focus:outline-transparent  text-[#fefefe] placeholder:text-[#fefefe] text-lg lg:text-xl placeholder:2xl:text-[22px] 2xl:text-[22px] font-bold outline-0 flex-initial text-[13px] md:text-base 2xl:text-lg focus:ring-transparent border-0  text-left"
                    placeholder="Arrival Date"
                  />
                </div>
              </div>
              <div className="bg-normalBlack dark:bg-lightBlack px-5 pt-4 pb-3">
                <p className="text-sm lg:text-[15px] font-bold text-[#fefefe] text-opacity-30 uppercase pt-1">
                  Check Out
                </p>
                <div className="flex items-center pt-[5px] ">
                  <input
                    required
                    type="text"
                    className=" bg-transparent ml-[-9px] focus:outline-transparent text-[#fefefe] placeholder:text-[#fefefe] text-lg lg:text-xl placeholder:2xl:text-[22px] 2xl:text-[22px] font-bold outline-0 flex-initial text-[13px] md:text-base 2xl:text-lg focus:ring-transparent border-0  text-left"
                    placeholder="Departure Date"
                  />
                </div>
              </div>
              <div className="bg-normalBlack dark:bg-lightBlack px-5 pt-4 pb-3">
                <p className="text-sm lg:text-[15px] font-bold text-[#fefefe] text-opacity-30 uppercase pt-1">
                  Adults
                </p>
                <div className="flex items-center pt-[5px]">
                  <input
                    required
                    type="text"
                    className=" bg-transparent ml-[-9px] focus:outline-transparent text-[#fefefe]  outline-0 flex-initial text-[13px] md:text-base 2xl:text-lg focus:ring-transparent border-0 placeholder:text-[#fefefe] text-lg lg:text-xl placeholder:2xl:text-[22px] 2xl:text-[22px] font-bold text-left"
                    placeholder="Adults"
                  />
                </div>
              </div>
              <div className="bg-normalBlack dark:bg-lightBlack px-5 pt-4 pb-3">
                <p className="text-sm lg:text-[15px] font-bold text-[#fefefe] text-opacity-30 uppercase pt-1">
                  Children
                </p>
                <div className="flex items-center pt-[5px]">
                  <input
                    required
                    type="text"
                    className=" bg-transparent ml-[-9px] focus:outline-transparent text-[#fefefe]  outline-0 flex-initial text-[12px] md:text-base 2xl:text-lg focus:ring-transparent border-0 placeholder:text-[#fefefe] text-lg lg:text-xl placeholder:2xl:text-[22px] 2xl:text-[22px] font-bold text-left"
                    placeholder="Children"
                  />
                </div>
              </div>

              <button className="flex-initial  h-[90px] md:h-[99px] text-[15px] 2xl:text-[17px]  bg-khaki hover-animBg after:bg-normalBlack dark:after:bg-lightBlack after:rounded-none font-Garamond text-[#fefefe] ">
                <Link to="/home3/find_room">SEARCH ROOM</Link>
              </button>
            </form>
            <p className="text-center  text-sm md:text-base lg:text-lg 2xl:text-[24px] italic font-Garamond font-bold text-lightGray pb-[60px]">
              Check-in: After 02:00pm & Check-out: Before 11:00am
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
