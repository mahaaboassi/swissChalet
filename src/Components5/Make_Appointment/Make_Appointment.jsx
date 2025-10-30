import Swal from "sweetalert2";

const Make_Appointment = () => {
  // booking alert message
  const handleAlert = () => {
    Swal.fire({
      title: "Form Fill-Up Complete?",
      text: "Please Fill All Type Of Field",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#008000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, complete!",
      color: "#fff",
      background: "#c19d68",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Congratulation!",
          text: "Your Appointment Added Successful!",
          icon: "success",
          background: "#c19d68",
          color: "#fff",
          confirmButtonColor: "#008000",
        });
      }
    });
  };
  return (
    <section className="py-20 2xl:py-[120px] dark:bg-lightBlack shadow-xl">
      <div className="Container shadow-custom dark:shadow-none dark:bg-normalBlack ">
        <div
          className="lg:flex items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="h-[280px] sm:h-[350px] lg:h-[520px] xl:h-[580px] 2xl:h-[620px] w-full lg:w-fit xl:w-[540px] 2xl:w-full">
            <img
              src="/images/home-5/Make_Ap.jpg"
              alt=""
              className="h-[280px] sm:h-[350px] lg:h-[520px] xl:h-[580px] 2xl:h-[620px] w-full   object-cover"
            />
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="p-5 py-7 lg:pl-[40px] xl:pl-[50px] 2xl:pl-[95px] 2xl:w-full 2xl:pr-[100px]"
          >
            <div className="flex items-center mb-3 mt-5 lg:mt-0 ">
              <div className="relative mr-[10px]">
                <hr className="w-10 h-[2px] bg-khaki text-khaki" />
                <span className="w-[8px] h-[8px] bg-khaki rounded-full absolute -top-[3px] animation-move"></span>
              </div>
              <p className="text-sm font-medium font-Lora leading-[26px] text-khaki">
                MAKE AN APPOINTMENT
              </p>
            </div>

            <h2
              className="text-lightBlack dark:text-white text-[22px] sm:text-3xl md:text-4xl xl:text-[38px] leading-7 md:leading-9 lg:leading-10 2xl:leading-[43px]
           font-bold font-Garamond pb-7 lg:pb-[30px]"
            >
              Request a free quote
            </h2>
            <div className=" sm:flex items-center gap-5 2xl:gap-[30px] mb-3 sm:mb-5 2xl:mb-[30px]">
              <input
                type="text"
                name=""
                className="w-full h-[50px] border-none outline-none focus:ring-0 placeholder:text-base placeholder:text-lightGray placeholder:leading-[38px] placeholder:font-Lora placeholder:font-normal px-5 mb-3 sm:mb-0 bg-whiteSmoke dark:bg-lightBlack dark:text-white"
                placeholder="Your Name"
                id=""
                required
              />
              <input
                type="email"
                name=""
                className="w-full h-[50px] border-none outline-none focus:ring-0 placeholder:text-base placeholder:text-lightGray placeholder:leading-[38px] placeholder:font-Lora placeholder:font-normal px-5 bg-whiteSmoke dark:bg-lightBlack dark:text-white"
                placeholder="Email Address"
                id=""
                required
              />
            </div>
            <div className="grid items-center gap-5 2xl:gap-[30px]">
              <input
                type="text"
                name=""
                className="w-full h-[50px] border-none outline-none focus:ring-0 placeholder:text-base placeholder:text-lightGray placeholder:leading-[38px] placeholder:font-Lora placeholder:font-normal px-5 bg-whiteSmoke dark:bg-lightBlack dark:text-white"
                placeholder="Appointment Topic"
                id=""
                required
              />

              <textarea
                className="w-full h-[160px]  border-none outline-none focus:ring-0 placeholder:text-base placeholder:text-lightGray placeholder:leading-[38px] placeholder:font-Lora placeholder:font-normal px-5 bg-whiteSmoke dark:bg-lightBlack dark:text-white resize-none"
                placeholder="Type Your Message"
                name=""
                id=""
                required
                cols="30"
              ></textarea>
              <button
                className="btn-primary 4xl:w-[211px] dark:after:bg-lightBlack"
                onClick={() => handleAlert()}
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Make_Appointment;
