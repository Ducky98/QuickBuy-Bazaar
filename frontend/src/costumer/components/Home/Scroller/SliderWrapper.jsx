import React from "react";
import { sliderdata } from "./sliderdata";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ScrollCard from "./ScrollCard";
import { Button } from "@mui/material";
const responsive = {
  0: { items: 1 },
  720: { items: 3 },
  1024: { items: 5 },
};
const SliderWrapper = () => {
  const items = sliderdata.map((item) => (
    <ScrollCard imgSrc={item.image} alt={item.alt} />
  ));

  return (
    <div className="border">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          infinite
          disableDotsControls
        />
        <Button
          className="z-20"
          variant="contained"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
        <Button
          className="z-20"
          variant="contained"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
            bgcolor: "white",
          }}
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(-90deg)", color: "black" }}
          />
        </Button>
      </div>
    </div>
  );
};

export default SliderWrapper;
