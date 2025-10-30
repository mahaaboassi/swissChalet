import { useState } from "react";
import { MdCloseFullscreen } from "react-icons/md";
import { LuSofa } from "react-icons/lu";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../../Components4/Testimonial/testimonials.css";
import { Link } from "react-router-dom";

const Rooms = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width:1000px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <section className="bg-normalBlack py-20 2xl:py-[120px] border">
      <div className="Container">
        <div className="w-full " data-aos="fade-up" data-aos-duration="1000">
          <div className="flex items-center">
            <div className="relative mr-[10px]">
              <hr className="w-10 h-[2px] bg-khaki text-khaki" />
              <span className="w-[8px] h-[8px] bg-khaki rounded-full absolute -top-[3px] animation-move"></span>
            </div>
            <p className="text-sm font-medium font-Lora leading-[26px] text-khaki">
              Best Rooms
            </p>
          </div>

          <h2
            className="text-white text-[22px] sm:text-3xl md:text-4xl xl:text-[38px] leading-7 md:leading-9 lg:leading-10 2xl:leading-[46px]
           font-bold font-Garamond mt-1 mb-5"
          >
            Sojourn in Our Best Rooms
          </h2>
          <p className="text-sm lg:text-base leading-[22px] sm:leading-[26px] text-lightGray font-normal font-Lora mb-5 xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-10">
            Located in Times Square, CozyStay Apartment Hotel Provide Peaceful{" "}
            <br /> Experience Professional Services Apartment.
          </p>
        </div>
        {/* <div className="mt-14 keen-slider p-6 " ref={sliderRef}></div> */}
        <div
          ref={sliderRef}
          className="keen-slider relative mt-14 2xl:mt-[60px]"
        >
          <div className="bg-lightBlack keen-slider__slide number-slide1 group">
            <div data-aos="fade-up" data-aos-duration="1000">
              {" "}
              <div className="relative">
                <img
                  src="/images/home-5/room-3.jpg"
                  alt="room_images_one"
                  className="w-full h-full"
                />
                <div className=" ml-[-280px] group-hover:ml-0 transition-all duration-500 inline-block bg-lightBlack absolute -bottom-0">
                  <div className="px-[30px] py-3 flex items-center ">
                    <div className="flex items-center">
                      <LuSofa className="w-[14px] h-[14px] text-white" />
                      <p className="text-white text-sm leading-6 font-normal font-Lora ml-[10px]">
                        Adults: 5
                      </p>
                    </div>
                    <div className="flex items-center ml-[26px]">
                      <MdCloseFullscreen className="w-[14px] h-[14px] text-white border" />
                      <p className="text-white text-sm leading-6 font-normal font-Lora ml-[10px]">
                        Size: 95ft3
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-5 py-7 xl:px-[30px] xl:py-[34px]">
                <h3 className="text-white  text-lg md:text-xl 2xl:text-[22px] leading-[30px] font-normal font-Lora mb-6">
                  <Link to="/home5/room">Single Room</Link>
                </h3>
                <p className="text-lightGray text-sm sm:text-base leading-[26px] font-normal font-Lora">
                  Located Square, The CozyStay Apartment Private Reteat in The
                  Heart of Services In Professional Services.
                </p>

                <div className="flex items-center justify-between mt-10 mb-2">
                  <p className="text-Lora text-[15px] sm:text-[18px] leading-6 font-normal text-white">
                    <span className="text-khaki font-bold ">$49</span> Per Night
                  </p>
                  <Link to={"/find_room"}>
                    <button className="btn-primary1">BOOK NOW</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Slider -2 */}
          <div className="bg-lightBlack keen-slider__slide number-slide1 group">
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="relative">
                <img
                  src="/images/home-5/room-5.jpg"
                  alt="room_images_one"
                  className="w-full h-full"
                />
                <div className="ml-[-280px] group-hover:ml-0 transition-all duration-500 inline-block bg-lightBlack absolute -bottom-0">
                  <div className="px-[30px] py-3 flex items-center ">
                    <div className="flex items-center">
                      <LuSofa className="w-[14px] h-[14px] text-white" />
                      <p className="text-white text-sm leading-6 font-normal font-Lora ml-[10px]">
                        Adults: 5
                      </p>
                    </div>
                    <div className="flex items-center ml-[26px]">
                      <MdCloseFullscreen className="w-[14px] h-[14px] text-white border" />
                      <p className="text-white text-sm leading-6 font-normal font-Lora ml-[10px]">
                        Size: 95ft3
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-5 py-7 xl:px-[30px] xl:py-[34px]">
                <h3 className="text-white  text-lg md:text-xl 2xl:text-[22px] leading-[30px] font-normal font-Lora mb-6">
                  <Link to="/home5/room">Double Room</Link>
                </h3>
                <p className="text-lightGray text-sm sm:text-base leading-[26px] font-normal font-Lora">
                  Located Square, The CozyStay Apartment Private Reteat in The
                  Heart of Services In Professional Services.
                </p>

                <div className="flex items-center justify-between mt-10 mb-2">
                  <p className="text-Lora text-[15px] sm:text-[18px] leading-6 font-normal text-white">
                    <span className="text-khaki font-bold ">$49</span> Per Night
                  </p>
                  <Link to={"/find_room"}>
                    <button className="btn-primary1">BOOK NOW</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* slider-3 */}
          <div className="bg-lightBlack keen-slider__slide number-slide1 group">
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="relative">
                <img
                  src="/images/home-5/room-4.jpg"
                  alt="room_images_one"
                  className="w-full h-full"
                />
                <div className="ml-[-280px] group-hover:ml-0 transition-all duration-500 inline-block bg-lightBlack absolute -bottom-0">
                  <div className="px-[30px] py-3 flex items-center ">
                    <div className="flex items-center">
                      <LuSofa className="w-[14px] h-[14px] text-white" />
                      <p className="text-white text-sm leading-6 font-normal font-Lora ml-[10px]">
                        Adults: 5
                      </p>
                    </div>
                    <div className="flex items-center ml-[26px]">
                      <MdCloseFullscreen className="w-[14px] h-[14px] text-white border" />
                      <p className="text-white text-sm leading-6 font-normal font-Lora ml-[10px]">
                        Size: 95ft3
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-5 py-7 xl:px-[30px] xl:py-[34px]">
                <h3 className="text-white  text-lg md:text-xl 2xl:text-[22px] leading-[30px] font-normal font-Lora mb-6">
                  <Link to="/home5/room">Deluxe room</Link>
                </h3>
                <p className="text-lightGray text-sm sm:text-base leading-[26px] font-normal font-Lora">
                  Located Square, The CozyStay Apartment Private Reteat in The
                  Heart of Services In Professional Services.
                </p>

                <div className="flex items-center justify-between mt-10 mb-2">
                  <p className="text-Lora text-[15px] sm:text-[18px] leading-6 font-normal text-white">
                    <span className="text-khaki font-bold ">$49</span> Per Night
                  </p>
                  <Link to={"/find_room"}>
                    <button className="btn-primary1">BOOK NOW</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* slider-4 */}
          <div className="bg-lightBlack keen-slider__slide number-slide1 group">
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="relative">
                <img
                  src="/images/home-5/room-6.jpg"
                  alt="room_images_one"
                  className="w-full h-full"
                />
                <div className="ml-[-280px] group-hover:ml-0 transition-all duration-500 inline-block bg-lightBlack absolute -bottom-0">
                  <div className="px-[30px] py-3 flex items-center ">
                    <div className="flex items-center">
                      <LuSofa className="w-[14px] h-[14px] text-white" />
                      <p className="text-white text-sm leading-6 font-normal font-Lora ml-[10px]">
                        Adults: 5
                      </p>
                    </div>
                    <div className="flex items-center ml-[26px]">
                      <MdCloseFullscreen className="w-[14px] h-[14px] text-white border" />
                      <p className="text-white text-sm leading-6 font-normal font-Lora ml-[10px]">
                        Size: 95ft3
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-5 py-7 xl:px-[30px] xl:py-[34px]">
                <h3 className="text-white  text-lg md:text-xl 2xl:text-[22px] leading-[30px] font-normal font-Lora mb-6">
                  Deluxe room
                </h3>
                <p className="text-lightGray text-sm sm:text-base leading-[26px] font-normal font-Lora">
                  Located Square, The CozyStay Apartment Private Reteat in The
                  Heart of Services In Professional Services.
                </p>

                <div className="flex items-center justify-between mt-10 mb-2">
                  <p className="text-Lora  leading-6 font-normal text-white">
                    <span className="text-khaki font-bold text-[15px] sm:text-[18px]">
                      $49
                    </span>{" "}
                    Per Night
                  </p>
                  <Link to={"/find_room"}>
                    <button className="btn-primary1">BOOK NOW</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* slider breckpoints */}
        <div className="mx-auto  hidden md:block z-[1]">
          {loaded && instanceRef.current && (
            <div className="dots flex items-center justify-center">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
