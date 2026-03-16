import { createContext, useEffect, useState } from "react";


export const UserContext=createContext(null)


const UserProvider=({children})=>{


    // const [token,setToken]=useState('lkasjdlkfjsad')

    const userObj={
        name:'john',token:'asfsdfsd',removeTokenFn
    }
    
    function removeTokenFn(){
        console.log('remove')
       delete userObj.token
       console.log(userObj)
    }


    useEffect(()=>{

    },[userObj])

    return <UserContext.Provider value={userObj}>
        {children}
    </UserContext.Provider>
}

export default UserProvider

