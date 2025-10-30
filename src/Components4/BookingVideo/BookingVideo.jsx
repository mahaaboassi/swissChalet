import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { TbPlayerPlayFilled } from "react-icons/tb";
const BookingVideo = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <section className="py-20 xl:py-[120px] bg-[url('/images/banner_2.png')] bg-center bg-cover ">
      <div className="grid items-center justify-center">
        <div
          className=" text-center px-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="/images/home-4/swiss_logo.png"
            alt=""
            className="mx-auto"
          />

          <div className="mt-2 lg:mt-3 mb-2">
            <h1
              className="text-white text-[23px] sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-[45px] leading-7 md:leading-10 lg:leading-[40px] 2xl:leading-[50px]
           font-semibold font-Garamond sm:px-[60px] lg:px-[135px] xl:px-[235px] 2xl:px-[335px] 3xl:px-[535px]"
            >
              Book online today and look forward to a relaxing, unforgettable experience with us at Luxury Best Villa, Kashmir
            </h1>
          </div>
          <div className="grid items-center justify-center">
            {" "}
            <hr className="w-[60px] h-[3px] bg-khaki my-3 md:my-4 lg:mt-5 lg:mb-2" />
          </div>
          <p className="text-white text-sm sm:text-base leading-7 md:leading-10 2xl:leading-[50px] font-normal font-Lora sm:px-[60px] lg:px-[135px] xl:px-[235px] 2xl:px-[335px] 3xl:px-[535px]">
            This villa is one of the favorite houses of our clients, leave
            reviews.
          </p>
          <div
            className="grid items-center justify-center mt-[15px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div
              className=" w-[50px] h-[50px] xl:w-[80px] xl:h-[80px] rounded-full border-2 border-white grid items-center justify-center cursor-pointer"
              title="click me and see details"
              onClick={() => setToggler(!toggler)}
            >
              <TbPlayerPlayFilled className="w-8 h-8 text-white" />
            </div>
          </div>
          <FsLightbox
            toggler={toggler}
            sources={   [ <video className="md:w-[800px] md:h-[450px]" autoPlay controls>
              <source src="/video/swiss.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>]}
          />
        </div>
      </div>
    </section>
  );
};

export default BookingVideo;
