import React from 'react'

const Title = ({title, user,}) => {
  return (
    <>
    <h3 style={{color:"CornflowerBlue"}} >{title}</h3>
    <p style={{color:"DarkGoldenRod", fontWeight: "bold"}} >{user}</p>
    
    
    </>
  )
}

export default Title