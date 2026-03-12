import React from 'react'

const Right = ({links}) => {
  return (
     <div className="right">
         {
         links.map(ele=>{
           return  <a key={ele} href="#">{ele}</a>
         })
         }
      </div> 
  )
}

export default Right
