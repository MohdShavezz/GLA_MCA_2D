import React from 'react'
import './Header.css'
import Left from './Left'
import Right from './Right'

let logo='Google'
let links=['Home','About','Blog']
const Header = () => {
  return (
    <nav 
    // style={{color:'red'}}
    >
      {/* <div className="left">LOGO</div>
      <div className="right">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
      </div> */}
      <Left logo={logo}/>
      <Right links={links}/>
    </nav>
  )
}

export default Header
