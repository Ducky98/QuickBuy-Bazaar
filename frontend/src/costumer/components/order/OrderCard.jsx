import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate= useNavigate();
  return (
    <div onClick={()=> navigate(`/account/order/${5}`)} className="p-5 shadow-md hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="lg:flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top lg:mr-2"
              src="https://source.unsplash.com/random"
              alt=""
            />
            <div className="space-y-2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹300</p>
        </Grid>
        <Grid item xs={4}>
          <p>
            <AdjustIcon
              sx={{ width: "15px", height: "15px" }}
              className="text-green-600 mr-2"
            />
            <span>Delivered on Mar 03</span>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
