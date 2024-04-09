import React, { useRef, useState, useEffect } from "react";
import { MdArrowBackIosNew } from "react-icons/md";

const Stepper = ({ steps, currentStep, handleClick }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    const stepState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepRef.current = stepState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div
          className={`flex-auto border-t-4 transition duration-500 ease-in-out ${
            step.completed ? "border-teal-500" : "border-gray-300"
          }`}
        ></div>
      </div>
    );
  });
  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      <button
        onClick={() => handleClick()}
        className={`cursor-pointer ${
          currentStep === 1 ? " opacity-0 cursor-none" : ""
        }`}
      >
        <MdArrowBackIosNew style={{ fontSize: "1.3rem" }} />
      </button>
      {displaySteps}
    </div>
  );
};

export default Stepper;
