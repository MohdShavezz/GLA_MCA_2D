import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import Form from './components/Form'
import FormUncontrol from './components/FormUncontrol'

const App = () => {
  return (
    <div>
      <Header/>
      {/* <h2>this is myapp</h2>
      <p>lasjdf asldjf ksadjf lsadkf ls</p> */}
      {/* <Button radius={'10px'} bgColor={'red'} width ={'6rem'} content={'Login'}/>
      <Button radius={'15px'} bgColor={'pink'} width ={'8rem'} content={'Submit'}/>
      <Button radius={'0px'} bgColor={'gray'} width ={'4rem'} content={'Signup'}/> */}

      {/* <Form/> */}
      <FormUncontrol/>
      <Footer/>
    </div>
  )
}

export default App
