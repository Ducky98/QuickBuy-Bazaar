import React from 'react';

// Component for a scroll section with an image
const ScrollSection = ({ imgSrc, alt }) => {
  // Styles to disable image dragging
  const imgDrag = {
    WebkitUserDrag: 'none',
    KhtmlUserDrag: 'none',
    MozUserDrag: 'none',
    OUserDrag: 'none',
    userDrag: 'none',
    userSelect: 'none'
  };

  return (
    <div className='cursor-pointer flex flex-col item-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-auto my-2'>
      {/* Image container */}
      <div className='h-[15rem] w-[10rem] mx-auto'>
        {/* Image with disabled dragging */}
        <img className='object-fit w-full h-full' src={imgSrc} alt={alt} style={imgDrag} />
      </div>
    </div>
  );
};

export default ScrollSection; // Exporting ScrollSection component
