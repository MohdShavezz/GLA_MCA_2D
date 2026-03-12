import React, { useEffect, useRef } from 'react'

const FormUncontrol = () => {

    const nameRef=useRef(null)
    const emailRef=useRef(null)


    function handleClick(e){
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
    }

     useEffect(() => {
    // Focus the input element when the component mounts
    nameRef.current.focus();
  }, []);

    return (
        <form>    
            <h2>Uncontroll Form</h2>
            <input ref={nameRef} type="text" name="name" placeholder='name' /> <br />
            <input ref={emailRef} type="text" name="email" placeholder='email' /> <br />
            <button onClick={handleClick}>Submit</button>

        </form>
    )
}

export default FormUncontrol
