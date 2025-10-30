import { Link } from "react-router-dom";
import { spaces } from "../../data";

const ExtraService = () => {
  return (
    <section className="bg-[#ededed] dark:bg-normalBlack py-20 2xl:py-[120px]">
      <div className="Container">
        {/* section header */}
        <div
          className="flex md:flex-row flex-col items-center justify-between space-y-1 md:space-y-0"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <p className="text-base leading-7 md:leading-10 lg:leading-[40px] 3xl:leading-[66px] text-khaki font-normal font-Lora text-center md:text-left">
              Best Prices
            </p>
            <h3
              className="text-lightBlack dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-[45px] leading-7 md:leading-9
           font-semibold font-Garamond"
            >
              Our Spaces
            </h3>
          </div>
          <div>
            <p className="text-[13px] md:text-base leading-[26px] text-gray dark:text-white font-normal font-Lora text-center w-full md:w-[250px] lg:w-[350px] xl:w-[465px] 2xl:w-[560px] p-5 md:p-0">
              Enjoy a restful night’s sleep without compromising on quality – the perfect choice for travelers seeking comfort at the best prices.
            </p>
          </div>
          <Link to={"/spaces"}>
            <button className="btn-items text-sm md:text-base ">
              VIEW ALL Spaces
            </button>
          </Link>
        </div>
        {/* section content */}
        <div className="pt-10 xl:pt-[60px]">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[30px] ">
            
            <div
              className="extra-service bg-[url('/images/rose_room.jpg')] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={spaces[0].images[0]}
                className="opacity-0 w-full h-[450px] 2xl:h-[500px]"
                alt=""
              />
              <div className="px-[25px] py-10 absolute bottom-[-300px] lg:bottom-[-330px] 3xl:bottom-[-300px] group-hover:bottom-0 left-[18px] right-[18px] my-[18px] transition-all duration-500">
                <h3 className="text-2xl md:text-[26px] lg:text-[30] xl:text-[34px] leading-5 md:leading-[26px] xl:leading-[42px] text-white font-Garamond font-semibold text-left">
                  {spaces[0].name}
                </h3>
                <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] font-Lora font-normal text-ellipsis text-white mt-[19px] mb-6 lg:mb-[30px] text-left">
                  {spaces[0].bref}
                </p>
                <div className="float-left">
                  <Link to={`/space_details/${spaces[0].id}`}>
                    <button className="btn-primary">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
            {/* service-2 */}
            <div
              className="extra-service bg-[url('/images/timber_room.jpg')] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={spaces[1].images[0]}
                className="opacity-0 w-full h-[450px] 2xl:h-[500px]"
                alt=""
              />
              <div className="px-[25px] py-10 absolute bottom-[-300px] lg:bottom-[-330px] 3xl:bottom-[-300px] group-hover:bottom-0 left-[18px] right-[18px] my-[18px] transition-all duration-500">
                <h3 className="text-2xl md:text-[26px] lg:text-[30] xl:text-[34px] leading-5 md:leading-[26px] xl:leading-[42px] text-white font-Garamond font-semibold text-left">
                  {spaces[1].name}
                </h3>
                <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] font-Lora font-normal text-ellipsis text-white mt-[19px] mb-6 lg:mb-[30px] text-left">
                  {spaces[1].bref}
                </p>
                <div className="float-left">
                  <Link to={`/space_details/${spaces[1].id}`}>
                    <button className="btn-primary">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
            {/* service -3 */}
            <div
              className="extra-service bg-[url('/images/room.jpg')] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={spaces[2].images[0]}
                className="opacity-0 w-full h-[450px] 2xl:h-[500px]"
                alt=""
              />
              <div className="px-[25px] py-10 absolute bottom-[-300px] lg:bottom-[-330px] 3xl:bottom-[-300px] group-hover:bottom-0 left-[18px] right-[18px] my-[18px] transition-all duration-500">
                <h3 className="text-2xl md:text-[26px] lg:text-[30] xl:text-[34px] leading-5 md:leading-[26px] xl:leading-[42px] text-white font-Garamond font-semibold text-left">
                  {spaces[2].name}
                </h3>
                <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] font-Lora font-normal text-ellipsis text-white mt-[19px] mb-6 lg:mb-[30px] text-left">
                  {spaces[2].bref}
                </p>
                <div className="float-left">
                  <Link to={`/space_details/${spaces[2].id}`}>
                    <button className="btn-primary">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd grid */}
          <div className="grid items-center grid-cols-1 md:grid-cols-2  gap-[20px] lg:gap-[30px] mt-[30px]">
            {/* service- 04 */}
            <div
              className="extra-service bg-[url('/images/apple_room.jpg')] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={spaces[3].images[0]}
                className="opacity-0 w-full h-[450px] 2xl:h-[500px]"
                alt=""
              />
              <div className="px-[25px] py-10 absolute bottom-[-300px] lg:bottom-[-330px] 3xl:bottom-[-300px] group-hover:bottom-0 left-[18px] right-[18px] my-[18px] transition-all duration-500">
                <h3 className="text-2xl md:text-[26px] lg:text-[30] xl:text-[34px] leading-5 md:leading-[26px] xl:leading-[42px] text-white font-Garamond font-semibold text-left">
                  {spaces[3].name}
                </h3>
                <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] font-Lora font-normal text-ellipsis text-white mt-[19px] mb-6 lg:mb-[30px] text-left">
                  {spaces[3].bref}
                </p>
                <div className="float-left">
                  <Link to={`/space_details/${spaces[3].id}`}>
                    <button className="btn-primary">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
            {/* service- 05 */}
            <div
              className="extra-service bg-[url('/images/banner_1.jpg')] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={spaces[4].images[0]}
                className="opacity-0 w-full h-[450px] 2xl:h-[500px]"
                alt=""
              />
              <div className="px-[25px] py-10 absolute bottom-[-300px] lg:bottom-[-330px] 3xl:bottom-[-300px] group-hover:bottom-0 left-[18px] right-[18px] my-[18px] transition-all duration-500">
                <h3 className="text-2xl md:text-[26px] lg:text-[30] xl:text-[34px] leading-5 md:leading-[26px] xl:leading-[42px] text-white font-Garamond font-semibold text-left">
                  {spaces[4].name}
                </h3>
                <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] font-Lora font-normal text-ellipsis text-white mt-[19px] mb-6 lg:mb-[30px] text-left">
                  {spaces[4].bref}
                </p>
                <div className="float-left">
                  <Link to={`/space_details/${spaces[4].id}`}>
                    <button className="btn-primary">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraService;
