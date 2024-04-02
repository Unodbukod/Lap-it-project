import React from "react";
import Card from "./card";

// triaged, if an array has the same type as the component, assert the type


const Features = () => {
  const card = [
    { title: "Registration", description: "Lorem ipsum dolor sit amet consectetur sodales.", iconSrc: "/identification.svg" },
    { title: "Multi-tenacity", description: "Lorem ipsum dolor sit amet consectetur sodales.", iconSrc: "/share.svg"},
    { title: "Point of Sales", description: "Lorem ipsum dolor sit amet consectetur sodales.", iconSrc: "/tag.svg"},
    { title: "Inventory Control", description: "Lorem ipsum dolor sit amet consectetur sodales.", iconSrc: "/cube.svg"  },
    { title: "Rentals", description: "Lorem ipsum dolor sit amet consectetur sodales.", iconSrc: "/ticket.svg"  },
    { title: "Clinic / Patient", description: "Lorem ipsum dolor sit amet consectetur sodales.", iconSrc: "/heart.svg"  },
  ];
  return (
    <div className="select-none">
      <section className="select-none">
        <div className="flex flex-col items-center justify-center">
          <div className="text-blue-700 text-5xl font-bold text-center">
            We Offer Reputable <br className="mb-4"/>  and Top-notch Software
          </div>
        </div>
      </section>
      <section className="py-10 px-10 2xl:max-container relative flex flex-row mt-10 overflow-auto">
        {card.map((car, index) => (
          <div className="space-x-4" key={index}><Card title={car.title} description={car.description} iconSrc={car.iconSrc} /></div>
        ))}
      </section>
    </div>
  );
};

export default Features;
