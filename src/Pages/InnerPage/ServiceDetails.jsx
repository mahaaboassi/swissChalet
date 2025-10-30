import { BsCheck2 } from "react-icons/bs";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { useEffect, useState } from "react";

const ServiceDetails = () => {
  const [menu, setMenu] = useState([]);
  const [showItem, setShowItem] = useState([]);
  useEffect(() => {
    fetch("/food.menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data), setShowItem(data);
      });
  }, []);

  return (
    <section className="">
      <BreadCrumb title="Service Details" />

      {/* Service Details content */}
      <div className="py-20 2xl:py-[120px] dark:bg-lightBlack">
        <div className="Container">
          {/* image and Food list */}
          <div className="grid items-center grid-cols-6 md:grid-cols-7 lg:grid-cols-6 gap-5 ">
            <div
              className="col-span-6 md:col-span-4"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img src="/images/inner/service-details.jpg" alt="" />
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-2">
              <div className=" bg-whiteSmoke dark:bg-normalBlack px-7 py-8 md:px-5 md:py-10 lg:px-6 lg:py-11 2xl:px-10 2xl:py-[50px]  grid-flow-row-dense">
                <h4 className="font-Garamond text-xl sm:text-[22px] md:text-2xl xl:text-3xl leading-7 md:leading-8 lg:leading-10 xl:leading-[50px] 2xl:leading-[60px] 3xl:leading-[70px] text-lightBlack dark:text-white font-semibold mb-7">
                  Hours
                </h4>
                <div
                  className="grid items-center gap-[25px] "
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                >
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6 ">
                    <p className="text-sm md:text-[13px] xl:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      Breakfast -
                      <span className="text-khaki"> 7.00 AM to 10.30 AM</span>
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[13px] xl:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      Lunch -{" "}
                      <span className="text-khaki"> 1.00 PM to 2.30 PM</span>
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[13px] xl:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      Supper -{" "}
                      <span className="text-khaki"> 6.00 PM to 7.00 PM</span>{" "}
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[13px] xl:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      Dinner -{" "}
                      <span className="text-khaki"> 8.30 PM to 10.00 PM</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Restaurants center */}
          <div className="pt-5 lg:pt-[35px]  pr-3">
            <p className="text-base font-Lora text-khaki">FOODS</p>
            <h2 className="py-2 sm:py-3 md:py-4 lg:py-[19px] 2xl:py-[25px] font-Garamond text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] 3xl:text-[40px] leading-6 lg:leading-[26px]  text-lightBlack dark:text-white font-semibold">
              The Restaurant Center
            </h2>
            <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora">
              Rapidiously myocardinate cross-platform intellectual capital after
              marketing model. Appropriately create interactive infrastructures
              after maintainable are Holisticly facilitate stand-alone inframe
              extend state of the art benefits via web-enabled value. Completely
              fabricate extensible infomediaries rather than reliable
              e-services. Dramatically whiteboard alternative Conveniently
              fashion pandemic potentialities for team driven technologies.
              Proactively orchestrate robust systems rather than user-centric
              vortals. Distinctively seize top-line e-commerce with premier
            </p>

            {/* Restaurant Rules */}
            <div
              className="py-10 lg:py-[60px]"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h2
                className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
                font-Garamond text-[22px] sm:text-2xl md:text-3xl 2xl:text-[32px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold"
              >
                Restaurant Rules
              </h2>
              <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora">
                Professionally deliver fully researched scenarios with turnkey
                communities. Competently unleash empowered applications without
                seamless data. Uniquely under quality outsourcing before
                transparent relationships. Efficiently enhance diverse
                relationships whereas leveraged leverage existing just in time
                architectures before economically sound systems. Conveniently
                administrate
              </p>
            </div>
            {/* Dress Code Rules */}
            <div
              className="pb-10 lg:pb-[60px]"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h2
                className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
                font-Garamond text-[22px] sm:text-2xl md:text-3xl 2xl:text-[32px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold"
              >
                Dress Code
              </h2>
              <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora">
                Professionally deliver fully researched scenarios with turnkey
                communities competently
              </p>
              <ul className="space-y-2 lg:space-y-3 mt-5 lg:mt-[30px]">
                <li className="flex items-center">
                  <BsCheck2 size={16} className="text-khaki mr-2" />
                  <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Quickly generate bricks-and-clicks
                  </span>
                </li>
                <li className="flex items-center">
                  <BsCheck2 size={16} className="text-khaki mr-2" />
                  <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Interactively cultivate visionary platforms
                  </span>
                </li>
                <li className="flex items-center">
                  <BsCheck2 size={16} className="text-khaki mr-2" />
                  <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Energistically envisioneer resource
                  </span>
                </li>
              </ul>
            </div>
            {/* Dress Code Rules */}
            <div className="" data-aos="zoom-in-up" data-aos-duration="1000">
              <h2
                className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
                font-Garamond text-[22px] sm:text-2xl md:text-3xl 2xl:text-[32px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold"
              >
                Terrace
              </h2>
              <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora">
                Open the drinks only maintain restaurent rules and regulations
                below
              </p>
              <ul className="space-y-2 lg:space-y-3 mt-5 lg:mt-[30px]">
                <li className="flex items-center">
                  <BsCheck2 size={16} className="text-khaki mr-2" />
                  <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Quickly generate bricks-and-clicks
                  </span>
                </li>
                <li className="flex items-center">
                  <BsCheck2 size={16} className="text-khaki mr-2" />
                  <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Interactively cultivate visionary platforms
                  </span>
                </li>
                <li className="flex items-center">
                  <BsCheck2 size={16} className="text-khaki mr-2" />
                  <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Energistically envisioneer resource
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* RESTAURANT FOOD MENU */}
      <div className="bg-whiteSmoke dark:bg-lightBlack py-20 2xl:py-[120px] ">
        <div className="Container">
          {/* food menu tab header */}
          <div
            className="text-center"
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
              RESTAURANT FOOD MENU
            </h1>
          </div>
          {/* food menu tab  */}
          <div className="mt-14 2xl:mt-[60px]">
            {/* Tab Control Button */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 sm:flex items-center justify-center gap-3"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <button
                className="px-5 lg:px-[26px] py-2 lg:py-[10px] bg-white dark:bg-normalBlack text-lightBlack dark:text-white rounded focus:bg-khaki focus:text-white dark:focus:bg-khaki dark:focus:text-white hover:ring-2 ring-khaki ring-offset-2 dark:ring-offset-lightBlack text-sm sm:text-[15px] font-Garamond font-medium leading-7 lg:leading-[38px]"
                onClick={() => {
                  let items = menu.filter(
                    (element) => element.category === "breakfast"
                  );
                  setShowItem(items);
                }}
              >
                BREAKFAST
              </button>
              <button
                className="px-5 lg:px-[26px] py-2 lg:py-[10px] bg-white dark:bg-normalBlack text-lightBlack dark:text-white rounded focus:bg-khaki focus:text-white dark:focus:bg-khaki dark:focus:text-white hover:ring-2 ring-khaki ring-offset-2 text-sm sm:text-[15px] font-Garamond font-medium leading-7 lg:leading-[38px] dark:ring-offset-lightBlack"
                onClick={() => {
                  let items = menu.filter(
                    (element) => element.category === "lunch"
                  );
                  setShowItem(items);
                }}
              >
                LUNCH
              </button>
              <button
                className="px-5 lg:px-[26px] py-2 lg:py-[10px] bg-white dark:bg-normalBlack text-lightBlack dark:text-white rounded focus:bg-khaki focus:text-white dark:focus:bg-khaki dark:focus:text-white hover:ring-2 ring-khaki ring-offset-2 text-sm sm:text-[15px] font-Garamond font-medium leading-7 lg:leading-[38px] dark:ring-offset-lightBlack"
                onClick={() => {
                  let items = menu.filter(
                    (element) => element.category === "supper"
                  );
                  setShowItem(items);
                }}
              >
                SUPPER
              </button>
              <button
                className="px-5 lg:px-[26px] py-2 lg:py-[10px] bg-white dark:bg-normalBlack text-lightBlack dark:text-white rounded focus:bg-khaki focus:text-white dark:focus:bg-khaki dark:focus:text-white hover:ring-2 ring-khaki ring-offset-2 text-sm sm:text-[15px] font-Garamond font-medium leading-7 lg:leading-[38px] dark:ring-offset-lightBlack"
                onClick={() => {
                  let items = menu.filter(
                    (element) => element.category === "dinner"
                  );
                  setShowItem(items);
                }}
              >
                DINNER
              </button>
            </div>
            {/* Tab Items. */}
            <div
              className="grid items-center justify-between grid-cols-1 lg:grid-cols-2 gap-5 2xl:gap-[30px] mt-5 md:mt-7 lg:mt-10 xl:mt-[45px]"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              {showItem.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-center bg-white dark:bg-normalBlack pl-5 py-5 hover:shadow-custom"
                  >
                    <img
                      src={item.image}
                      alt="food image"
                      className="w-[100px] h-[100px] sm:w-fit sm:h-fit rounded-2xl sm:rounded-none mb-5 sm:mb-0 "
                    />
                    <div className="px-5 md:px-6 2xl:px-[30px]">
                      <div className="flex items-center justify-between pb-4">
                        <h4 className="text-lg sm:text-xl xl:text-2xl 2xl:text-[26px] leading-[26px] md:leading-7 lg:leading-8 xl:leading-[34px] 2xl:leading-[38px] text-lightBlack dark:text-white font-Garamond font-medium">
                          {item.title}
                        </h4>
                        <h4 className="text-lg sm:text-xl md:text-2xl leading-[26px] md:leading-7 lg:leading-8 xl:leading-[34px] 2xl:leading-[38px] text-khaki font-Garamond font-medium">
                          $ {item.price}
                        </h4>
                      </div>
                      {/* bottom Border  */}
                      <div className="border-t-[1px] border-dashed border-lightGray dark:border-gray pb-4"></div>
                      <p className="text-gray dark:text-lightGray leading-6 font-normal font-Lora text-sm md:text-[15px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
