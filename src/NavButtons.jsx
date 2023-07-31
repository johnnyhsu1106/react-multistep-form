import React from 'react'

const NavButtons = ({
  currPageNum,
  totalPageNum,
  onBackBtnClick,
  onNextBtnClick
}) => {
  return (
    <div className='btn-wrapper'>
      {currPageNum === 1 ? null : 
      <button
        className='btn' 
        type='button'
        onClick={onBackBtnClick}
      >
        Back
      </button>
      }
      <button
        className='btn' 
        type='submit'
        onClick={onNextBtnClick}
      >
        {currPageNum === totalPagination ? 'Submit' : 'Next'}
      </button>
    </div>
  )
}

export default NavButtons;
