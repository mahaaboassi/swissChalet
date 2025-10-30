const Newsletter = () => {
  return (
    <section
      className="bg-[url('/images/home-3/subscribe-bg.jpg')]  bg-center bg-cover bg-no-repeat h-[428px] grid items-center justify-center"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="grid items-center justify-center  px-2">
        <div className="flex items-center  justify-center mb-1">
          <img src="/images/home-3/shape-2.png" alt="" />
          <h5 className="px-2 sm:px-3 md:px-5 text-sm sm:text-base leading-[26px] lg:leading-[42px] text-white font-Garamond font-semibold">
            JOIN OUR MAILING LIST
          </h5>

          <img src="/images/home-3/shape-2.png" alt="" />
        </div>
        <h1 className="text-center text-2xl md:text-3xl 2xl:text-[38px] leading-[26px] lg:leading-[38px] text-white  font-bold font-Garamond mb-6 md:mb-[60px]">
          Newsletter Sign Up
        </h1>
        <form className="flex items-center justify-between w-full sm:-[400px] md:w-[500px] xl:w-[550px] 2xl:w-[690px] h-10 md:h-[60px] border border-khaki">
          <input
            required
            type="email"
            className="inline-block lg:px-[26px] py-2 sm:py-4 md:py-[22px] bg-transparent border-none outline-white text-base xl:text-[17px] text-lightGray font-Lora font-normal placeholder:text-lightGray focus:outline-transparent focus:border-khaki
                  focus:ring-transparent w-full flex-initial"
            placeholder="Email Address"
          />
          <button
            type="submit"
            className="bg-khaki text-white text-base font-medium  font-Garamond px-2 sm:px-5 lg:px-10 2xl:px-[50px] h-full border border-khaki hover-animBg after:bg-normalBlack"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
