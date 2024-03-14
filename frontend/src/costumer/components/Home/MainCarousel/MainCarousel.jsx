import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';


    
const MainCarousel = () => {
    const items = MainCarouselData.map((item) => <div className='p-4'><img className='cursor-pointer object-fill w-full h-[500px]' src={item.image} alt=''/></div>);
    return (
        <div>
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={3000}
            infinite
        />
        </div>
  )
}


export default MainCarousel;