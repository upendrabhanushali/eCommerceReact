import React from 'react'

const Ratings = ({rating}) => {
  return (
    <div style={{padding:"5px 0px 10px 0px"}}>
        {rating.rate}/5 ({rating.count})
    </div>

  )
}

export default Ratings