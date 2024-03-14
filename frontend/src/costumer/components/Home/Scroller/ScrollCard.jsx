import React from 'react'
const ScrollSection = ({imgSrc, alt}) => {
  return (
    <div className='cursor-pointer flex flex-col item-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem]'>
      <div className='h-[15rem] w-[10rem] mx-auto'>
        <img className='object-fit w-full h-full' src={imgSrc} alt={alt} />
      </div>
    </div>
  )
}

export default ScrollSection
