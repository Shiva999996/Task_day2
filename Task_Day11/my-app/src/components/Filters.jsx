import React from 'react'

const Filters = ({onFilter}) => {
  return (
    <div className='filters'>
      <button onClick={()=>onFilter("Applied")}>Applied</button>
     <button onClick={()=>onFilter("Interview")}>Interview</button>
      <button onClick={()=>onFilter("Offer")}>Offer</button>
    </div>
  )
}

export default Filters
