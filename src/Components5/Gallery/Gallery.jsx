import FsLightbox from "fslightbox-react";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
const Gallery = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 overflow-hidden">
      {/* grid col-1 */}
      <div
        className=" relative group 2xl:col-span-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          src="/images/home-5/gallery-1.jpg"
          className="w-full h-full group-hover:grayscale"
          alt=""
        />

        <div className=" text-center absolute bottom-[-200px] group-hover:bottom-0 transition-all duration-500 w-[91%%] m-10 left-0 right-0">
          <div className="mb-[-100px] group-hover:mb-0 opacity-0 group-hover:opacity-100">
            <span
              className="w-[50px] h-[50px] cursor-pointer rounded-full bg-white dark:bg-lightBlack mb-6 md:mb-7 lg:mb-8 xl:mb-9 2xl:mb-[50px] grid items-center justify-center mx-auto  "
              onClick={() => setToggler(!toggler)}
            >
              <AiOutlineEye size={20} className="text-khaki" />
            </span>
          </div>
          <div className="bg-white dark:bg-lightBlack text-center py-10  ">
            <h4 className=" text-lg md:text-xl lg:text-2xl leading-8 font-medium text-lightBlack dark:text-white font-Garamond ">
              Modern comfort
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray dark:text-lightGray font-normal font-Lora hover:text-khaki">
              <Link to="/home5/room">Hotel Booking</Link>
            </p>
          </div>
          {/* FsLight-box all images. */}
          <FsLightbox
            toggler={toggler}
            sources={[
              "/images/home-5/gallery-1.jpg",
              "/images/home-5/gallery-2.jpg",
              "/images/home-5/gallery-3.jpg",
              "/images/home-5/gallery-4.jpg",
            ]}
          />
        </div>
      </div>
      {/* grid-col-2 */}
      <div
        className="md:flex lg:block 2xl:col-span-1"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className=" relative group">
          <img
            src="/images/home-5/gallery-2.jpg"
            className="w-full  group-hover:grayscale"
            alt=""
          />
          {/* hover effect and text */}
          <div className=" text-center absolute bottom-[-200px] group-hover:bottom-0 transition-all duration-500 w-[91%%] m-10 left-0 right-0">
            <div className="mb-[-100px] group-hover:mb-0 opacity-0 group-hover:opacity-100">
              <span
                className="w-[50px] h-[50px] cursor-pointer rounded-full bg-white dark:bg-lightBlack mb-6 md:mb-7 lg:mb-8 xl:mb-9 2xl:mb-[50px] grid items-center justify-center mx-auto  "
                onClick={() => setToggler(!toggler)}
              >
                <AiOutlineEye size={20} className="text-khaki" />
              </span>
            </div>
            <div className="bg-white dark:bg-lightBlack text-center py-10  ">
              <h4 className=" text-lg md:text-xl lg:text-2xl leading-8 font-medium text-lightBlack dark:text-white font-Garamond ">
                Modern comfort
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray dark:text-lightGray font-normal font-Lora">
                <Link to="/home5/room">Hotel Booking</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="relative group">
          <img
            src="/images/home-5/gallery-3.jpg"
            className="w-full group-hover:grayscale"
            alt=""
          />
          {/* hover effect and text */}
          <div className=" text-center absolute bottom-[-200px] group-hover:bottom-0 transition-all duration-500 w-[91%%] m-10 left-0 right-0">
            <div className="mb-[-100px] group-hover:mb-0 opacity-0 group-hover:opacity-100">
              <span
                className="w-[50px] h-[50px] cursor-pointer rounded-full bg-white dark:bg-lightBlack mb-6 md:mb-7 lg:mb-8 xl:mb-9 2xl:mb-[50px] grid items-center justify-center mx-auto  "
                onClick={() => setToggler(!toggler)}
              >
                <AiOutlineEye size={20} className="text-khaki" />
              </span>
            </div>
            <div className="bg-white dark:bg-lightBlack text-center py-10  ">
              <h4 className=" text-lg md:text-xl lg:text-2xl leading-8 font-medium text-lightBlack dark:text-white font-Garamond ">
                Modern comfort
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray dark:text-lightGray font-normal font-Lora">
                <Link to="/home5/room">Hotel Booking</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* grid col-3 */}
      <div
        className=" relative group 2xl:col-span-1"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          src="/images/home-5/gallery-4.jpg"
          className="h-[450px] md:h-[520px] lg:h-fit object-cover w-full group-hover:grayscale"
          alt=""
        />
        {/* hover effect and text */}
        <div className=" text-center absolute bottom-[-200px] group-hover:bottom-0 transition-all duration-500 w-[91%%] m-10 left-0 right-0">
          <div className="mb-[-100px] group-hover:mb-0 opacity-0 group-hover:opacity-100">
            <span
              className="w-[50px] h-[50px] cursor-pointer rounded-full bg-white dark:bg-lightBlack mb-6 md:mb-7 lg:mb-8 xl:mb-9 2xl:mb-[50px] grid items-center justify-center mx-auto  "
              onClick={() => setToggler(!toggler)}
            >
              <AiOutlineEye size={20} className="text-khaki" />
            </span>
          </div>
          <div className="bg-white dark:bg-lightBlack text-center py-10  ">
            <h4 className=" text-lg md:text-xl lg:text-2xl leading-8 font-medium text-lightBlack dark:text-white font-Garamond ">
              Modern comfort
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray dark:text-lightGray font-normal font-Lora hover:text-khaki">
              <Link to="/home5/room">Hotel Booking</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
