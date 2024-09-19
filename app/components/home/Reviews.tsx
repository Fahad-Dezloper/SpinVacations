// @ts-nocheck
"use client";
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { fill } from 'three/src/extras/TextureUtils.js';

interface Review {
  review: string;
  stars: number;
  name: string;
}

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews = [] }) => {
  // Duplicate reviews for continuous loop effect
  const extendedReviews = [...reviews, ...reviews, ...reviews];

  const controls = useAnimation();

  // Automatically rotate reviews infinitely
  useEffect(() => {
    const totalWidth = (extendedReviews.length / 3) * 100;
    const scrollDuration = (totalWidth / 3) * 3;
    controls.start({
      x: `-${totalWidth}vw`,
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: scrollDuration, // Adjust duration as needed
        ease: 'linear'
      }
    });
  }, [extendedReviews.length, controls]);

  // Function to generate star icons based on the stars rating
  const renderStars = (stars: number) => {
    const fullStars = Math.floor(stars);
    const starsArray = [];

    for (let i = 0; i < fullStars; i++) {
      starsArray.push(
        <svg
          key={i as React.key}
          className="w-6 h-6 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
      );
    }

    for (let i = fullStars; i < 5; i++) {
      starsArray.push(
        <svg
          key={i as React.key}
          className="w-6 h-6 text-gray-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
      );
    }

    return starsArray;
  };

  return (
    <div className="h-full absolute w-[80vw] top-[17vw] rounded-md flex flex-col items-center gap-4 overflow-hidden">
      <div className="flex flex-col gap-1 items-center w-full justify-center">
        <h2 className="font-sans text-4xl">Love From Our Travellers</h2>
        <h3 className="text-[#666666]">Don&apos;t believe our words</h3>
      </div>
      <div className="relative w-full h-[20vw] overflow-hidden rounded-2xl">
        <motion.div
          className="flex w-full gap-4"
          animate={controls}
          style={{ display: 'flex', whiteSpace: 'nowrap' }}
        >
          {extendedReviews.map((review, index) => (
            <div
              key={index}
              className="p-4 shadow-md h-[20vw] bg-white flex flex-col justify-between rounded-md w-[25vw] flex-shrink-0"
            >
              <p className="text-base leading-snug text-gray-600 font-lato text-wrap">&quot;{review.review}&quot;</p>
              {/* <div className="flex justify-center mb-4 text-xl">
                {renderStars(review.stars)}
              </div> */}
              <div className='w-fit flex flex-col'>
              <span className="text-xl font-sans font-medium leading-tight">
                {review.name}
              </span>
                <div className='w-full h-[2px] bg-primary rounded-full'></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <style jsx>{`
        .carousel:hover {
          animation-play-state: paused; /* Pause animation on hover */
        }
      `}</style>
    </div>
  );
};

export default Reviews;
