import React from 'react'

const Pagination = ({
  currPageNum, 
  totalPageNum
}) => {

  return (
    <div className='pagination'>
      {currPageNum} / {totalPageNum}
    </div>
  )
}

export default Pagination;
