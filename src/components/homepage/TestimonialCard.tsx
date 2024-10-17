import { cardData } from "@/static";
import React from "react";
import Card from "../ui/Card";



const TestimonialCard = () => {
  return (
    <section className=" mb-8 px-4 py-8 lg:px-12 xl:px-22 2xl:px-44">
    <h1 className="text-2xl md:text-3xl font-semibold text-[#002A3A] mb-4">Lorem Ipsum</h1>
    <p className="text-lg text-black mb-8 w-full md:w-1/2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
      velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit.
      Proin luctus malesuada mauris vitae mattis.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {cardData.map((card, index) => (
        <Card
          key={index}
          number={card.number}
          title={card.title}
          description={card.description}
          bgColor={card.bgColor}
          textColor={card.textColor}
          hoverBgColor={card.hoverBgColor}
          hoverTextColor={card.hoverTextColor}
        />
      ))}
    </div>
  </section>
  );
};

export default TestimonialCard;
