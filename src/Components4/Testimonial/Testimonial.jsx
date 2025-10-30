import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./testimonials.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 600px)": {
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
    created() {
      // setLoaded(true);
    },
  });

  return (
    <section className="dark:bg-lightBlack py-20 2xl:py-[120px]">
      <div className="Container">
        {/* section title */}
        <div
          className="text-center px-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="text-base leading-7 md:leading-10 lg:leading-[40px]  text-khaki font-normal font-Lora ">
            Testimonial
          </p>
          <h3
            className="text-lightBlack dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-[45px] leading-5 md:leading-7 lg:leading-10  2xl:leading-[45px]
           font-medium font-Garamond"
          >
            Our Customers Say
          </h3>
        </div>
        {/* section content */}
        <div className="relative">
          <div className="mt-14 2xl:mt-[60px] keen-slider " ref={sliderRef}>
            {/* slide - 1 */}
            <div className="keen-slider__slide number-slide1 ">
              <div data-aos="fade-up" data-aos-duration="1000">
                <div className="bg-[#ededed] dark:bg-normalBlack p-[30px] relative before:absolute before:w-6 before:h-6 before:bg-[#ededed] dark:before:bg-normalBlack before:rotate-45 before:left-[37px] before:-bottom-[13px]">
                  <span className="flex items-center space-x-[5px] md:space-x-2 xl:space-x-3">
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                  </span>
                  <p className="font-Lora text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal mt-7 ">
                    Awesome location, delicious food, view from room is outstanding, amenities were good, staff is very friendly and welcoming
                  </p>
                </div>
                <div className="flex items-center mt-10 lg:mt-[51px]">
                  <div className="w-[80px] h-[80px] bg-zinc-200 font-bold flex justify-center items-center text-xl">RU</div>
                  <div className="ml-5 md:ml-6">
                    <h4 className="text-lg sm:text-xl md:text-2xl leading-[28px] text-[#041341] dark:text-white font-medium font-Garamond ">
                      Rupesh Pamaihgari
                    </h4>
                    <p className="text-sm sm:text-base leading-7 font-Lora font-normal text-gray dark:text-lightGray">
                      few months ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* slide - 2 */}
            <div className="keen-slider__slide number-slide1 ">
              <div data-aos="fade-up" data-aos-duration="1000">
                <div className="bg-[#ededed] dark:bg-normalBlack p-[30px] relative before:absolute before:w-6 before:h-6 before:bg-[#ededed] dark:before:bg-normalBlack before:rotate-45 before:left-[37px] before:-bottom-[13px]">
                  <span className="flex items-center space-x-[5px] md:space-x-2 xl:space-x-3">
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                  </span>
                  <p className="font-Lora text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal mt-7 ">
                      This is a great lovely property nestled in a magical place in Tangmarg. Gulmarg is just 30 mins away by car and the hosts are excellent and take care of all your needs.
                  </p>
                </div>
                <div className="flex items-center mt-10 lg:mt-[51px]">
                  <div className="w-[80px] h-[80px] bg-zinc-200 font-bold flex justify-center items-center text-xl">DE</div>
                  <div className="ml-5 md:ml-6">
                    <h4 className="text-lg sm:text-xl md:text-2xl leading-[28px] text-[#041341] dark:text-white font-medium font-Garamond ">
                      Debanuj Chakraborti
                    </h4>
                    <p className="text-sm sm:text-base leading-7 font-Lora font-normal text-gray dark:text-lightGray">
                      few months ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* slide - 3 */}
          <div className="keen-slider__slide number-slide1 ">
              <div data-aos="fade-down" data-aos-duration="1000">
                <div className="bg-[#ededed] dark:bg-normalBlack p-[30px] relative before:absolute before:w-6 before:h-6 before:bg-[#ededed] dark:before:bg-normalBlack before:rotate-45 before:left-[37px] before:-bottom-[13px]">
                  <span className="flex items-center space-x-[5px] md:space-x-2 xl:space-x-3">
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                  </span>
                  <p className="font-Lora text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal mt-7 ">
                    It was a wonderful experience, the stay was very well curated as per our convenience and choice. Would definitely want to go back again. It is a beautiful property with all amenities.
                  </p>
                </div>
                <div className="flex items-center mt-10 lg:mt-[51px]">
                  <div className="w-[80px] h-[80px] bg-zinc-200 font-bold flex justify-center items-center text-xl">ME</div>
                  <div className="ml-5 md:ml-6">
                    <h4 className="text-lg sm:text-xl md:text-2xl leading-[28px] text-[#041341] dark:text-white font-medium font-Garamond ">
                      Meetu Gupta
                    </h4>
                    <p className="text-sm sm:text-base leading-7 font-Lora font-normal text-gray dark:text-lightGray">
                      1 year ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
            
          {/* slider breckpoints */}
          <div className="mx-auto hidden">
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
                      className={
                        "dot" + (currentSlide === idx ? " active" : "")
                      }
                    ></button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
