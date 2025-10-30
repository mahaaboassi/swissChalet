import { useState, useEffect } from "react";

/* eslint-disable react/prop-types */
export default function Accordion({ children, title, id, active = false }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, []);

  return (
    <div className="py-2">
      <h2>
        <button
          className="flex items-center justify-between w-full text-left font-semibold font-Garamond hover:bg-khaki focus:bg-khaki p-5 group bg-normalBlack"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span className="text-white text-base sm:text-lg md:text-xl 2xl:text-[22px] ">
            {title}
          </span>
          <svg
            className="fill-white  shrink-0 ml-8 "
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`ttransform origin-center transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid text-sm sm:text-base font-Lora font-normal leading-[26px] text-white overflow-hidden transition-all duration-300 ease-in-out px-5 bg-normalBlack ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="py-4 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-[22px] font-Garamond">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
