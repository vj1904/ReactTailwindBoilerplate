import React from "react";
import Image from "../../img/img2.jpg";

export default function Complete() {
  return (
    <div className="flex items-center md:w-4/5 mx-auto rounded-md my-8">
      {/* Left half */}
      <div className="flex-1 flex items-center justify-center pr-24">
        <img src={Image} alt="Complete" className="md:h-96" />
      </div>

      {/* Right half */}
      <div className="flex-1 flex items-center">
        <div className="text-left">
          <h2 className="text-xl font-bold text-center md:text-left">
            You're on your way!
          </h2>
          <p className="mt-4 text-center md:text-left italic ">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
          <p className="mt-4 text-left italic font-medium">-Jacob S.</p>
        </div>
      </div>
    </div>
  );
}
