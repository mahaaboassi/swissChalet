import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <footer className="lg:pt-[100px]  dark:bg-lightBlack ">
      <div className=" py-20 2xl:py-[120px]">
        <div className="Container grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-9 2xl:grid-cols-12  justify-between gap-5 px-2">
          {/* logo and text */}
          <div
            className="px-5 lg:px-2 lg:col-span-3 2xl:col-span-4  "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="/images/home-2/footer-logo.png"
              className="dark:hidden"
              alt=""
            />
            <img
              src="/images/home-2/dark_footer_logo.png"
              className="hidden dark:block"
              alt=""
            />
            <p className="text-sm xl:text-base leading-[26px] font-Lora font-normal text-gray dark:text-lightGray mt-6 lg:mt-[35px] 2xl:w-[345px]">
              Show beauty your location, showse design your rooms, present the
              facities an todays features of your hotel and offer tos recove
              method to book a room.
            </p>
          </div>
          {/* contact info */}
          <div
            className="px-5 lg:px-2 lg:col-span-2 2xl:col-span-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4 className="text-lg leading-[46px] font-Garamond font-bold text pb-4 md:pb-5  text-lightBlack dark:text-white">
              CONTACT US
            </h4>
            <ul className="">
              <li className="text-gray dark:text-lightGray font-normal font-Lora text-sm xl:text-base mb-[15px] hover:text-khaki transition-all duration-300">
                support@example.com
              </li>
              <li className="text-gray dark:text-lightGray font-normal font-Lora text-sm xl:text-base mb-[15px] hover:text-khaki transition-all duration-300">
                Bangladesh Mahanagari <br />
                Dhaka
              </li>
              <li className="text-gray dark:text-lightGray font-normal font-Lora text-sm xl:text-base mb-[15px] hover:text-khaki transition-all duration-300">
                1-800-123-4567
              </li>
            </ul>
          </div>
          {/* information*/}
          <div
            className="px-5 lg:px-2 lg:col-span-2 2xl:col-span-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4 className="text-lg leading-[46px] font-Garamond font-bold text pb-4 md:pb-5  text-lightBlack dark:text-white">
              INFORMATION
            </h4>
            <ul className="">
              <li className="text-gray dark:text-lightGray font-normal font-Lora text-sm xl:text-base mb-[15px] hover:text-khaki transition-all duration-300">
                <Link to="#"> Our Location</Link>
              </li>
              <li className="text-gray dark:text-lightGray font-normal font-Lora text-sm xl:text-base mb-[15px] hover:text-khaki transition-all duration-300">
                <Link to="#"> Career</Link>
              </li>
              <li className="text-gray dark:text-lightGray font-normal font-Lora text-sm xl:text-base mb-[15px] hover:text-khaki transition-all duration-300">
                <Link to="#"> Customer support</Link>
              </li>
              <li className="text-gray dark:text-lightGray font-normal font-Lora text-sm xl:text-base mb-[15px] hover:text-khaki transition-all duration-300">
                <Link to="#"> About Us</Link>
              </li>
            </ul>
          </div>
          {/* gallery*/}
          <div
            className="px-5 lg:px-2 lg:col-span-2  2xl:col-span-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4 className="text-lg leading-[46px] font-Garamond font-bold text pb-4 md:pb-5  text-lightBlack dark:text-white">
              INSTAGRAM
            </h4>
            <div className="grid grid-cols-3 gap-[10px] py-[5px] 2xl:w-[300px] content-center ">
              <img src="/images/home-2/gallery-1.jpg" alt="" />
              <img src="/images/home-2/gallery-2.jpg" alt="" />
              <img src="/images/home-2/gallery-3.jpg" alt="" />
              <img src="/images/home-2/gallery-4.jpg" alt="" />
              <img src="/images/home-2/gallery-5.jpg" alt="" />
              <img src="/images/home-2/gallery-6.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* bottom footer */}

      <div className="bg-whiteSmoke dark:bg-normalBlack py-7">
        <div className="Container flex flex-col sm:flex-row items-center justify-between">
          <p
            className="text-sm xl:text-base text-gray dark:text-lightGray
           font-Lora font-normal"
          >
            {` © ${new Date().getFullYear()} Royella. All Rights Reserved.`}
          </p>
          <p
            className="text-sm xl:text-base text-gray dark:text-lightGray
           font-Lora font-normal"
          >
            Developed by: Dream-IT Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
