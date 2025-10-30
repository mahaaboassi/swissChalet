import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <section className="">
      {/* Event one */}
      <div className="bg-[url('/images/home-3/event-bg-1.jpg')] dark:bg-[url('/images/home-3/dark-event-1.jpg')] bg-no-repeat py-20 2xl:py-[133px] bg-cover bg-center">
        <div
          className="p-7 md:p-[40px] lg:p-[50px] 2xl:p-[60px] bg-white dark:bg-normalBlack dark: sm:w-[450px] md:w-[550px] xl:w-[590px] ml-[0%] sm:ml-[10%] 3xl:ml-[15%]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex items-center justify-center">
            <img
              src="/images/home-3/shape.png"
              alt=""
              className="dark:hidden"
            />
            <img
              src="/images/home-3/shape-2.png"
              alt=""
              className="hidden dark:block"
            />
            <h5 className="px-5 text-sm md:text-base leading-[26px] lg:leading-[42px] text-gray dark:text-lightGray font-Garamond font-semibold uppercase">
              WE ARE RELIABLE
            </h5>
            <img
              src="/images/home-3/shape.png"
              alt=""
              className="dark:hidden"
            />
            <img
              src="/images/home-3/shape-2.png"
              alt=""
              className="hidden dark:block"
            />
          </div>
          <h3 className="text-center text-2xl md:text-3xl 2xl:text-[38px] leading-[26px] lg:leading-[38px] 2xl:leading-[42px] text-lightBlack dark:text-white mt-1 mb-[15px] font-bold font-Garamond">
            Partner in the event
          </h3>
          <p className="font-Lora leading-[23px] sm:leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base text-center mb-6 2xl:mb-9">
            The Hotel <b>Royella City</b> is the perfect choice for business or
            social meetings and events, a conference hotel in London, satisfying
            your professional requirements. The hotel’s Halls cover a wide range
            of events, such as conferences and corporate events, product
            presentations.
          </p>

          <Link to={"/blog"} className="flex items-center  justify-center">
            <button
              to="#"
              className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-5 lg:leading-[38px] font-Lora font-medium border border-[#dddddd] dark:border-[#474747] px-7 xl:px-8 py-[6px] hover-animBg hover:text-white after:rounded-none "
            >
              OUR EVENTS
              <HiOutlineArrowNarrowRight className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
      {/* event two */}
      <div className="bg-[url('/images/home-3/event-bg-2.jpg')] dark:bg-[url('/images/home-3/dark-event-2.jpg')] bg-no-repeat py-20 2xl:py-[133px] bg-cover bg-center">
        <div
          className="p-7 md:p-[40px] lg:p-[50px] 2xl:p-[60px] bg-white dark:bg-normalBlack dark: sm:w-[450px] md:w-[550px] xl:w-[590px] ml-0 sm:ml-[10%] md:ml-[18%] lg:ml-[35%]  xl:ml-[45%] 2xl:ml-[53%]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex items-center  justify-center">
            <img
              src="/images/home-3/shape.png"
              alt=""
              className="dark:hidden"
            />
            <img
              src="/images/home-3/shape-2.png"
              alt=""
              className="hidden dark:block"
            />
            <h5 className="px-5 text-sm md:text-base leading-[26px] lg:leading-[42px] text-gray dark:text-lightGray font-Garamond font-semibold uppercase">
              WE WILL SHOW THE WAY TO
            </h5>
            <img
              src="/images/home-3/shape.png"
              alt=""
              className="dark:hidden"
            />
            <img
              src="/images/home-3/shape-2.png"
              alt=""
              className="hidden dark:block"
            />
          </div>
          <h3 className="text-center text-2xl md:text-3xl 2xl:text-[38px] leading-[26px] lg:leading-[38px] 2xl:leading-[42px] text-lightBlack dark:text-white mt-1 mb-[15px] font-bold font-Garamond">
            Walking around London
          </h3>
          <p className="font-Lora leading-[23px] sm:leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base text-center mb-6 2xl:mb-9">
            The Hotel <b>Royella City</b> is the perfect choice for business or
            social meetings and events, a conference hotel in London, satisfying
            your professional requirements. The hotel’s Halls cover a wide range
            of events, such as conferences and corporate events, product
            presentations.
          </p>

          <Link to={"/blog"} className="flex items-center  justify-center">
            <button
              to="#"
              className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-5 lg:leading-[38px] font-Lora font-medium border border-[#dddddd] dark:border-[#474747] px-7 xl:px-8 py-[6px] hover-animBg hover:text-white after:rounded-none "
            >
              OUR EVENTS
              <HiOutlineArrowNarrowRight className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
      {/* event three */}
      <div className="bg-[url('/images/home-3/event-bg-3.jpg')] dark:bg-[url('/images/home-3/dark-event-3.jpg')] bg-no-repeat py-20 2xl:py-[133px] bg-cover bg-center">
        <div
          className="p-7 md:p-[40px] lg:p-[50px] 2xl:p-[60px] bg-white dark:bg-normalBlack dark: sm:w-[450px] md:w-[550px] xl:w-[590px] ml-[0%] sm:ml-[10%] 3xl:ml-[15%]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex items-center  justify-center">
            <img
              src="/images/home-3/shape.png"
              alt=""
              className="dark:hidden"
            />
            <img
              src="/images/home-3/shape-2.png"
              alt=""
              className="hidden dark:block"
            />
            <h5 className="px-5 text-sm md:text-base leading-[26px] lg:leading-[42px] text-gray dark:text-lightGray font-Garamond font-semibold uppercase">
              Your pets are welcome
            </h5>
            <img
              src="/images/home-3/shape.png"
              alt=""
              className="dark:hidden"
            />
            <img
              src="/images/home-3/shape-2.png"
              alt=""
              className="hidden dark:block"
            />
          </div>
          <h3 className="text-center text-2xl md:text-3xl 2xl:text-[38px] leading-[26px] lg:leading-[38px] 2xl:leading-[42px] text-lightBlack dark:text-white mt-1 mb-[15px] font-bold font-Garamond">
            Partner in the event
          </h3>
          <p className="font-Lora leading-[23px] sm:leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base text-center mb-6 2xl:mb-9">
            The Hotel <b>Royella City</b> is the perfect choice for business or
            social meetings and events, a conference hotel in London, satisfying
            your professional requirements. The hotel’s Halls cover a wide range
            of events, such as conferences and corporate events, product
            presentations.
          </p>

          <Link to={"/blog"} className="flex items-center  justify-center">
            <button
              to="#"
              className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-5 lg:leading-[38px] font-Lora font-medium border border-[#dddddd] dark:border-[#474747] px-7 xl:px-8 py-[6px] hover-animBg hover:text-white after:rounded-none "
            >
              OUR EVENTS
              <HiOutlineArrowNarrowRight className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
