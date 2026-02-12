import React from 'react'

const Card = ({title,children}) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <h2>{children}</h2>
    </div>
  )
}

export default Card







