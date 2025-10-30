import { useState } from "react";
import { FaStar } from "react-icons/fa";
// import "./testimonials.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Testimonials = () => {
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
      "(min-width:992px)": {
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
    <section className="bg-normalBlack py-20 2xl:py-[120px]">
      {/* Section Title */}

      <div className="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px] Container">
        <div className="flex items-center mb-3 justify-center">
          <div className="relative mr-[10px]">
            <hr className="w-10 h-[2px] bg-khaki text-khaki" />
            <span className="w-[8px] h-[8px] bg-khaki rounded-full absolute -top-[3px] left-0 animation-move"></span>
          </div>
          <p className="text-sm font-medium font-Lora leading-[26px] text-khaki">
            TESTIMONIALS
          </p>
        </div>

        <h2
          className="text-white text-[22px] sm:text-3xl md:text-4xl xl:text-[38px] leading-7 md:leading-9 lg:leading-10 2xl:leading-[43px]
           font-bold font-Garamond mb-4 sm:mb-5"
        >
          What Our Client Are Saying
        </h2>

        <p className="font-Lora leading-6 sm:leading-[26px] text-lightGray font-normal text-sm sm:text-base">
          Proactively morph optimal infomediaries rather than accurate
          expertise. Intrinsicly progressive resources rather than
          resource-leveling
        </p>
      </div>

      {/* Section Content */}
      <div className="relative Container 4xl:w-[1600px]">
        <div className="mt-14 2xl:mt-[60px] keen-slider " ref={sliderRef}>
          {/* slide - 1 */}
          <div className="keen-slider__slide number-slide1 ">
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="grid items-center justify-center mt-10 lg:mt-[51px]">
                <img
                  src="/images/home-5/testi-001.jpeg"
                  alt=""
                  className="rounded-full mx-auto w-[70px] h-[70px]"
                />
                <div className="text-center my-[15px]">
                  <h4 className="text-lg sm:text-xl md:text-2xl leading-[28px] text-white font-medium font-Garamond mb-[15px]">
                    Maydul Islam
                  </h4>
                  <p className="text-sm sm:text-base leading-7 font-Lora font-normal text-lightGray">
                    From Bangladesh
                  </p>
                </div>
              </div>
              <div className="bg-lightBlack py-[35px] px-5 sm:px-[35px] md:px-6 xl:px-[32px] text-center">
                <span className="flex items-center space-x-[5px] md:space-x-2  justify-center">
                  <FaStar className="text-khaki" size={18} />
                  <FaStar className="text-khaki" size={18} />
                  <FaStar className="text-khaki" size={18} />
                  <FaStar className="text-khaki" size={18} />
                  <FaStar className="text-khaki" size={18} />
                </span>
                <p className="font-Lora text-sm leading-[23px] text-lightGray font-normal mt-7 ">
                  Located in Times Square, CozyStay Apartment Hotel Provide
                  Peaceful Private Retreat in TheIn Heart of One of The World
                  Most Iconic Provvide Professgional Services Apartment
                  experienced che international specialties with
                </p>
              </div>
            </div>
          </div>
          {/* slide - 2 */}
          <div className="keen-slider__slide number-slide1 ">
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="grid items-center justify-center mt-10 lg:mt-[51px]">
                <img
                  src="/images/home-4/testi-2.jpg"
                  alt=""
                  className="rounded-full mx-auto w-[70px] h-[70px]"
                />
                <div className="text-center my-[15px]">
                  <h4 className="text-lg sm:text-xl md:text-2xl leading-[28px] text-white font-medium font-Garamond mb-[15px]">
                    Archie P. Warren
                  </h4>
                  <p className="text-sm sm:text-base leading-7 font-Lora font-normal text-lightGray">
                    From Spain
                  </p>
                </div>
              </div>
              <div className="bg-lightBlack py-[35px] px-5 sm:px-[35px] md:px-6 xl:px-[32px] text-center">
                <span className="flex items-center space-x-[5px] md:space-x-2  justify-center">
                  <FaStar className="text-khaki" size={18} />
                  <FaStar className="text-khaki" size={18} />
                  <FaStar className="text-khaki" size={18} />
                  <FaStar className="text-khaki" size={18} />
                  <FaStar className="text-khaki" size={18} />
                </span>
                <p className="font-Lora text-sm leading-[23px] text-lightGray font-normal mt-7 ">
                  Located in Times Square, CozyStay Apartment Hotel Provide
                  Peaceful Private Retreat in TheIn Heart of One of The World
                  Most Iconic Provvide Professgional Services Apartment
                  experienced che international specialties with
                </p>
              </div>
            </div>
          </div>
          {/* slide - 3 */}
          <div className="keen-slider__slide number-slide1 ">
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="grid items-center justify-center mt-10 lg:mt-[51px]">
                <img
                  src="/images/home-4/testi-3.jpg"
                  alt=""
                  className="rounded-full mx-auto w-[70px] h-[70px]"
                />
                <div className="text-center my-[15px]">
                  <h4 className="text-lg sm:text-xl md:text-2xl leading-[28px] text-white font-medium font-Garamond mb-[15px]">
                    Anna R. Johnson
                  </h4>
                  <p className="text-sm sm:text-base leading-7 font-Lora font-normal text-lightGray">
                    From Ukraine
                  </p>
                </div>
              </div>
              <div className="bg-lightBlack py-[35px] px-5 sm:px-[35px] md:px-6 xl:px-[32px] text-center">
                <span className="flex items-center space-x-[5px] md:space-x-2  justify-center">
                  <FaStar className="text-khaki" size={18} />
                  <FaStar className="text-khaki" size={18} />
                  <FaStar className="text-khaki" size={18} />
                  <FaStar className="text-khaki" size={18} />
                  <FaStar className="text-khaki" size={18} />
                </span>
                <p className="font-Lora text-sm leading-[23px] text-lightGray font-normal mt-7 ">
                  Located in Times Square, CozyStay Apartment Hotel Provide
                  Peaceful Private Retreat in TheIn Heart of One of The World
                  Most Iconic Provvide Professgional Services Apartment
                  experienced che international specialties with
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* slider breckpoints */}
        <div className="mx-auto ">
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

export default Testimonials;
