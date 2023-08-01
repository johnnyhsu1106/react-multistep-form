import React from 'react'

import FormInput from './FormInput';

const FormInputs = ({ 
  inputs, 
  onUpdateFormData 
}) => {

  return (
    inputs.map((input) => {
      const { field } = input;

      return (
        <FormInput
          key={field} 
          {...input}
          onUpdateFormData={onUpdateFormData} />
      )
    })
  )
}

export default FormInputs;
