import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'



function App() {
  

  return (
    <>
     <Navbar/>
     <Hero/>
     <Title title="Our Programs" subtitle="What we Offer" />
     <Programs/>
     <About/>
      <Title title="Gallary" subtitle="Campus Photos" />
    </>
  )
}

export default App
