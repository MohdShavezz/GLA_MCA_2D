import React, { useEffect, useState } from 'react'
import './Form.css'

const Form = () => {

    // const [name,setName]=useState('')
    // const [email,setEmail]=useState('')
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({ name: '', email: '' })





    function handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }


    function handleSubmit(e) {
        console.log(formData)
        const { name, email } = formData
        e.preventDefault()
        //validate data
        if (name == '' || email == '') {
            console.log('all field required...')
            setError('All field required..')
            return
        }
        console.log(name, email)
    }

    function handleSubmitFormData(e) {
        e.preventDefault()

        const data = new FormData(e.target)
        // console.log(data.get('name'))
        // console.log(data.get('email'))
        console.log(Object.fromEntries(data.entries()))

    }


    return (
        <form onSubmit={handleSubmitFormData}>
            <h2>Fill the Data</h2>
            {/* <input type="text" name="name" placeholder='name' onChange={(e)=>setName(e.target.value)}/> <br />
      <input type="text" name="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/> <br />
      {error && <p style={{color:'red'}}>{error}</p>} */}

            {/* <input type="text" name="name" placeholder='name' onChange={handleChange}/> <br />
      <input type="text" name="email" placeholder='email' onChange={handleChange}/> <br />
      {error && <p style={{color:'red'}}>{error}</p>}  */}

            <input type="text" name="name" placeholder='name' /> <br />
            <input type="text" name="email" placeholder='email' /> <br />
            <button type='submit'>Submit</button>

        </form>
    )
}

export default Form
