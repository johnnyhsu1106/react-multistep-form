import React from 'react'

const NavButtons = ({
  currPageNum,
  totalPageNum,
  onClickBackBtn,
  onClickNextBtn
}) => {

  return (
    <div className='btn-wrapper'>
      {currPageNum === 1 ? null : 
        <button
          className='btn' 
          type='button'
          onClick={onClickBackBtn}
        >
          Back
        </button>
      }
      <button
        className='btn' 
        type='submit'
        onClick={onClickNextBtn}
      >
        {currPageNum === totalPageNum ? 'Submit' : 'Next'}
      </button>
    </div>
  )
}

export default NavButtons;
