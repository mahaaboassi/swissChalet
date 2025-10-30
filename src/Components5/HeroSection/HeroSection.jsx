import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";
import { Link } from "react-router-dom";

// slider function
function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

const HeroSection = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider relative">
        {/* slider-1 */}
        <div className="keen-slider__slide number-slide1 ">
          <div
            className="bg-[url('/images/home-5/hero-1.jpg')] bg-center  bg-no-repeat bg-cover h-[700px] md:h-[800px] xl:h-[850px] 3xl:h-[950px] grid items-center justify-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className=" text-center mx-auto">
              <p className="text-khaki text-sm sm:text-base 2xl:text-lg leading-[26px] font-normal font-Lora my-[10px] px-5 sm:px-6 md:px-7">
                Welcome to Kojistay, a luxury apartment hotel in Ulipur
              </p>

              <h1 className="text-white text-[28px] sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[75px] 3xl:text-[90px] leading-10 lg:leading-[55px] xl:leading-[66px] font-semibold font-Garamond  2xl:leading-[100px] pb-2 ">
                Modern Living Apartment
              </h1>
              <h1 className="text-white text-[28px] sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[75px] 3xl:text-[90px] sm:leading-10 lg:leading-[55px] xl:leading-[66px] font-semibold font-Garamond  2xl:leading-[100px]  mb-6 md:mb-[30px] pb-6 ">
                In The Complex
              </h1>

              {/* time and date */}
              <div className="Container">
                {/* min-screen when 320px to 1399px then this code will be executed.when screen-size will be -1400px this code will be hidden. */}
                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 items-center justify-center 2xl:hidden space-y-2 lg:space-y-0 gap-2 sm:gap-5">
                  <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2 border-b-2 border-khaki h-[40px]">
                    <p className="text-sm lg:text-base">Check In:</p>
                    <input
                      type="date"
                      name=""
                      id="date001"
                      className="bg-transparent z-[1] ml-2 sm:ml-0 2xl:ml-5  border-none outline-none focus:ring-0"
                    />
                  </div>
                  <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center border-khaki border-b-2 h-[40px]">
                    <p className="text-sm sm:text-[13px] md:text-sm lg:text-base xl:text-[15px]">
                      Check Out:
                    </p>
                    <input
                      type="date"
                      name=""
                      id="date002"
                      className="bg-transparent z-[1] ml-2 sm:ml-0 2xl:ml-5  border-none outline-none focus:ring-0"
                    />
                  </div>
                  {/* children */}
                  <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2 border-khaki border-b-2 h-[40px]">
                    <label className="text-sm lg:text-base ">Children:</label>
                    <select className="w-full  md:h-14 lg:h-16 border-none  outline-none  bg-transparent focus:ring-0  z-[1]">
                      <option
                        className="bg-khaki text-white focus:text-white px-3 py-3"
                        value=""
                        disabled
                      >
                        Select Number of Children
                      </option>
                      <option
                        className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                        value="option1"
                      >
                        Children 1
                      </option>
                      <option
                        className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                        value="option2"
                      >
                        Children 2
                      </option>
                      <option
                        className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                        value="option3"
                      >
                        Children 3
                      </option>
                      <option
                        className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                        value="option4"
                      >
                        Children 4
                      </option>
                    </select>
                  </div>
                  <button className="text-white hover-animBg after:rounded-none text-sm sm:text-base tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora  pl-2 bg-transparent cursor-pointer border border-khaki py-2 xl:py-1 z-[1]">
                    <Link to="/home5/find_room " className="block">
                      Get In Touch
                    </Link>
                  </button>
                </div>
                {/* min-screen when upto 1400px then this code will be executed. under screen-1400px this code will be hidden. */}
                <div className="hidden 2xl:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative before:absolute before:w-full before:h-full  text-khaki before:border after:w-[101%] lg:after:h-[51px] after:absolute lg:after:border after:top-[6px] after:right-[-7px] ">
                  <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2  ">
                    <p className="">Check In Date:</p>
                    <input
                      type="date"
                      name=""
                      id="date001"
                      className="bg-transparent z-[1] ml-2 md:ml-3 lg:ml-4 2xl:ml-5  border-none outline-none focus:ring-0"
                    />
                  </div>
                  <div className="text-white  tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2  border border-t-0 border-b-0 border-khaki">
                    <p className="text-sm sm:text-[13px]">Check Out Date:</p>
                    <input
                      type="date"
                      name=""
                      id="date002"
                      className="bg-transparent z-[1] ml-2 md:ml-3 lg:ml-4 2xl:ml-5  border-none outline-none focus:ring-0"
                    />
                  </div>
                  {/* children */}
                  <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2 border border-t-0 border-b-0 border-l-0 border-khaki">
                    <label className=" ">CHILDREN:</label>
                    <select className="w-full  md:h-14 lg:h-16 border-none  outline-none  bg-transparent focus:ring-0  z-[1]">
                      <option
                        className="bg-khaki text-white focus:text-white px-3 py-3"
                        value=""
                        disabled
                      >
                        Select Number of Children
                      </option>
                      <option
                        className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                        value="option1"
                      >
                        Children 1
                      </option>
                      <option
                        className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                        value="option2"
                      >
                        Children 2
                      </option>
                      <option
                        className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                        value="option3"
                      >
                        Children 3
                      </option>
                      <option
                        className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                        value="option4"
                      >
                        Children 4
                      </option>
                    </select>
                  </div>

                  <button className="text-white hover-animBg after:rounded-none text-sm sm:text-base tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora  pl-2 bg-transparent cursor-pointer border-khaki z-[1]">
                    <Link to="/home5/find_room " className="block">
                      Get In Touch
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slider-2 */}
        <div className="keen-slider__slide number-slide1 bg-[url('/images/home-5/hero-2.jpg')] bg-center  bg-no-repeat bg-cover h-[700px] md:h-[800px] xl:h-[850px] 3xl:h-[950px] grid items-center justify-center">
          <div className=" text-center mx-auto">
            <p className="text-khaki text-sm sm:text-base 2xl:text-lg leading-[26px] font-normal font-Lora my-2">
              Welcome to Kojistay, a luxury apartment hotel in Ulipur
            </p>

            <h1 className="text-white  text-4xl lg:text-5xl xl:text-6xl 2xl:text-[75px] 3xl:text-[90px] leading-10 lg:leading-[55px] xl:leading-[66px] font-semibold font-Garamond  2xl:leading-[100px] pb-2 ">
              Modern Living Apartment
            </h1>
            <h1 className="text-white  text-4xl lg:text-5xl xl:text-6xl 2xl:text-[75px] 3xl:text-[90px] leading-10 lg:leading-[55px] xl:leading-[66px] font-semibold font-Garamond  2xl:leading-[100px]  mb-6 md:mb-[30px] pb-6 ">
              In The Complex
            </h1>

            {/* time and date */}
            <div className="Container">
              {/* min-screen when 320px to 1399px then this code will be executed.when screen-size will be -1400px this code will be hidden. */}
              <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 items-center justify-center 2xl:hidden space-y-2 lg:space-y-0 gap-2 sm:gap-5">
                <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2 border-b-2 border-khaki h-[40px]">
                  <p className="text-sm lg:text-base">Check In:</p>
                  <input
                    type="date"
                    name=""
                    id="date001"
                    className="bg-transparent z-[1] ml-2 sm:ml-0 2xl:ml-5  border-none outline-none focus:ring-0"
                  />
                </div>
                <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center border-khaki border-b-2 h-[40px]">
                  <p className="text-sm sm:text-[13px] md:text-sm lg:text-base xl:text-[15px]">
                    Check Out:
                  </p>
                  <input
                    type="date"
                    name=""
                    id="date002"
                    className="bg-transparent z-[1] ml-2 sm:ml-0 2xl:ml-5  border-none outline-none focus:ring-0"
                  />
                </div>
                {/* children */}
                <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2 border-khaki border-b-2 h-[40px]">
                  <label className="text-sm lg:text-base ">Children:</label>
                  <select className="w-full  md:h-14 lg:h-16 border-none  outline-none  bg-transparent focus:ring-0  z-[1]">
                    <option
                      className="bg-khaki text-white focus:text-white px-3 py-3"
                      value=""
                      disabled
                    >
                      Select Number of Children
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option1"
                    >
                      Children 1
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option2"
                    >
                      Children 2
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option3"
                    >
                      Children 3
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option4"
                    >
                      Children 4
                    </option>
                  </select>
                </div>
                <button className="text-white hover-animBg after:rounded-none text-sm sm:text-base tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora  pl-2 bg-transparent cursor-pointer border border-khaki py-2 xl:py-1 z-[1]">
                  <Link to="/home5/find_room " className="block">
                    Get In Touch
                  </Link>
                </button>
              </div>
              {/* min-screen when upto 1400px then this code will be executed. under screen-1400px this code will be hidden. */}
              <div className="hidden 2xl:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative before:absolute before:w-full before:h-full  text-khaki before:border after:w-[101%] lg:after:h-[51px] after:absolute lg:after:border after:top-[6px] after:right-[-7px] ">
                <div className="text-white  tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2 text-sm sm:text-[13px] ">
                  <p className="">Check In Date:</p>
                  <input
                    type="date"
                    name=""
                    id="date001"
                    className="bg-transparent z-[1] ml-2 md:ml-3 lg:ml-4 2xl:ml-5  border-none outline-none focus:ring-0"
                  />
                </div>
                <div className="text-white  tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2 text-sm sm:text-[13px] border border-t-0 border-b-0 border-khaki ">
                  <p className="text-sm sm:text-[13px]">Check Out Date:</p>
                  <input
                    type="date"
                    name=""
                    id="date002"
                    className="bg-transparent z-[1] ml-2 border-none outline-none focus:ring-0"
                  />
                </div>
                {/* children */}
                <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2 border border-t-0 border-b-0 border-l-0 border-khaki">
                  <label className=" ">CHILDREN:</label>
                  <select className="w-full  md:h-14 lg:h-16 border-none  outline-none  bg-transparent focus:ring-0  z-[1]">
                    <option
                      className="bg-khaki text-white focus:text-white px-3 py-3"
                      value=""
                      disabled
                    >
                      Select Number of Children
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option1"
                    >
                      Children 1
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option2"
                    >
                      Children 2
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option3"
                    >
                      Children 3
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option4"
                    >
                      Children 4
                    </option>
                  </select>
                </div>
                <button className="text-white hover-animBg after:rounded-none text-sm sm:text-base tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora  pl-2 bg-transparent cursor-pointer border-khaki z-[1]">
                  <Link to="/home5/find_room " className="block">
                    Get In Touch
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* slider-3 */}
        <div className="keen-slider__slide number-slide1 bg-[url('/images/home-5/hero-3.jpg')] bg-center  bg-no-repeat bg-cover h-[700px] md:h-[800px] xl:h-[850px] 3xl:h-[950px] grid items-center justify-center">
          <div className=" text-center mx-auto">
            <p className="text-khaki text-sm sm:text-base 2xl:text-lg leading-[26px] font-normal font-Lora my-2">
              Welcome to Kojistay, a luxury apartment hotel in Ulipur
            </p>

            <h1 className="text-white  text-4xl lg:text-5xl xl:text-6xl 2xl:text-[75px] 3xl:text-[90px] leading-10 lg:leading-[55px] xl:leading-[66px] font-semibold font-Garamond  2xl:leading-[100px] pb-2 ">
              Modern Swimming Pool
            </h1>
            <h1 className="text-white  text-4xl lg:text-5xl xl:text-6xl 2xl:text-[75px] 3xl:text-[90px] leading-10 lg:leading-[55px] xl:leading-[66px] font-semibold font-Garamond  2xl:leading-[100px]  mb-6 md:mb-[30px] pb-6 ">
              In The Complex
            </h1>

            {/* time and date */}
            <div className="Container">
              {/* min-screen when 320px to 1399px then this code will be executed.when screen-size will be -1400px this code will be hidden. */}
              <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 items-center justify-center 2xl:hidden space-y-2 lg:space-y-0 gap-2 sm:gap-5">
                <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2 border-b-2 border-khaki h-[40px]">
                  <p className="text-sm lg:text-base">Check In:</p>
                  <input
                    type="date"
                    name=""
                    id="date001"
                    className="bg-transparent z-[1] ml-2 sm:ml-0 2xl:ml-5  border-none outline-none focus:ring-0"
                  />
                </div>
                <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center border-khaki border-b-2 h-[40px]">
                  <p className="text-sm sm:text-[13px] md:text-sm lg:text-base xl:text-[15px]">
                    Check Out:
                  </p>
                  <input
                    type="date"
                    name=""
                    id="date002"
                    className="bg-transparent z-[1] ml-2 sm:ml-0 2xl:ml-5  border-none outline-none focus:ring-0"
                  />
                </div>
                {/* children */}
                <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2 border-khaki border-b-2 h-[40px]">
                  <label className="text-sm lg:text-base ">Children:</label>
                  <select className="w-full  md:h-14 lg:h-16 border-none  outline-none  bg-transparent focus:ring-0  z-[1]">
                    <option
                      className="bg-khaki text-white focus:text-white px-3 py-3"
                      value=""
                      disabled
                    >
                      Select Number of Children
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option1"
                    >
                      Children 1
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option2"
                    >
                      Children 2
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option3"
                    >
                      Children 3
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option4"
                    >
                      Children 4
                    </option>
                  </select>
                </div>
                <button className="text-white hover-animBg after:rounded-none text-sm sm:text-base tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora  pl-2 bg-transparent cursor-pointer border border-khaki py-2 xl:py-1 z-[1]">
                  <Link to="/home5/find_room " className="block">
                    Get In Touch
                  </Link>
                </button>
              </div>
              {/* min-screen when upto 1400px then this code will be executed. under screen-1400px this code will be hidden. */}
              <div className="hidden 2xl:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative before:absolute before:w-full before:h-full  text-khaki before:border after:w-[101%] lg:after:h-[51px] after:absolute lg:after:border after:top-[6px] after:right-[-7px] ">
                <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2  ">
                  <p className="">Check In Date:</p>
                  <input
                    type="date"
                    name=""
                    id="date001"
                    className="bg-transparent z-[1] ml-2 md:ml-3 lg:ml-4 2xl:ml-5  border-none outline-none focus:ring-0"
                  />
                </div>
                <div className="text-white text-sm sm:text-[13px] tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2  border border-t-0 border-b-0 border-khaki">
                  <p className="text-sm sm:text-[13px]">Check Out Date:</p>
                  <input
                    type="date"
                    name=""
                    id="date002"
                    className="bg-transparent z-[1] ml-2 md:ml-3 lg:ml-4 2xl:ml-5  border-none outline-none focus:ring-0"
                  />
                </div>
                {/* children */}
                <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2 border border-t-0 border-b-0 border-l-0 border-khaki">
                  <label className=" ">CHILDREN:</label>
                  <select className="w-full  md:h-14 lg:h-16 border-none  outline-none  bg-transparent focus:ring-0  z-[1]">
                    <option
                      className="bg-khaki text-white focus:text-white px-3 py-3"
                      value=""
                      disabled
                    >
                      Select Number of Children
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3 hover:bg-khaki"
                      value="option1"
                    >
                      Children 1
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3 hover:bg-khaki"
                      value="option2"
                    >
                      Children 2
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3 hover:bg-khaki"
                      value="option3"
                    >
                      Children 3
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3 hover:bg-khaki"
                      value="option4"
                    >
                      Children 4
                    </option>
                  </select>
                </div>
                <button className="text-white hover-animBg after:rounded-none text-sm sm:text-base tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora  pl-2 bg-transparent cursor-pointer border-khaki z-[1]">
                  <Link to="/home5/find_room " className="block">
                    Get In Touch
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* pointer toogle btn */}

      <div className="absolute top-[60%] xl:top-1/2 left-[10px] sm:left-5  lg:left-[80px] text-white text-left hidden xl:block">
        <div ref={thumbnailRef} className="keen-slider thumbnail control ">
          <div className="keen-slider__slide number-slide1 control-btn ">
            01
          </div>
          <div className="keen-slider__slide number-slide2 control-btn">02</div>
          <div className="keen-slider__slide number-slide2 control-btn ">
            03
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
