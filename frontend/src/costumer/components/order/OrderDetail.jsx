import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Grid, Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";

const OrderDetail = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid className="space-y-5" container>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => ( // Added parentheses here
          <Grid
            key={index} // Added key prop to avoid warning
            item
            container
            className="shadow rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={12} md={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://source.unsplash.com/random"
                  alt=""
                />
                <div className="space-y-2">
                  <p className="font-semibold ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="opacity-50 text-xs">
                    <b>Size:</b> M
                  </p>
                  <p>₹8000</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ color: deepPurple[500] }}>
                <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-2xl" />
                <span>Rate & Review</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetail;
