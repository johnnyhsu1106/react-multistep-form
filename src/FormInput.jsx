import React, { useId, useRef } from 'react'

const FormInput = ({
  type,
  label,
  field,
  value,
  onUpdateFormData
}) => {
  const id = useId();
  const inputId=`${id}-${field}`
  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <input
        required
        id={inputId}
        type={type}
        value={value || ''}
        onChange={(e) => {onUpdateFormData({ [field] : e.target.value})}}
      />
  </>
  )
}

export default FormInput;
