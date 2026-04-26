import React from 'react'
import './Gallary.css'
import g1 from '../../assets/edusity_assets/gallery-1.png'
import g2 from '../../assets/edusity_assets/gallery-2.png'
import g3 from '../../assets/edusity_assets/gallery-3.png'
import g4 from '../../assets/edusity_assets/gallery-4.png'
import darkarrow from '../../assets/edusity_assets/dark-arrow.png'


const Gallary = () => {
  return (
    <div className='gallary'>
        <div className="images">
            <img src={g1} alt="" />
            <img src={g2} alt="" />
            <img src={g3} alt="" />
            <img src={g4} alt="" />
        </div>
                <button className='btn btn1'>See more <img src={darkarrow} alt=""  className='dark-btn'/> </button>
        
      
    </div>
  )
}

export default Gallary
