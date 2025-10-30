import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="bg-[url('/images/home-2/hero-bg.jpg')] bg-no-repeat bg-center w-full bg-cover h-[600px] md:h-[650px] lg:h-[700px] 2xl:h-[960px] grid items-center justify-center bg-[rgba(30,30,30,0.4)] bg-opacity-30 "
      data-aos="fade-down"
    >
      <div></div>
      <div className="px-5 font-Garamond text-center text-white">
        <h5 className="text-base lg:text-lg tracking-[3px] leading-7 font-medium">
          ROYELLA HOTEL RESORT
        </h5>
        <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-[75px] mt-[30px] md:mt-[40px]   2xl:mt-[75px] relative before:absolute before:w-[1px] before:h-[30px] md:before:h-[40px] 2xl:before:h-[50px] before:-top-[18px] sm:before:-top-[28px] md:before:-top-[40px] 2xl:before:-top-[60px] before:left-1/2 before:bg-white">
          BOOK YOUR VACATION
        </h1>
      </div>
      <div className="items-end Container-Hero">
        <div className="grid items-center justify-center grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-x-[30px]">
          <div className="">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium font-Garamond text-white">
              Check In...*
            </p>
            <div className="flex items-center pt-[18px] ">
              <input
                type="date"
                className=" bg-transparent focus:outline-transparent  text-white placeholder:text-white outline-0  flex-initial text-sm lg:text-base focus:ring-transparent border-t-0 border-l-0 border-r-0 border-b-[1px] border-khaki focus:border-khaki text-left pl-0 w-[120px] sm:w-[160px] lg:w-[210px] xl:w-[160px] 2xl:w-[210px] "
                placeholder="Check in Date "
              />
            </div>
          </div>
          <div className="">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium font-Garamond text-white">
              Check Out...*
            </p>
            <div className="flex items-center pt-[18px] ">
              <input
                type="date"
                className=" bg-transparent focus:outline-transparent text-white placeholder:text-white  outline-0   flex-initial text-sm lg:text-base focus:ring-transparent border-t-0 border-l-0 border-r-0 border-b-[1px] border-khaki focus:border-khaki text-left pl-0 w-[120px] sm:w-[160px] lg:w-[210px] xl:w-[160px] 2xl:w-[210px] "
                placeholder="Check in Date"
              />
            </div>
          </div>
          <div className="">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium font-Garamond text-white">
              Adults
            </p>
            <div className="flex items-center pt-[18px]">
              <select
                className="w-[120px] sm:w-[160px] lg:w-[210px] xl:w-[160px] 2xl:w-[210px]  flex-initial bg-transparent  outline-0 text-sm lg:text-base text-white  focus:outline-none  focus:ring-transparent border border-khaki focus:border-khaki text-left h-[50px]"
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
                <option className="bg-lightBlack text-sm lg:text-base px-3 py-1 ">
                  01
                </option>
                <option className="bg-lightBlack text-sm lg:text-base px-3 py-1 ">
                  02
                </option>
                <option className="bg-lightBlack text-sm lg:text-base px-3 py-1 ">
                  03
                </option>
                <option className="bg-lightBlack text-sm lg:text-base px-3 py-1 ">
                  04
                </option>
                <option className="bg-lightBlack text-sm lg:text-base px-3 py-1 ">
                  05
                </option>
              </select>
            </div>
          </div>

          <div className="">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium font-Garamond text-white">
              Children
            </p>
            <div className="flex items-center pt-[18px]">
              <select
                className="w-[120px] sm:w-[160px] lg:w-[210px] xl:w-[160px] 2xl:w-[210px] h-[50px] flex-initial bg-transparent  outline-0 text-sm lg:text-base focus:outline-none  focus:ring-transparent text-white border border-khaki focus:border-khaki"
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
                <option className="bg-lightBlack text-sm lg:text-base px-3 py-1 text-white">
                  01
                </option>
                <option className="bg-lightBlack text-sm lg:text-base px-3 py-1 text-white">
                  02
                </option>
                <option className="bg-lightBlack text-sm lg:text-base px-3 py-1 text-white">
                  03
                </option>
                <option className="bg-lightBlack text-sm lg:text-base px-3 py-1 text-white">
                  04
                </option>
                <option className="bg-lightBlack text-sm lg:text-base px-3 py-1 text-white">
                  05
                </option>
              </select>
            </div>
          </div>
          <Link to="/home2/find_room">
            <button className="w-[142px] 2xl:w-[210px] h-[50px] text-[15px] bg-khaki font-Garamond text-white sm:mt-[47px] hover-animBg after:bg-normalBlack after:rounded-none text-base md:text-lg">
              Checkout Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
