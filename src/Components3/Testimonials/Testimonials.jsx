import { FaStar } from "react-icons/fa";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import "./styles.css";

const Testimonials = () => {
  // keen config code...
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      origin: "center",
      perView: 1,
      spacing: 40,
    },
    vertical: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="py-20 2xl:py-[120px] bg-whiteSmoke dark:bg-normalBlack relative">
      <div className="Container">
        {/* section heading */}
        <div
          className="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[150px] xl:px-[280px] 2xl:px-[350px] font-Garamond"
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
            <h5 className="px-5 text-base leading-[26px] lg:leading-[42px] text-gray dark:text-lightGray font-Garamond font-semibold">
              TESTIMONIALS
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
          <h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[46px] text-lightBlack dark:text-white mt-1 mb-[15px]  font-bold">
            What Our Guests Say
          </h1>
          <p className="font-Lora leading-[22px] lg:leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base ">
            We provide seasonal special discounts for selected rooms. Let us
            know the room you are interested and let’s make it happen.
          </p>
        </div>

        {/* section testimonials content */}
        <div
          className="mt-14 2xl:mt-[60px] flex bg-white dark:bg-lightBlack"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* keen slider */}
          <div
            className="keen-slider  h-[620px] sm:h-[660px] md:h-[500px]"
            ref={sliderRef}
          >
            {/* slide one... */}
            <div className="keen-slider__slide w-full number-slide1 flex flex-col md:flex-row items-center">
              <img
                src="/images/home-3/testi-thumb.png"
                className="w-full h-1/2 md:h-[63%] lg:h-full"
                alt=""
              />
              <div className="grid items-center  ">
                <div className="px-5 sm:px-10 md:pl-[30px] md:pr-[10px] lg:px-[50px] xl:px-[60px] 2xl:px-[77px] font-Garamond py-6 lg:py-[60px] 2xl:py-[77px] relative">
                  <h1 className="text-2xl md:text-3xl 2xl:text-[34px] leading-[26px] text-lightBlack dark:text-white mb-2 lg:mb-[12px]  font-semibold">
                    Aqsaa Arafaa
                  </h1>
                  <p className="font-Lora text-[15px] leading-[26px] text-khaki font-medium uppercase ">
                    Web Developer
                  </p>
                  <p className="font-Lora text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal my-3 sm:my-4 md:my-[20px] lg:mt-[25px] lg:mb-[30px] lg:text-justify 2xl:text-left">
                    multimedia based technologies. Dramatically e-enable
                    superior schemas rather backward compatible human capital.
                    Efficiently network world-class customer service and
                    wireless alignments. Quickly exploit functionalized niche
                    markets without e-business collaborations and idea-sharing.
                    Completely fashion open-source manufactured products
                    wcooperativer channels. Efficiently iterate intuitive
                    solutions without customized materials.
                  </p>
                  <span className="flex items-center space-x-[5px] md:space-x-2 xl:space-x-3">
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                  </span>
                  <div className="hidden 2xl:block xl:absolute bottom-[80px] left-[50%]">
                    <img
                      src="/images/home-3/qute-light.png"
                      className="dark:hidden"
                      alt=""
                    />
                    <img
                      src="/images/home-3/qute-dark.png"
                      className="hidden dark:block"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* slide two... */}
            <div className="keen-slider__slide w-full number-slide1 flex flex-col md:flex-row items-center">
              <img
                src="/images/home-3/testi-thumb.png"
                className="w-full h-1/2 md:h-[63%] lg:h-full"
                alt=""
              />
              <div className="grid items-center  ">
                <div className="px-5 sm:px-10 md:pl-[30px] md:pr-[10px] lg:px-[50px] xl:px-[60px] 2xl:px-[77px] font-Garamond py-6 lg:py-[60px] 2xl:py-[77px] relative">
                  <h1 className="text-2xl md:text-3xl 2xl:text-[34px] leading-[26px] text-lightBlack dark:text-white mb-2 lg:mb-[12px]  font-semibold">
                    Memona Moeez
                  </h1>
                  <p className="font-Lora text-[15px] leading-[26px] text-khaki font-medium uppercase ">
                    Ui/Ux Designer
                  </p>
                  <p className="font-Lora text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal my-3 sm:my-4 md:my-[20px] lg:mt-[25px] lg:mb-[30px] lg:text-justify 2xl:text-left">
                    multimedia based technologies. Dramatically e-enable
                    superior schemas rather backward compatible human capital.
                    Efficiently network world-class customer service and
                    wireless alignments. Quickly exploit functionalized niche
                    markets without e-business collaborations and idea-sharing.
                    Completely fashion open-source manufactured products
                    wcooperativer channels. Efficiently iterate intuitive
                    solutions without customized materials.
                  </p>
                  <span className="flex items-center space-x-[5px] md:space-x-2 xl:space-x-3">
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                  </span>
                  <div className="hidden 2xl:block xl:absolute bottom-[80px] left-[50%]">
                    <img
                      src="/images/home-3/qute-light.png"
                      className="dark:hidden"
                      alt=""
                    />
                    <img
                      src="/images/home-3/qute-dark.png"
                      className="hidden dark:block"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* slide three */}
            <div className="keen-slider__slide w-full number-slide1 flex flex-col md:flex-row items-center">
              <img
                src="/images/home-3/testi-thumb.png"
                className="w-full h-1/2 md:h-[63%] lg:h-full"
                alt=""
              />
              <div className="grid items-center  ">
                <div className="px-5 sm:px-10 md:pl-[30px] md:pr-[10px] lg:px-[50px] xl:px-[60px] 2xl:px-[77px] font-Garamond py-6 lg:py-[60px] 2xl:py-[77px] relative">
                  <h1 className="text-2xl md:text-3xl 2xl:text-[34px] leading-[26px] text-lightBlack dark:text-white mb-2 lg:mb-[12px]  font-semibold">
                    Farjana Islam
                  </h1>
                  <p className="font-Lora text-[15px] leading-[26px] text-khaki font-medium uppercase ">
                    Graphic Designer
                  </p>
                  <p className="font-Lora text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal my-3 sm:my-4 md:my-[20px] lg:mt-[25px] lg:mb-[30px] lg:text-justify 2xl:text-left">
                    multimedia based technologies. Dramatically e-enable
                    superior schemas rather backward compatible human capital.
                    Efficiently network world-class customer service and
                    wireless alignments. Quickly exploit functionalized niche
                    markets without e-business collaborations and idea-sharing.
                    Completely fashion open-source manufactured products
                    wcooperativer channels. Efficiently iterate intuitive
                    solutions without customized materials.
                  </p>
                  <span className="flex items-center space-x-[5px] md:space-x-2 xl:space-x-3">
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                    <FaStar className="text-khaki" size={18} />
                  </span>
                  <div className="hidden 2xl:block xl:absolute bottom-[80px] left-[50%]">
                    <img
                      src="/images/home-3/qute-light.png"
                      className="dark:hidden"
                      alt=""
                    />
                    <img
                      src="/images/home-3/qute-dark.png"
                      className="hidden dark:block"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* navigation */}
          <div className="pr-10  md:pr-[50px] lg:pr-[60px] 2xl:pr-[77px] pl-5  md:pl-6 lg:pl-7 2xl:pl-8 hidden md:block">
            {loaded && instanceRef.current && (
              <div className="dots1">
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
                        "dot1" + (currentSlide === idx ? " active" : "")
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

export default Testimonials;
