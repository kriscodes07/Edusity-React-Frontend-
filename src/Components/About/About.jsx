import React from 'react'
import './About.css'
import aboutimage from '../../assets/edusity_assets/about.png'
import playicon from '../../assets/edusity_assets/play-icon.png'


const About = () => {
  return (
    <div className='about container'>
        <div className="aboutleft">

<img src={aboutimage} alt="" className='aboutimage' />
<img src={playicon} alt="" className='playicon' />
        </div>

        <div className="aboutright">
<h3>About University</h3>
<h2>Nuturing Tomorrow's Leaders Today</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veritatis commodi in eligendi tempora mollitia impedit inventore placeat tenetur quam a consequatur quaerat dolor id, ab accusamus maiores, possimus consectetur!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veritatis commodi in eligendi tempora mollitia impedit inventore placeat tenetur quam a consequatur quaerat dolor id, ab accusamus maiores, possimus consectetur!
   
</p>
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veritatis commodi in eligendi tempora mollitia impedit inventore placeat tenetur quam a consequatur quaerat dolor id, ab accusamus maiores, possimus consectetur!</p>
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veritatis commodi in eligendi tempora mollitia impedit inventore placeat tenetur quam a consequatur quaerat dolor id, ab accusamus maiores, possimus consectetur!</p>
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veritatis commodi in eligendi tempora mollitia impedit inventore placeat tenetur quam a consequatur quaerat dolor id, ab accusamus maiores, possimus consectetur!</p>
        </div>
      
    </div>
  )
}

export default About
