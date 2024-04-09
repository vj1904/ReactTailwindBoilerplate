import React from "react";

const StepperControl = ({ handleClick, currentStep, steps, selected }) => {
  return (
    <div className="container flex justify-around mt-4 mb-8">
      {/* <button className='bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out'>
            Back
        </button>
         */}
      <button
        onClick={() => handleClick("next")}
        className={`bg-black/30 text-white py-3 px-8 rounded-lg font-semibold cursor-pointer hover:bg-black hover:text-white transition duration-200 ease-in-out ${
          currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Continue
      </button>
    </div>
  );
};

export default StepperControl;
