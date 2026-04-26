import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallary from './Components/Gallary/Gallary'



function App() {
  

  return (
    <>
     <Navbar/>
     <Hero/>
     <Title title="Our Programs" subtitle="What we Offer" />
     <Programs/>
     <About/>
      <Title title="Gallary" subtitle="Campus Photos" />
      <Gallary/>
        <Title title="Testimonials" subtitle="What Student Says " />
    </>
  )
}

export default App
