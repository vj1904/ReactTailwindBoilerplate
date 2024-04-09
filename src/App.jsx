import React, { useState, useEffect } from "react";
import { StepperContext } from "./contexts/StepperContext";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import Discription from "./components/steps/Discription";
import Intrest from "./components/steps/Intrest";
import Welcome from "./components/steps/Welcome";
import Math from "./components/steps/Math";
import Complete from "./components/steps/Complete";
import Loading from "./components/steps/Loading";
import Result from "./components/steps/Result";

function App() {
  const [currentStep, setCurrentSteps] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const [allStepsCompleted, setAllStepsCompleted] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const steps = [
    "Discription",
    "Intrest",
    "Welcome",
    "Math",
    "Complete",
    "Loading",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Discription />;
      case 2:
        return <Intrest />;
      case 3:
        return <Welcome />;
      case 4:
        return <Math />;
      case 5:
        return <Complete />;
      case 6:
        return <Loading />;
      default:
        return null;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentSteps(newStep);
  };

  useEffect(() => {
    if (currentStep === steps.length) {
      // If all steps are completed, setAllStepsCompleted to true
      setAllStepsCompleted(true);
      // Automatically move to the Result page after 4 seconds
      const timer = setTimeout(() => {
        setShowResult(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, steps.length]);

  return (
    <div className="md:w-5/6 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* Stepper */}
      <div className="container horizontal mt-5">
        {/* Conditional rendering of Stepper and Navigation controls */}
        {!showResult && !allStepsCompleted && (
          <Stepper
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}

        {/* Display components */}
        <div className="my-4 p-4">
          <StepperContext.Provider
            value={{
              userData,
              setUserData,
              finalData,
              setFinalData,
            }}
          >
            {showResult ? <Result /> : displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>

      {/* Navigation controls */}
      {!showResult && !allStepsCompleted && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default App;
