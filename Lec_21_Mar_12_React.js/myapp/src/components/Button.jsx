import React from 'react'

const Button = (props) => {
    const {radius,bgColor,width,content}=props
  return (
    <div style={{width:width,backgroundColor:bgColor,borderRadius:radius,textAlign:'center',padding:'.4rem'}}>
      {content}
    </div>
  )
}

export default Button
