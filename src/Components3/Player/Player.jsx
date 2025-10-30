import { useState } from "react";
import FsLightbox from "fslightbox-react";
const Player = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className="bg-[url('/images/home-3/video-bg.jpg')] py-20 md:py-40 2xl:py-[260px] bg-center bg-no-repeat bg-cover">
      <div
        className="grid items-center justify-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="w-[100px] h-[100px]   grid items-center justify-center rounded-full border border-whiteSmoke m-[15px] ">
          <p
            className="text-base leading-[38px] text-lightBlack font-Garamond font-medium bg-whiteSmoke w-[70px] h-[70px] rounded-full grid items-center justify-center cursor-pointer"
            onClick={() => setToggler(!toggler)}
          >
            PLAY
          </p>
        </span>
      </div>
      <FsLightbox
        toggler={toggler}
        sources={["https://youtu.be/7qFClwGaFYc?si=dZ7xkSvitVQjth7P"]}
      />
    </section>
  );
};

export default Player;
