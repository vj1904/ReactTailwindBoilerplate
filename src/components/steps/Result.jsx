import React, { useState } from "react";
import Math from "../../img/math.png";

const HorizontalRadioList = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      id: 1,
      title: "Fundamental Math",
      description:
        "Build your foundational skills in algebra, geometry, and probability",
      imageUrl: Math, // Example image URL
    },
    {
      id: 2,
      title: "Mathematical Thinking",
      description:
        "Build your foundational skills in algebra, geometry and probability",
      imageUrl: Math, // Example image URL
    },
  ];

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId === selectedOption ? null : optionId);
  };

  return (
    <div className="flex justify-center items-center min-h-96 md:min-h-4/5 mx-auto">
      <div>
        <div className="text-center lg:mt-48">
          <h1 className="font-bold text-2xl pb-2">
            Loading paths based on your answers
          </h1>
          <h6 className="font-light pt-2">
            Choose one to get started. You can switch anytime.
          </h6>
        </div>
        <div className="flex space-x-4 lg:mx-72 h-52 mt-16 sm:mx-auto">
          {options.map((option) => (
            <div
              key={option.id}
              className={`flex items-center p-4 mb-14 border hover:border-yellow-300 ${
                selectedOption === option.id
                  ? "bg-yellow-300"
                  : "border-gray-300"
              } rounded-lg cursor-pointer`}
              onClick={() => handleOptionClick(option.id)}
            >
              <div className="flex flex-col">
                <h3 className="font-semibold">{option.title}</h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
              <img
                src={option.imageUrl}
                alt={option.title}
                className="w-24 h-24 ml-4 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalRadioList;
