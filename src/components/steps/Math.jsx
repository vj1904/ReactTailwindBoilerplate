import React, { useState } from "react";

const Math = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      id: 1,
      title: "Arithmetic",
      description: "Introductory",
      type: "5 x 1/2 = ?",
    },
    {
      id: 2,
      title: "Basic Algebra",
      description: "Foundational",
      type: "5 x 1/2 = ?",
    },
    {
      id: 3,
      title: "Intermediate Algebra",
      description: "Intermediate",
      type: "5 x 1/2 = ?",
    },
    {
      id: 4,
      title: "Calculus",
      description: "Advanced",
      type: "5 x 1/2 = ?",
    },
  ];

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId === selectedOption ? null : optionId);
  };

  return (
    <div className="flex">
      <div className="w-full mx-2">
        <div className="text-center">
          <h1 className="font-bold text-2xl pb-2">
            What is your math comfort level?
          </h1>
          <h6 className="font-light pt-2">
            Choose the highest level you feel confident in - you can always
            adjust later.
          </h6>
        </div>
        <div className="flex items-center space-x-4 p-14 mx-auto md:w-3/4">
          {options.map((option) => (
            <div
              key={option.id}
              className={`cursor-pointer md:h-40 flex flex-col items-center justify-center px-2 py-2 md:w-56 border-2 rounded-md border-gray-100 my-2 hover:border-yellow-300 hover:shadow-md ${
                selectedOption === option.id
                  ? "bg-yellow-300  text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => handleOptionClick(option.id)}
            >
              <h3 className="mb-4">{option.type}</h3>
              <h2 className="font-bold text-md">{option.title}</h2>
              <p className="text-sm">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Math;
