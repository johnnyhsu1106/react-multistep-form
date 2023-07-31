import { useId } from 'react'
import FormWrapper from './FormWrapper';
import FormInputs from './FormInputs';



const UserForm = ({
  firstName,
  lastName,
  age,
  onUpdateFormData
}) => {

  const inputs = [
    {type: 'text', label: 'First Name', field: 'firstName', value: firstName},
    {type: 'text', label: 'Last Name', field: 'lastName', value: lastName},
    {type: 'number', label: 'Age', field: 'age', value: age}
  ];

  return (
    <FormWrapper title='Address'>
      <FormInputs inputs={inputs} onUpdateFormData={onUpdateFormData} />
    </FormWrapper>
  )
}

export default UserForm;