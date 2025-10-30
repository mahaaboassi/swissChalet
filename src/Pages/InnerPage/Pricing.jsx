import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { GoDotFill } from "react-icons/go";
import AnimatedAccordionPage from "./Accordion/AnimatedAccordionPage";

const Pricing = () => {
  return (
    <div>
      <BreadCrumb title="Pricing" />
      {/* Pricing  */}
      <div className="dark:bg-normalBlack py-20 2xl:py-[120px]">
        <div className="Container">
          <div
            className="text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px] mx-auto px-5 Container"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Section logo */}
            <div className="flex items-center justify-center space-x-2">
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
              <img
                src="/images/inner/inner-logo.png"
                alt="room_section_logo"
                className="w-[50px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[42px] 2xl:leading-[52px] text-lightBlack dark:text-white mt-[10px] mb-[14px] font-Garamond font-semibold uppercase">
              EXTRA PRICING PLANS
            </h1>
            <p className="font-Lora leading-7 lg:leading-[26px] text-lightGray font-normal text-sm sm:text-base">
              Proactively morph optimal infomediaries rather than accurate
              expertise. Intrinsicly progressive resources rather than
              resource-leveling
            </p>
          </div>
          {/* Pricing Plan */}
          <div className="mt-14 2xl:mt-[60px]">
            <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[30px]">
              {/* Pricing one */}
              <div
                className="border-[1px] border-lightGray dark:border-gray group hover:border-khaki dark:hover:border-khaki"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/inner/pricing-1.jpg"
                  alt=""
                  className="relative w-full"
                />

                <div className="px-5 pb-5 2xl:px-[30px] 2xl:pb-[30px]">
                  <div className="bg-lightBlack px-5 2xl:px-[30px] py-3 lg:py-4 relative bottom-[30px] z-[1] gallery-effect before:bg-khaki before:z-[-1] before:group-hover:w-full before:group-hover:left-0">
                    <h4 className="text-lg sm:text-xl md:text-2xl xl:text-[26px] text-white font-Garamond font-semibold ">
                      Room Services
                    </h4>
                  </div>
                  <div className="flex items-center pb-5 ">
                    <span className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-[50px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[55px]  text-khaki font-bold font-Garamond">
                      $12
                    </span>
                    <span className="text-sm sm:text-base lg:text-lg leading-[26px] text-gray dark:text-lightGray font-Lora font-normal ">
                      / Daily
                    </span>
                  </div>
                  <hr className="text-lightGray dark:text-gray " />
                  <div className="py-5 2xl:pb-[30px]">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <GoDotFill className="w-[9px] h-[9px] text-khaki" />
                        <p className="text-sm sm:text-base lg:text-lg leading-[26px] text-gray dark:text-lightGray font-Lora font-normal ml-2">
                          Bed and floor Celaning
                        </p>
                      </li>
                      <li className="flex items-center">
                        <GoDotFill className="w-[9px] h-[9px] text-khaki" />
                        <p className="text-sm sm:text-base lg:text-lg leading-[26px] text-gray dark:text-lightGray font-Lora font-normal ml-2">
                          Orci miss natoque vasa ince
                        </p>
                      </li>
                      <li className="flex items-center">
                        <GoDotFill className="w-[9px] h-[9px] text-khaki" />
                        <p className="text-sm sm:text-base lg:text-lg leading-[26px] text-gray dark:text-lightGray font-Lora font-normal ml-2">
                          Clean sorem ipsum morbin
                        </p>
                      </li>
                      <li className="flex items-center">
                        <GoDotFill className="w-[9px] h-[9px] text-khaki" />
                        <p className="text-sm sm:text-base lg:text-lg leading-[26px] text-gray dark:text-lightGray font-Lora font-normal ml-2">
                          Wash & Clean equipment
                        </p>
                      </li>
                    </ul>
                  </div>
                  <button className="btn-items dark:btn-secondary ">
                    PURCHASES NOW
                  </button>
                </div>
              </div>
              {/* Pricing two */}
              <div
                className="border-[1px] border-lightGray dark:border-gray group hover:border-khaki dark:hover:border-khaki"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/inner/pricing-1.jpg"
                  alt=""
                  className="relative w-full"
                />

                <div className="px-5 pb-5 2xl:px-[30px] 2xl:pb-[30px]">
                  <div className="bg-lightBlack px-5 2xl:px-[30px] py-3 lg:py-4 relative bottom-[30px] z-[1] gallery-effect before:bg-khaki before:z-[-1] before:group-hover:w-full before:group-hover:left-0">
                    <h4 className="text-lg sm:text-xl md:text-2xl xl:text-[26px] text-white font-Garamond font-semibold ">
                      Room Services
                    </h4>
                  </div>
                  <div className="flex items-center pb-5 ">
                    <span className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-[50px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[55px]  text-khaki font-bold font-Garamond">
                      $12
                    </span>
                    <span className="text-sm sm:text-base lg:text-lg leading-[26px] text-gray dark:text-lightGray font-Lora font-normal ">
                      / Daily
                    </span>
                  </div>
                  <hr className="text-lightGray dark:text-gray " />
                  <div className="py-5 2xl:pb-[30px]">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <GoDotFill className="w-[9px] h-[9px] text-khaki" />
                        <p className="text-sm sm:text-base lg:text-lg leading-[26px] text-gray dark:text-lightGray font-Lora font-normal ml-2">
                          Bed and floor Celaning
                        </p>
                      </li>
                      <li className="flex items-center">
                        <GoDotFill className="w-[9px] h-[9px] text-khaki" />
                        <p className="text-sm sm:text-base lg:text-lg leading-[26px] text-gray dark:text-lightGray font-Lora font-normal ml-2">
                          Orci miss natoque vasa ince
                        </p>
                      </li>
                      <li className="flex items-center">
                        <GoDotFill className="w-[9px] h-[9px] text-khaki" />
                        <p className="text-sm sm:text-base lg:text-lg leading-[26px] text-gray dark:text-lightGray font-Lora font-normal ml-2">
                          Clean sorem ipsum morbin
                        </p>
                      </li>
                      <li className="flex items-center">
                        <GoDotFill className="w-[9px] h-[9px] text-khaki" />
                        <p className="text-sm sm:text-base lg:text-lg leading-[26px] text-gray dark:text-lightGray font-Lora font-normal ml-2">
                          Wash & Clean equipment
                        </p>
                      </li>
                    </ul>
                  </div>
                  <button className="btn-items dark:btn-secondary">
                    PURCHASES NOW
                  </button>
                </div>
              </div>
              {/* Pricing three */}
              <div
                className="border-[1px] border-lightGray dark:border-gray group hover:border-khaki dark:hover:border-khaki"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/inner/pricing-1.jpg"
                  alt=""
                  className="relative w-full"
                />

                <div className="px-5 pb-5 2xl:px-[30px] 2xl:pb-[30px]">
                  <div className="bg-lightBlack px-5 2xl:px-[30px] py-3 lg:py-4 relative bottom-[30px] z-[1] gallery-effect before:bg-khaki before:z-[-1] before:group-hover:w-full before:group-hover:left-0">
                    <h4 className="text-lg sm:text-xl md:text-2xl xl:text-[26px] text-white font-Garamond font-semibold ">
                      Room Services
                    </h4>
                  </div>
                  <div className="flex items-center pb-5 ">
                    <span className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-[50px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[55px]  text-khaki font-bold font-Garamond">
                      $12
                    </span>
                    <span className="text-sm sm:text-base lg:text-lg leading-[26px] text-gray dark:text-lightGray font-Lora font-normal ">
                      / Daily
                    </span>
                  </div>
                  <hr className="text-lightGray dark:text-gray " />
                  <div className="py-5 2xl:pb-[30px]">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <GoDotFill className="w-[9px] h-[9px] text-khaki" />
                        <p className="text-sm sm:text-base lg:text-lg leading-[26px] text-gray dark:text-lightGray font-Lora font-normal ml-2">
                          Bed and floor Celaning
                        </p>
                      </li>
                      <li className="flex items-center">
                        <GoDotFill className="w-[9px] h-[9px] text-khaki" />
                        <p className="text-sm sm:text-base lg:text-lg leading-[26px] text-gray dark:text-lightGray font-Lora font-normal ml-2">
                          Orci miss natoque vasa ince
                        </p>
                      </li>
                      <li className="flex items-center">
                        <GoDotFill className="w-[9px] h-[9px] text-khaki" />
                        <p className="text-sm sm:text-base lg:text-lg leading-[26px] text-gray dark:text-lightGray font-Lora font-normal ml-2">
                          Clean sorem ipsum morbin
                        </p>
                      </li>
                      <li className="flex items-center">
                        <GoDotFill className="w-[9px] h-[9px] text-khaki" />
                        <p className="text-sm sm:text-base lg:text-lg leading-[26px] text-gray dark:text-lightGray font-Lora font-normal ml-2">
                          Wash & Clean equipment
                        </p>
                      </li>
                    </ul>
                  </div>
                  <button className="btn-items dark:btn-secondary">
                    PURCHASES NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing  */}
      <div className="bg-whiteSmoke dark:bg-lightBlack py-20 2xl:py-[120px]">
        <div className="Container">
          <div
            className="text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px] mx-auto px-5 Container"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Section logo */}
            <div className="flex items-center justify-center space-x-2">
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
              <img
                src="/images/inner/inner-logo.png"
                alt="room_section_logo"
                className="w-[50px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[42px] 2xl:leading-[52px] text-lightBlack dark:text-white mt-[10px] mb-[14px] font-Garamond font-semibold uppercase">
              FREEQUENTLY ASKED QESTION
            </h1>
          </div>
          {/* accordion Plan */}
          <div className="mt-14 2xl:mt-[60px]">
            <div className="">
              <AnimatedAccordionPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
