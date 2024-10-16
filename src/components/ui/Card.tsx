import React from "react";

interface CardProps {
  number: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}

const Card = ({
  number,
  title,
  description,
  bgColor,
  textColor,
}: CardProps) => {
  return (
    <div
      className={`p-6 ${bgColor} ${textColor} rounded-lg shadow-md flex flex-col justify-between space-y-4 cursor-pointer transition-colors duration-300 
        hover:bg-[#002A3A] hover:text-white`}
    >
      <h2 className="text-4xl font-bold">{number}</h2>
      <hr />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
