import React from 'react'
import { useParams } from 'react-router-dom';

const Contact = () => {
   const { userId } = useParams();
  //  console.log(userId) 
  return (
    <div>
      Contact
    </div>
  )
}

export default Contact
