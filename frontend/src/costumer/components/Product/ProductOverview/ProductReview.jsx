import { StarIcon } from "@heroicons/react/20/solid";
import { Avatar, Typography, Button, TextField, Rating } from "@mui/material";
import React, { useState } from "react";
const reviews = [
  {
    id: 1,
    name: "Ram Das",
    avatarSrc: "/static/images/avatar/1.jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum suscipit perferendis deleniti?",
    rating: 3, // Rating out of 5
  },
  {
    id: 2,
    name: "John Doe",
    avatarSrc: "/static/images/avatar/2.jpg",
    content:
      "Consectetur adipisicing elit. Voluptatum suscipit perferendis deleniti?",
    rating: 4, // Rating out of 5
  },
  // Add more reviews here...
];

const ProductReview = () => {
  const [value, setValue] = React.useState(0);

  const [newReview, setNewReview] = useState({
    name: "",
    content: "",
    rating: 0,
  });
  const [reviewsList, setReviewsList] = useState(reviews);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add validation if required
    const updatedReviewsList = [
      ...reviewsList,
      { ...newReview, id: reviewsList.length + 1 },
    ];
    setReviewsList(updatedReviewsList);
    setNewReview({ name: "", content: "", rating: 0 }); // Reset form fields
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          className={`h-5 w-5 flex-shrink-0 ${
            i < rating ? "text-yellow-500" : "text-gray-200"
          }`}
          aria-hidden="true"
        />
      );
    }
    return stars;
  };

  return (
    <section>
      <h2 className="text-3xl px-6 lg:px-10 font-bold font-mono">Reviews</h2>
      <div className="grid grid-cols-12 gap-x-8 gap-y-10 px-10 pt-10">
        <div className="lg:col-span-6 col-span-12">
          {reviewsList.map((review) => (
            <div
              key={review.id}
              className="bg-white p-2 flex border shadow-md my-3"
            >
              <Avatar alt={review.name} src={review.avatarSrc} />
              <div className="ms-4">
                <div className="text-lg">{review.name}</div>
                <div className="text-sm">{review.content}</div>
                <div className="flex items-center mt-1">
                  {renderStars(review.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Review Writing */}
        <div className="lg:col-span-6 col-span-12">
          <h2 className="text-xl mb-4">Write a review about this product.</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="flex items-center gap-4 my-2">
              <Avatar>D</Avatar>
              <div className="font-medium text-xl">Deepak</div>
            </div>
            <TextField
              label="Review"
              name="content"
              value={newReview.content}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={4}
            />
            <div className="my-2">
              <Typography component="legend">Rate Product</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="mt-2 block"
              >
                Submit Review
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductReview;
