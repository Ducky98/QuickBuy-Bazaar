import React from 'react';
import MainCarousel from '../Home/MainCarousel/MainCarousel';
import DisplaySection from '../Home/DisplayStock/DisplaySection';
import SliderWrapper from '../Home/Scroller/SliderWrapper';

/**
 * Home Component
 * This component represents the home page of the application.
 * It includes the main carousel, display section, and sliders for different categories.
 */
const Home = () => {
  return (
    <div>
      {/* Main Carousel */}
      <MainCarousel/>

      {/* Display Section */}
      <DisplaySection/>

      {/* Slider Wrappers for different categories */}
      <div className='py-20 space-y-10 px-5 lg:px-10 flex flex-col items-center'>
        {/* Slider for Men's Clothes */}
        <SliderWrapper sectionheader={"Men's Clothes"}/>
        
        {/* Slider for Women's Clothes */}
        <SliderWrapper sectionheader={"Women's Clothes"}/>
      </div>
    </div>
  );
};

export default Home;
