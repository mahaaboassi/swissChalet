import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <section className="py-20 2xl:py-[120px] dark:bg-normalBlack ">
      <div className="Container">
        {/* section heading */}
        <div
          className="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[150px] xl:px-[280px] 2xl:px-[350px] font-Garamond"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[46px] text-lightBlack dark:text-white mb-[12px] md:mb-5 font-bold">
            Specials Offers
          </h1>
          <p className="font-Lora leading-[22px] lg:leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base ">
            We provide seasonal special discounts for selected rooms. Let us
            know the room you are interested and let’s make it happen.
          </p>
        </div>

        {/* section content */}
        <div className="mt-14 2xl:mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-[30px]">
          <div
            className="h-[491px] w-full relative bg-gradient-to-t from-[#1d1d1dd0] to-[#1d1d1d00] group overflow-hidden "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="/images/home-3/offer-1.png"
              alt=""
              className="absolute w-full h-full mix-blend-overlay group-hover:mix-blend-normal object-cover transition-all duration-500"
            />
            <img
              src="/images/home-3/logo.png"
              alt="logo"
              className="absolute top-10 left-10"
            />
            <h3 className=" group-hover:hidden text-3xl xl:text-[34px] leading-5 md:leading-8 lg:leading-[42px] text-white font-Garamond font-semibold absolute left-10 bottom-[30px]">
              Double Room - 20%
            </h3>
            <div className="bg-white dark:bg-lightBlack px-[25px] py-10 absolute bottom-[-340px] lg:bottom-[-430px] 3xl:bottom-[-340px] group-hover:bottom-0 left-[18px] right-[18px] my-[18px] transition-all duration-500">
              <h3 className="text-2xl md:text-[26px] lg:text-[30] xl:text-[34px] leading-5 md:leading-[26px] xl:leading-[42px] text-lightBlack dark:text-white font-Garamond font-semibold">
                Honeymoon Package
              </h3>
              <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] font-Lora font-normal text-ellipsis text-gray dark:text-lightGray mt-[19px] mb-[30px]">
                Mauris fermentum dictum magna. Selaoreet aliquam leo. Ut tellus
                dolor, dapibus eget, elementum vel, cursus eleifend, elit.
                Aenean auctor wisi et urna...
              </p>
              <Link to={"/pricing"}>
                <button
                  to="#"
                  className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-5 lg:leading-[38px] font-Lora font-medium  border px-6 h-[41px] hover:bg-khaki hover:text-white"
                >
                  VIEW OFFER
                  <HiOutlineArrowNarrowRight className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
          <div
            className="h-[491px] w-full relative bg-gradient-to-t from-[#1d1d1dd0] to-[#1d1d1d00] group overflow-hidden "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="/images/home-3/offer-2.png"
              alt=""
              className="absolute w-full h-full mix-blend-overlay group-hover:mix-blend-normal object-cover transition-all duration-500"
            />
            <img
              src="/images/home-3/logo.png"
              alt="logo"
              className="absolute top-10 left-10"
            />
            <h3 className=" group-hover:hidden text-3xl xl:text-[34px] leading-5 md:leading-8 lg:leading-[42px] text-white font-Garamond font-semibold absolute left-10 bottom-[30px]">
              Couple Room - 25%
            </h3>
            <div className="bg-white dark:bg-lightBlack px-[25px] py-10 absolute bottom-[-340px] lg:bottom-[-430px] 3xl:bottom-[-340px] group-hover:bottom-0 left-[18px] right-[18px] my-[18px] transition-all duration-500">
              <h3 className="text-2xl md:text-[26px] lg:text-[30] xl:text-[34px] leading-5 md:leading-[26px] xl:leading-[42px] text-lightBlack dark:text-white font-Garamond font-semibold">
                Honeymoon Package
              </h3>
              <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] font-Lora font-normal text-ellipsis text-gray dark:text-lightGray mt-[19px] mb-[30px]">
                Mauris fermentum dictum magna. Selaoreet aliquam leo. Ut tellus
                dolor, dapibus eget, elementum vel, cursus eleifend, elit.
                Aenean auctor wisi et urna...
              </p>
              <Link to={"/pricing"}>
                <button
                  to="#"
                  className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-5 lg:leading-[38px] font-Lora font-medium  border px-6 h-[41px] hover:bg-khaki hover:text-white"
                >
                  VIEW OFFER
                  <HiOutlineArrowNarrowRight className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
          <div
            className="h-[491px] w-full relative bg-gradient-to-t from-[#1d1d1dd0] to-[#1d1d1d00] group overflow-hidden "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="/images/home-3/offer-3.png"
              alt=""
              className="absolute w-full h-full mix-blend-overlay group-hover:mix-blend-normal object-cover transition-all duration-500"
            />
            <img
              src="/images/home-3/logo.png"
              alt="logo"
              className="absolute top-10 left-10"
            />
            <h3 className=" group-hover:hidden text-3xl xl:text-[34px] leading-5 md:leading-8 lg:leading-[42px] text-white font-Garamond font-semibold absolute left-10 bottom-[30px]">
              Family Room - 25%
            </h3>
            <div className="bg-white dark:bg-lightBlack px-[25px] py-10 absolute bottom-[-340px] lg:bottom-[-430px] 3xl:bottom-[-340px] group-hover:bottom-0 left-[18px] right-[18px] my-[18px] transition-all duration-500">
              <h3 className="text-2xl md:text-[26px] lg:text-[30] xl:text-[34px] leading-5 md:leading-[26px] xl:leading-[42px] text-lightBlack dark:text-white font-Garamond font-semibold">
                Honeymoon Package
              </h3>
              <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] font-Lora font-normal text-ellipsis text-gray dark:text-lightGray mt-[19px] mb-[30px]">
                Mauris fermentum dictum magna. Selaoreet aliquam leo. Ut tellus
                dolor, dapibus eget, elementum vel, cursus eleifend, elit.
                Aenean auctor wisi et urna...
              </p>
              <Link to={"/pricing"}>
                <button
                  to="#"
                  className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-5 lg:leading-[38px] font-Lora font-medium  border px-6 h-[41px] hover:bg-khaki hover:text-white"
                >
                  VIEW OFFER
                  <HiOutlineArrowNarrowRight className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
