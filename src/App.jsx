import { useState } from 'react'
import { useMultistepForm } from './useMultistepForm'

import UserForm from './UserForm';
import AddressForm from './AddressForm';
import AccountForm from './AccountForm';
import Pagination from './Pagination';
import NavButtons from './NavButtons';

import './App.css'

function App() {
  const [formData, setFormData] = useState({});

  const handleFormDataUpdate = (formData) => {
    setFormData((prevFormData) => {
      return {...prevFormData, ...formData};
    })
  };
  

  const stepComponents = [
    <UserForm {...formData} onUpdateFormData={handleFormDataUpdate} />,
    <AddressForm {...formData} onUpdateFormData={handleFormDataUpdate} />,
    <AccountForm {...formData} onUpdateFormData={handleFormDataUpdate} />
  ];

  const { 
    currStepIndex,
    numOfSteps,
    stepComponent,
    handleBackStepBtnClick,
    handleNextStepBtnClick
  } = useMultistepForm(stepComponents);

  const handleFormDataSubmit = (e) => {
    e.preventDefault();
    if (currStepIndex + 1 !== numOfSteps) {
      return;
    }

    alert(JSON.stringify(formData, undefined, 4));
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleFormDataSubmit}>

        <Pagination
          currPageNum={currStepIndex + 1}
          totalPageNum={numOfSteps}
        />
        
        {stepComponent}

        <NavButtons 
          currPageNum={currStepIndex + 1}
          totalPageNum={numOfSteps}
          onBackBtnClick={handleBackStepBtnClick}
          onNextBtnClick={handleNextStepBtnClick}
        />
      
      </form>

    </div>
  )
}

export default App
