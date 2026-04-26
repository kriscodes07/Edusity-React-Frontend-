import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/edusity_assets/logo.png'

const Navbar = () => {
  const [sticky, setsticky] = useState(false)

  useEffect(()=>{
window.addEventListener('scroll',()=>{
  window.scrollY >900 ? setsticky(true):setsticky(false

  )
})
  },[])

  return (
    <nav className={`container  ${sticky? 'darknav' :'' } `} >
        <img src={logo} alt="" />
        <ul >
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li> <button className='btn'>Contact Us</button> </li>
        </ul>

    </nav>
  )
}

export default Navbar
