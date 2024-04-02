import React from "react";
import Image  from 'next/image'

interface cardprops { // uppercase
  description: string;
  title: string;
  iconSrc?: string;
}
const Card = ({ description, title, iconSrc }: cardprops) => {
  return (
    <div className="relative">
      <div className="w-72 h-72 border-md bg-blue-50 mx-3 rounded-md hover:scale-110 duration-700 transition-all flex flex-col items-start justify-center pl-4">
        <div className="pb-14 pl-3">
          <img src={iconSrc} alt={title} className="w-12 h-12 mb-4" />
          <h1 className="text-blue-700 font-semibold text-2xl pb-2">{title}</h1>
          <div className="text-slate-400">{description}</div>
          <a
            href="#"
            className="absolute top-60 left-48 text-blue-500 underline"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
