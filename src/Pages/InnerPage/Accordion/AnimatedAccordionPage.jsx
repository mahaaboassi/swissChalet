import Accordion from "./Accordion";

export default function AnimatedAccordionPage() {
  //  All Faqs and  answers.
  const faqs = [
    {
      title: "How to Booking a Room?",
      text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
      active: false,
    },

    {
      title: "What kinds of Bedroom available?",
      text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
      active: false,
    },

    {
      title: "Do you have any Discount Current Month?",
      text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
      active: false,
    },

    {
      title: "Have you available money back Gaurentee?",
      text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
      active: false,
    },

    {
      title: "Do you have any Discount Current Month?",
      text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
      active: false,
    },

    {
      title: "How to Booking a Room?",
      text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
      active: false,
    },

    {
      title: "What kinds of Bedroom available?",
      text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
      active: false,
    },

    {
      title: "Have you available money back Gaurentee?",
      text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
      active: false,
    },
  ];

  return (
    <main className="relative flex flex-col justify-center  overflow-hidden">
      <div className="w-full mx-auto px-4 md:px-6 ">
        <div
          className=" grid items-end grid-cols-1 lg:grid-cols-2  gap-x-[30px]"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              title={faq.title}
              id={`faqs-${index}`}
              active={faq.active}
            >
              {faq.text}
            </Accordion>
          ))}
        </div>
      </div>
    </main>
  );
}
