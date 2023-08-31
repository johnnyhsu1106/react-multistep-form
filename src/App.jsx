import { useState } from 'react'
import { useMultistepForm } from './hooks/useMultistepForm'

import UserForm from './components/form/UserForm';
import AddressForm from './components/form/AddressForm';
import AccountForm from './components/form/AccountForm';
import Pagination from './components/Pagination';
import NavButtons from './components/NavButtons';

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
    currStepComponent,
    handleBackStepBtnClick,
    handleNextStepBtnClick
  } = useMultistepForm(stepComponents);

  const handleFormDataSubmit = (e) => {
    e.preventDefault();
    
    if (currStepIndex + 1 !== numOfSteps) {
      handleNextStepBtnClick();
      return;
    }
    // Send the data back to the server 
    alert(JSON.stringify(formData, undefined, 4));
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleFormDataSubmit}>
    
        <Pagination
          currPageNum={currStepIndex + 1}
          totalPageNum={numOfSteps}
        />
        
        {currStepComponent}

        <NavButtons 
          currPageNum={currStepIndex + 1}
          totalPageNum={numOfSteps}
          onClickBackBtn={handleBackStepBtnClick}
        />
      
      </form>
    </div>
  )
}

export default App
