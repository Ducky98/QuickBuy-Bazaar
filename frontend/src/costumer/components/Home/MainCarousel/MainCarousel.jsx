import React from 'react';
import AliceCarousel from 'react-alice-carousel'; // Importing AliceCarousel component
import 'react-alice-carousel/lib/alice-carousel.css'; // Importing styles for AliceCarousel
import { MainCarouselData } from './MainCarouselData'; // Importing data for the carousel items

// Component for the main carousel
const MainCarousel = () => {
    // Mapping data to carousel items
    const items = MainCarouselData.map((item) => <div className='p-1'><img className='cursor-pointer object-fill w-full' src={item.image} alt=''/></div>);
    
    return (
        <div className='max-w-[1920px] mx-auto'> {/* Container for the carousel */}
            <AliceCarousel
                items={items} // Carousel items
                disableButtonsControls // Disabling default buttons
                autoPlay // Enabling auto play
                autoPlayInterval={3000} // Auto play interval
                infinite // Infinite looping
            />
        </div>
    );
}

export default MainCarousel; // Exporting MainCarousel component
