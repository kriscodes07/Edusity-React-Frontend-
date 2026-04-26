import React from 'react'
import './Hero.css'
import darkarrow from '../../assets/edusity_assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure education fir a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge , skills and experinces needed to excekl un the dynamuc fild if education</p>
        <button className='btn'>Explore More <img src={darkarrow} alt="" /> </button>
      </div>
    </div>
  )
}

export default Hero
