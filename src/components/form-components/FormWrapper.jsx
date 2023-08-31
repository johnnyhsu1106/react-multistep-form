const FormWrapper = ({
  title,
  children
}) => {
  return (
    <>
      <h2 className='form-title'>{title}</h2>
      <div className='form-wrapper'>
        {children}
      </div>
    </>
  )
}

export default FormWrapper;
