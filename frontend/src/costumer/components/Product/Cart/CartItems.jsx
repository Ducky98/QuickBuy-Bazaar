import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

const CartItems = () => {
  const [count, setCount] = useState(1); // Initial value set to 1
  const handleChange = (event) => {
    // Allow only numbers and backspace key
    const allowedChars = /^[0-9\b]+$/;
    if (allowedChars.test(event.target.value)) {
      const newValue = parseInt(event.target.value);
      if (newValue >= 1) {
        // Enforce minimum value of 1
        setCount(newValue);
      } else {
        setCount(1); // If the entered value is less than 1, set it to 1
      }
    }
  };
  return (
    <div className="p-5   border rounded-md w-full ">
      <div className="grid lg:grid-cols-6 gap-x-4">
        <div className="w-[5rem] h-[5rem] lg:w-[8rem] lg:h-[8rem] lg:col-span-1 col-span-6">
          <img
            className="w-full h-full object-cover object-top"
            src="https://source.unsplash.com/random/clothes"
            alt=""
          />
        </div>
        <div className="m-1 space-y-1 lg:col-span-5 col-span-6">
          <div className="flex">
            <p className="font-semibold text-xs lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate non cumque accusamus.
            </p>
          </div>
          <p className="opacity-70">Size: L</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-xl">₹800</div>
              <div className="text-xs ms-4 mt-1">₹40 Delivery & Shiping </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setCount(count - 1)}
                disabled={count === 1} // Disable if count is 1
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-2 rounded inline-flex items-center ${
                  count === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <ChevronLeftIcon />
              </button>

              <input
                type="text" // Change to text for normal input
                value={count}
                onChange={handleChange}
                className="mx-2 border border-gray-300 text-gray-700 rounded p-1 w-16 text-center"
              />
              <button
                onClick={() => setCount(count + 1)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded inline-flex items-center"
              >
                <ChevronRightIcon />
              </button>
            </div>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
