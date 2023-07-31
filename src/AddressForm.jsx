import FormWrapper from './FormWrapper'
import FormInputs from './FormInputs';


const AddressForm = ({
  street,
  city,
  state,
  zipcode,
  onUpdateFormData
}) => {
  const inputs = [
    {type: 'text', label: 'Street', field: 'street', value: street},
    {type: 'text', label: 'City', field: 'city', value: city},
    {type: 'text', label: 'State', field: 'state', value: state},
    {type: 'text', label: 'Zip Code', field: 'zipcode', value: zipcode}
  ];


  return (
    <FormWrapper title='Address'>
      <FormInputs inputs={inputs} onUpdateFormData={onUpdateFormData} />
    </FormWrapper>
  )
}

export default AddressForm;
