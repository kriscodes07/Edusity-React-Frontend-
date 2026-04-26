import React, { useRef } from 'react'
import './Testimonials.css'

import nexticon from '../../assets/edusity_assets/next-icon.png'
import backicon from '../../assets/edusity_assets/back-icon.png'
import user1 from '../../assets/edusity_assets/user-1.png'
import user2 from '../../assets/edusity_assets/user-2.png'
import user3 from '../../assets/edusity_assets/user-3.png'
import user4 from '../../assets/edusity_assets/user-4.png'

const Testimonials = () => {

const slider=useRef()
let tx=0

const slideforward=()=>{
if(tx > -50){
    tx=-25

}
slider.current.style.transform=`translateX(${tx}%)`

}
const slidebackward=()=>{
if(tx < 0){
    tx +=25

}
slider.current.style.transform=`translateX(${tx}%)`

}




  return (
    <div className='testimonials'>
        <img src={nexticon} alt="" className='nextbtn' onClick={slideforward} />
        <img src={backicon} alt="" className='backbtn' onClick={slidebackward} />
        <div className="slider">
            <ul ref={slider}>
              
                <li>
                    <div className="slide">

                        <div className="userinfo">
                            <img src={user1} alt="" />
                            <div>
                                <h3>Willian Rajput </h3>
                                <span>Edusity , UK</span>
                            </div>
                           
                        </div>
                         <p>Choosing to persue my degree at Edusitu was one of the 
                                best descision I've ever made . The supportive community 
                                ,State-of-the-art facilities ,and commitment to academic excellence
                                hace truly exceeded my exprectations.
                            </p>
                    </div>
                </li>
                  <li>
                    <div className="slide">

                        <div className="userinfo">
                            <img src={user2} alt="" />
                            <div>
                                <h3>Willian Rajput </h3>
                                <span>Edusity , UK</span>
                            </div>
                           
                        </div>
                         <p>Choosing to persue my degree at Edusitu was one of the 
                                best descision I've ever made . The supportive community 
                                ,State-of-the-art facilities ,and commitment to academic excellence
                                hace truly exceeded my exprectations.
                            </p>
                    </div>
                </li>
                  <li>
                    <div className="slide">

                        <div className="userinfo">
                            <img src={user3} alt="" />
                            <div>
                                <h3>Willian Rajput </h3>
                                <span>Edusity , UK</span>
                            </div>
                           
                        </div>
                         <p>Choosing to persue my degree at Edusitu was one of the 
                                best descision I've ever made . The supportive community 
                                ,State-of-the-art facilities ,and commitment to academic excellence
                                hace truly exceeded my exprectations.
                            </p>
                    </div>
                </li>
                  <li>
                    <div className="slide">

                        <div className="userinfo">
                            <img src={user4} alt="" />
                            <div>
                                <h3>Willian Rajput </h3>
                                <span>Edusity , UK</span>
                            </div>
                           
                        </div>
                         <p>Choosing to persue my degree at Edusitu was one of the 
                                best descision I've ever made . The supportive community 
                                ,State-of-the-art facilities ,and commitment to academic excellence
                                hace truly exceeded my exprectations.
                            </p>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
