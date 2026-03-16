import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Blog = () => {
     const userData=useContext(UserContext)
console.log(userData)
  return (
    <div>
      Blog
      <p>
        Username in Blog : {userData?.name}
    </p>    
    
    </div>
  )
}

export default Blog
