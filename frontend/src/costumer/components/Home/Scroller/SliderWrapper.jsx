import React from "react";
import Carousel from "react-multi-carousel"; // Importing Carousel component
import "react-multi-carousel/lib/styles.css"; // Importing styles for Carousel
import { sliderdata } from "./sliderdata"; // Importing data for the slider items
import ScrollCard from "./ScrollCard"; // Importing ScrollCard component

// Component for wrapping a carousel/slider with a section header
const SliderWrapper = ({ sectionheader }) => {
  // Stop images from dragging
  const imgDrag = {
    WebkitUserDrag: "none",
    KhtmlUserDrag: "none",
    MozUserDrag: "none",
    OUserDrag: "none",
    userDrag: "none",
    userSelect: "none",
  };

  return (
    <div style={imgDrag}>
      {/* Section header */}
      <h2 className="text-2xl font-medium ps-5 mb-3">{sectionheader}</h2>
      {/* Carousel component */}
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 5,
            partialVisibilityGutter: 40,
            centerMode: true,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
            centerMode: true,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
            centerMode: true,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {/* Mapping slider data to ScrollCard components */}
        {sliderdata.map((item, index) => (
          <ScrollCard
            key={item.id || index} // Unique key for each item
            imgSrc={item.image} // Image source
            alt={item.alt} // Alt text for the image
          />
        ))}
      </Carousel>
    </div>
  );
};

export default SliderWrapper; // Exporting SliderWrapper component
