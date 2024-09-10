import React from 'react';

interface Review {
  review: string;
  stars: number;
  name: string;
}

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews = [] }) => { // Fallback to empty array
  console.log(reviews); // Debugging to ensure the reviews are logged correctly

  return (
    <div>
      <h2>Customer Reviews</h2>
      {/* Check if reviews exist */}
      {reviews.length > 0 ? (
        reviews.map((reviewItem, index) => (
          <div key={index} className="review">
            <h3>{reviewItem.name}</h3>
            <p>{reviewItem.review}</p>
            <p>Rating: {reviewItem.stars} stars</p>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default Reviews;
