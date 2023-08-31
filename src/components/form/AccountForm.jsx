import FormWrapper from '../form-components/FormWrapper';
import FormInputs from '../form-components/FormInputs';


const AccountForm = ({
  email,
  password,
  onUpdateFormData
}) => {

  const inputs = [
    {type: 'email', label: 'Email', field: 'email', value: email},
    {type: 'password', label: 'Password', field: 'password', value: password}
  ];
  
  return (
    <FormWrapper title='Account Setup'>
      <FormInputs inputs={inputs} onUpdateFormData={onUpdateFormData} />
    </FormWrapper>
  )
}

export default AccountForm;