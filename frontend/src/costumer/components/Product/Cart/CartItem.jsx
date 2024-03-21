import React from 'react';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
      <div className='flex items-center'>
        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
          <img
            className='w-full h-full object-cover object-top'
            src="https://rukminim1.flixcart.com/image/612/612/xif@q/jean/2/q/g/30-jeans-kneecut-black-crishtaliyo-2fashion-original-imagqy6gzmpwqkge.jpeg?q=70"
            alt=""
          />
        </div>
        <div className='m-1 space-y-1'>
          <p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
          <p className='opacity-70'>Size: L, White</p>
          <p className='opacity-70 mt-2'>Seller: Crishtaliyo 2fashion</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
