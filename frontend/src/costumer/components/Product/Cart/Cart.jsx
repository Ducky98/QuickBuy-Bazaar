import React from "react";
import CartItems from "./CartItems";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const handleCheckOut = ()=>{
    navigate('/checkout?step=3')
  }

  return (
    <div className="p-10 grid grid-cols-4 lg:gap-x-16 gap-y-3">
      <div className=" lg:col-span-3 col-span-4 space-y-2">
        <h2 className="text-xl font-bold font-amazon-ember">Cart Item</h2>

        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
      </div>
      <div className=" lg:col-span-1 col-span-4">
        <h2 className="text-xl font-bold font-amazon-ember opacity-80 mb-2">
          Order Detail
        </h2>
        <div className="border rounded-md p-3 space-y-4">
          <div className="flex justify-between">
            <div className="font-bold">Price: </div>
            <div> ₹1000</div>
          </div>
          <div className="flex justify-between">
            <div className="font-bold">Delivery: </div>
            <div> ₹100</div>
          </div>
          <hr />
          <div className="flex justify-between ">
            <div className="font-bold">Total Price: </div>
            <div> ₹1100</div>
          </div>
          <div className="flex justify-between">
            <TextField
              hiddenLabel
              id="RedeemCode"
              label="Redeem Code"
              variant="outlined"
            />
            <Button className="m-1" variant="contained">
              Submit
            </Button>
          </div>
          <small>Use <b>QuickBuy20</b></small>

          <Button onClick={handleCheckOut} className=" w-full" sx={{bgcolor: "purple"}} variant="contained">
              Check Out
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
