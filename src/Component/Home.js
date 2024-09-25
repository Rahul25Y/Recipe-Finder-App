import React from 'react'
import NavBar from './NavBar'
import PopularSider from './PopularSider'
import TredingSlider from './TredingSlider'

function Home() {
  return (
    <>
      <div className='main'>
      <NavBar/>
      <PopularSider/>
      <TredingSlider/>
      </div>
      
    </>
  )
}

export default Home
