const CheckingForm = () => {
  return (
    <section className="dark:bg-lightBlack py-20 2xl:py-[120px]">
      <form className="Container">
        <h3
          className="text-lightBlack dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-[45px] leading-7 
           font-semibold font-Garamond"
        >
          Check Availability
        </h3>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4   items-center justify-between mt-8 md-mt-10 xl:mt-12 gap-5 md:gap-6 xl:gap-[30px]">
          {/* Room Check-in */}
          <div className="" data-aos="fade-up" data-aos-duration="1000">
            <label className="text-lightBlack dark:text-white font-medium font-Garamond text-sm sm:text-base leading-7 ">
              CHECK-IN:
            </label>
            <input
              type="date"
              className="w-full h-12 md:h-[52] lg:h-[60px] px-4 border border-[#a0a0a0] focus:border-[#a0a0a0] dark:border-lightGray text-gray dark:text-lightGray outline-none uppercase bg-transparent mt-4 focus:ring-0 "
              required
            />
          </div>
          {/* Room Check-out */}
          <div className="" data-aos="fade-up" data-aos-duration="1000">
            <label className="text-lightBlack dark:text-white font-medium font-Garamond text-sm sm:text-base uppercase leading-7 ">
              Check-Out:
            </label>
            <input
              type="date"
              className="w-full h-12 md:h-[52] lg:h-[60px] px-4 border border-[#a0a0a0] focus:border-[#a0a0a0] dark:border-lightGray text-gray dark:text-lightGray outline-none uppercase bg-transparent mt-4 focus:ring-0 "
              required
            />
          </div>
          {/* Adult */}
          <div className="" data-aos="fade-up" data-aos-duration="1000">
            <label className="text-lightBlack dark:text-white font-medium font-Garamond text-sm sm:text-base leading-7 ">
              ADULTS:
            </label>
            <select
              className="w-full h-12 md:h-[52] lg:h-[60px] px-4 border border-[#a0a0a0] focus:border-[#a0a0a0] dark:border-lightGray text-gray dark:text-lightGray outline-none  bg-transparent mt-4 focus:ring-0 "
              required
              onFocus={(e) => {
                e.target.size = 6;
              }}
              onBlur={(e) => {
                e.target.size = 0;
              }}
              onChange={(e) => {
                e.target.size = 1;
                e.target.blur();
              }}
            >
              <option
                className="bg-khaki text-white px-3 py-3"
                value=""
                disabled
              >
                Select Number of Adults
              </option>
              <option
                className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                value="option1"
              >
                Adults 1
              </option>
              <option
                className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                value="option2"
              >
                Adults 2
              </option>
              <option
                className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                value="option3"
              >
                Adults 3
              </option>
              <option
                className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                value="option4"
              >
                Adults 4
              </option>
            </select>
          </div>
          {/* children */}
          <div className="" data-aos="fade-up" data-aos-duration="1000">
            <label className="text-lightBlack dark:text-white font-medium font-Garamond text-sm sm:text-base leading-7 ">
              CHILDREN:
            </label>
            <select
              className="w-full h-12 md:h-[52] lg:h-[60px] px-4 border border-[#a0a0a0] focus:border-[#a0a0a0] dark:border-lightGray text-gray dark:text-lightGray outline-none  bg-transparent mt-4 focus:ring-0 "
              required
              onFocus={(e) => {
                e.target.size = 6;
              }}
              onBlur={(e) => {
                e.target.size = 0;
              }}
              onChange={(e) => {
                e.target.size = 1;
                e.target.blur();
              }}
            >
              <option
                className="bg-khaki text-white px-3 py-3"
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
        </div>
        {/* Location and button */}
        <div className="mt-6 xl:mt-[30px]">
          {/* Select location */}
          <div className="" data-aos="fade-up" data-aos-duration="1000">
            <label className="text-lightBlack dark:text-white font-medium font-Garamond text-sm sm:text-base leading-7 ">
              LOCATIAN:
            </label>
            <select
              className="w-full h-12 md:h-[52] lg:h-[60px] px-4 border border-[#a0a0a0] focus:border-[#a0a0a0] dark:border-lightGray text-gray dark:text-lightGray outline-none  bg-transparent mt-4 focus:ring-0 "
              required
              onFocus={(e) => {
                e.target.size = 6;
              }}
              onBlur={(e) => {
                e.target.size = 0;
              }}
              onChange={(e) => {
                e.target.size = 1;
                e.target.blur();
              }}
            >
              <option
                className="text-white px-3 py-3 bg-khaki"
                value=""
                disabled
              >
                Select Your Favorite Place
              </option>
              <option
                className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                value="option1"
              >
                Favorite Place - 1
              </option>
              <option
                className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                value="option2"
              >
                Favorite Place - 2
              </option>
              <option
                className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                value="option3"
              >
                Favorite Place - 3
              </option>
              <option
                className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                value="option4"
              >
                Favorite Place - 4
              </option>
            </select>
          </div>
          {/* Search button */}
          <div className="mt-[30px] 2xl:mt-10">
            <button className="w-full px-4 h-12 md:h-[52] lg:h-[60px] text-white uppercase  bg-khaki hover-animBg after:rounded-none after:bg-normalBlack ">
              search
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CheckingForm;
