import React, { useId, useRef } from 'react'

const FormInput = ({
  type,
  label,
  field,
  value,
  onUpdateFormData
}) => {

  const inputRef = useRef();
  const id = useId();
  const inputId=`${id}-${field}`;

  if (inputRef.current && type === 'number') {
    inputRef.current.setAttribute('min', 1);
  }

  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <input
        ref={inputRef}
        required
        id={inputId}
        type={type}
        value={value || ''}
        onChange={(e) => {onUpdateFormData({ [field] : e.target.value })}}
      />
  </>
  )
}

export default FormInput;
