import { useState } from 'react';

const useMultistepForm = (stepComponents) => {
  const [currStepIndex, setCurrStepIndex] = useState(0);
  const numOfSteps = stepComponents.length;

  const handleBackStepBtnClick = () => {
    setCurrStepIndex((prevStepIndex) => {
      return prevStepIndex === 0 ? 0 : prevStepIndex - 1; 
    });
  };

  const handleNextStepBtnClick = () => {
    setCurrStepIndex((prevStepIndex) => {
      return prevStepIndex === numOfSteps - 1 ? numOfSteps - 1: prevStepIndex + 1; 
    });
  };

  return ({
    currStepIndex,
    currStepComponent: stepComponents[currStepIndex],
    handleBackStepBtnClick,
    handleNextStepBtnClick,
    numOfSteps,
  })
}

export { useMultistepForm };
