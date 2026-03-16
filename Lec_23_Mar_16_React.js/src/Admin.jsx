import React, { useContext } from 'react'
import Blog from './Blog'
import { UserContext } from './UserContext'

const Admin = () => {

    const userData=useContext(UserContext)
    const {removeTokenFn}=userData
    console.log('amdin',userData) 

    if(!userData?.token){
        return <>
            You Are Not Autharized.
        </>
    }

   

  return (
    <div>
      {
        userData?.token&&
        <>
          <h3>Hi Admin</h3>
          <p>
             Username in Admin: {userData?.name}
          </p>
        </>
      }

      <button onClick={removeTokenFn}>remove token</button>

      <Blog/>
    </div>
  )
}

export default Admin
