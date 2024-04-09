import React from "react";
import Image from "../../img/img1.jpg";

export default function Welcome() {
  return (
    // <div className="flex items-center md:w-1/2 mx-auto border-2 rounded-md border-gray-100 my-2 hover:border-gray-300 hover:shadow-md">
    //   <img src={image} alt="image" className="" />
    //   <span>"title"</span>
    // </div>
    <div className="flex items-center md:w-4/5 mx-auto rounded-md my-8">
      {/* Left half */}
      <div className="flex-1 flex items-center justify-center pr-24">
        <img src={Image} alt="Centered Image" className="md:h-96" />
      </div>

      {/* Right half */}
      <div className="flex-1 flex items-center">
        <div className="text-left">
          <h2 className="text-xl font-bold text-center md:text-left">
            You're in the right place
          </h2>
          <p className="mt-4 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
