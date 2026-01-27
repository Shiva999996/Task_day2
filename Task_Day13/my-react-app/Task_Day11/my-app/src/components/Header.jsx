import React from 'react'

const Header = ({title}) => {
  return (
    <div>
      <header style={{padding: "20px", background: "#4c86c5", color: "#fff" }}>
        <h1>{title}</h1>
      </header>
    </div>
  )
}

export default Header


