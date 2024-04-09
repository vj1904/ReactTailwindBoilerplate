import { React, useState } from "react";
import avatar from "../../img/avatar.jpg";
export default function Discription() {
  const [selectedOption, setSelectedOption] = useState(null);
  const imageList = [
    { id: 1, imageUrl: avatar, title: "Image 1" },
    { id: 2, imageUrl: avatar, title: "Image 2" },
    { id: 3, imageUrl: avatar, title: "Image 3" },
    { id: 4, imageUrl: avatar, title: "Image 4" },
    { id: 5, imageUrl: avatar, title: "Image 5" },
    { id: 6, imageUrl: avatar, title: "Image 6" },
  ];
  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId === selectedOption ? null : optionId);
  };
  return (
    <div className="flex">
      <div className="w-full mx-2">
        <div className="text-center">
          <h1 className="font-bold text-2xl pb-2">Which describes you best?</h1>
          <h6 className="font-light pt-2">
            This will help us personalize your experience
          </h6>
        </div>
        <div className="items-center">
          <ul className="list-none p-5">
            {imageList.map((item) => (
              <li
                key={item.id}
                className={`flex items-center md:w-1/2 mx-auto border-2 rounded-md border-gray-100 my-2 hover:border-yellow-300 hover:shadow-md ${
                  selectedOption === item.id
                    ? "border-yellow-300"
                    : "border-gray-100"
                }`}
                onClick={() => handleOptionClick(item.id)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-16 h-16 mr-10px"
                />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
