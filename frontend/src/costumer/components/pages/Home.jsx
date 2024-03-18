import React from 'react'
import MainCarousel from '../Home/MainCarousel/MainCarousel'
import DisplaySection from '../Home/DisplayStock/DisplaySection'
import SliderWrapper from '../Home/Scroller/SliderWrapper'

const Home = () => {
  return (
    <div>
      <MainCarousel/>
      <DisplaySection/>
      <div className='py-20 space-y-10 px-5 lg:px-10 flex flex-col items-center'>
        <SliderWrapper sectionheader={"Mens Clothers"}/>
        <SliderWrapper sectionheader={"Mens Clothers"}/>
      </div>
    </div>
  )
}

export default Home
