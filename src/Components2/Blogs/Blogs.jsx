import { FiUser } from "react-icons/fi";
import { BsCalendar4 } from "react-icons/bs";
import { Link } from "react-router-dom";
const Blogs = () => {
  return (
    <div className="lg:relative ">
      {/* Blog Content */}
      <section className="py-20 2xl:pt-[120px] lg:pb-[220px] bg-whiteSmoke dark:bg-normalBlack px-2">
        <div className="Container">
          {/* section heading */}
          <div
            className="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[280px] font-Garamond"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4 className="text-base lg:text-lg font-medium text-khaki leading-[28px]">
              OUR BLOG
            </h4>
            <h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-6 md:leading-7 lg:leading-7 2xl:leading-[34px] 3xl:leading-[44px] text-lightBlack dark:text-white mt-2 md:mt-[10px]  mb-[12px] font-bold">
              Recent News & Articles
            </h1>
            <p className="font-Lora leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base ">
              A wonderful serenity has taken possession of my entire soul, like
              these royella dolor consectetur adipiscing elit dos eiusmod tempor
              incididunt resort sweet spring
            </p>
          </div>
          {/* section Content */}
          <div className="mt-14 2xl:mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 xl:gap-[30px]">
            {/* Blog - 1  */}
            <div
              className="group z-[2]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="overflow-hidden">
                <img
                  src="/images/home-2/blog-1.jpg"
                  alt=""
                  className="w-full object-cover  group-hover:scale-105 transition-all duration-500 "
                />
              </div>
              <div className="bg-white dark:bg-lightBlack px-[15px] sm:px-[35px] lg:px-5 xl:px-[30px] ">
                <div className="pt-9 pb-[25px] flex items-center justify-between ">
                  <div className="flex items-center">
                    <span className="w-9 h-9 rounded-full bg-whiteSmoke dark:bg-normalBlack grid items-center justify-center">
                      <FiUser size={14} className="text-khaki " />
                    </span>
                    <p className="ml-3 lg:ml-2 xl:ml-3 text-sm  leading-6 md:leading-7 lg:leading-7 2xl:leading-[34px] text-gray dark:text-lightGray font-medium font-Lora">
                      Hana Evans
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="w-9 h-9 rounded-full bg-whiteSmoke dark:bg-normalBlack grid items-center justify-center">
                      <BsCalendar4 size={14} className="text-khaki" />
                    </span>
                    <p className="ml-3 lg:ml-2 xl:ml-3  text-sm  leading-6 md:leading-7 lg:leading-7 2xl:leading-[34px] text-gray dark:text-lightGray font-medium font-Lora">
                      Sep 21-2023
                    </p>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg md:text-xl xl:text-2xl leading-[32px] text-lightBlack dark:text-white font-bold font-Garamond hover:text-khaki transition-all duration-300">
                    <Link to="/blog_details">
                      Nine resorts in Bangalore that are worth your attention
                    </Link>
                  </h5>
                  <p className="mt-[15px] pb-[33px] text-sm sm:text-base leading-6 md:leading-7 lg:leading-7 2xl:leading-[34px] text-gray dark:text-lightGray font-medium font-Lora text-justify">
                    Status A wonderful serenity taken possesion may entire sould
                    these royela consetetur to royella dos eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
            {/* Blog - 2  */}
            <div
              className="group z-[2]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="overflow-hidden">
                <img
                  src="/images/home-2/blog-2.jpg"
                  alt=""
                  className="w-full object-cover  group-hover:scale-105 transition-all duration-500 "
                />
              </div>
              <div className="bg-white dark:bg-lightBlack px-[15px] sm:px-[35px] lg:px-5 xl:px-[30px] ">
                <div className="pt-9 pb-[25px] flex items-center justify-between ">
                  <div className="flex items-center">
                    <span className="w-9 h-9 rounded-full bg-whiteSmoke dark:bg-normalBlack grid items-center justify-center">
                      <FiUser size={14} className="text-khaki " />
                    </span>
                    <p className="ml-3 lg:ml-2 xl:ml-3 text-sm  leading-6 md:leading-7 lg:leading-7 2xl:leading-[34px] text-gray dark:text-lightGray font-medium font-Lora">
                      Hana Evans
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="w-9 h-9 rounded-full bg-whiteSmoke dark:bg-normalBlack grid items-center justify-center">
                      <BsCalendar4 size={14} className="text-khaki" />
                    </span>
                    <p className="ml-3 lg:ml-2 xl:ml-3 text-sm  leading-6 md:leading-7 lg:leading-7 2xl:leading-[34px] text-gray dark:text-lightGray font-medium font-Lora">
                      Sep 21-2023
                    </p>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg md:text-xl xl:text-2xl leading-[32px] text-lightBlack dark:text-white font-bold font-Garamond hover:text-khaki transition-all duration-300">
                    <Link to="/blog_details">
                      The Hotels Perfectly Suited for Business Travelers
                    </Link>
                  </h5>
                  <p className="mt-[15px] pb-[33px] text-sm sm:text-base leading-6 md:leading-7 lg:leading-7 2xl:leading-[34px] text-gray dark:text-lightGray font-medium font-Lora text-justify">
                    Status A wonderful serenity taken possesion may entire sould
                    these royela consetetur to royella dos eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
            {/* Blog - 3  */}
            <div
              className="group z-[2]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="overflow-hidden">
                <img
                  src="/images/home-2/blog-3.jpg"
                  alt=""
                  className="w-full object-cover  group-hover:scale-105 transition-all duration-500 "
                />
              </div>
              <div className="bg-white dark:bg-lightBlack px-[15px] sm:px-[35px] lg:px-5 xl:px-[30px] ">
                <div className="pt-9 pb-[25px] flex items-center justify-between ">
                  <div className="flex items-center">
                    <span className="w-9 h-9 rounded-full bg-whiteSmoke dark:bg-normalBlack grid items-center justify-center">
                      <FiUser size={14} className="text-khaki " />
                    </span>
                    <p className="ml-3 lg:ml-2 xl:ml-3 text-sm  leading-6 md:leading-7 lg:leading-7 2xl:leading-[34px] text-gray dark:text-lightGray font-medium font-Lora">
                      Hana Evans
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="w-9 h-9 rounded-full bg-whiteSmoke dark:bg-normalBlack grid items-center justify-center">
                      <BsCalendar4 size={14} className="text-khaki" />
                    </span>
                    <p className="ml-3 lg:ml-2 xl:ml-3 text-sm  leading-6 md:leading-7 lg:leading-7 2xl:leading-[34px] text-gray dark:text-lightGray font-medium font-Lora">
                      Sep 21-2023
                    </p>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg md:text-xl xl:text-2xl leading-[32px] text-lightBlack dark:text-white font-bold font-Garamond hover:text-khaki transition-all duration-300">
                    <Link to="/blog_details">
                      Spa included with our weekend voucher for couples.
                    </Link>
                  </h5>
                  <p className="mt-[15px] pb-[33px] text-sm sm:text-base leading-6 md:leading-7 lg:leading-7 2xl:leading-[34px] text-gray dark:text-lightGray font-medium font-Lora text-justify">
                    Status A wonderful serenity taken possesion may entire sould
                    these royela consetetur to royella dos eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Subscribe Content */}
      <div
        className="dark:bg-lightBlack"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <section className="subContainer bg-[url('/images/home-2/subscribe-bg.jpg')] bg-no-repeat bg-center bg-cover flex flex-col md:flex-row items-center justify-center md:justify-between py-5 md:py-8 lg:py-10 xl:py-12 2xl:py-14 3xl:py-[70px] px-5 md:px-8 lg:px-10 2xl:px-20 lg:absolute lg:bottom-[-110px] left-0 right-0 h-[205px]">
          <div className="font-Garamond text-center md:text-left ">
            <h5 className="text-base sm:text-lg font-bold leading-7 md:leading-9 lg:leading-[46px] text-white ">
              SUBSCRIBE
            </h5>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-[38px] font-bold leading-7 md:leading-9 lg:leading-[46px] text-white ">
              For More Deals
            </h2>
          </div>
          <div className="flex items-center  mt-4 md:mt-0">
            <form className="flex items-center justify-between w-full border border-white h-10 sm:h-[50px] lg:h-[68px]  lg:w-[450px] 2xl:w-[585px]">
              <input
                type="email"
                className="inline-block lg:px-[26px] py-2 sm:py-4 md:py-[22px] bg-transparent border-none outline-white text-base xl:text-[17px] text-white font-Lora font-normal placeholder:text-white focus:outline-transparent focus:border-white
                  focus:ring-transparent flex-initial"
                placeholder="Email Address"
                required
              />
              <button className="bg-white text-khaki text-base font-medium  font-Garamond px-2 sm:px-5 lg:px-10 py-2  h-10 sm:h-[50px] lg:h-[68px] border border-white  hover-animBg hover:text-white">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
