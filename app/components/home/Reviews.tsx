// @ts-nocheck
"use client";
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from '../css/Testimonials.module.css';

interface Review {
  review: string;
  stars: number;
  name: string;
}

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews = [] }) => {
  const controls = useAnimation();

  // Automatically rotate reviews infinitely
  useEffect(() => {
    controls.start({
      x: ['0%', '-100%'], // Animate from 0% to -100%
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: reviews.length * 5, // Adjust duration based on number of reviews
        ease: 'linear',
      },
    });
  }, [reviews, controls]);

  // Pause the scrolling when the user is dragging
  const handleDragStart = () => {
    controls.stop(); // Stop the animation
  };

  // Resume the scrolling animation after dragging
  const handleDragEnd = () => {
    controls.start({
      x: ['0%', '-100%'], // Animate from 0% to -100%
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: reviews.length * 5, // Adjust duration as needed
        ease: 'linear',
      },
    });
  };

  return (
    <div
      className={`h-full ${styles.reviewsSection} absolute w-[80vw] top-[17vw] rounded-md flex flex-col items-center gap-4 overflow-hidden`}
    >
      <div className="flex flex-col gap-1 items-center w-full justify-center">
        <h2 className={`font-sans ${styles.heading} text-4xl`}>
          Love From Our Travellers
        </h2>
        <h3 className="text-[#666666]">Don&apos;t believe our words</h3>
      </div>
      <div className="relative w-full h-fit overflow-hidden rounded-2xl">
        <motion.div
          className="flex w-full gap-4 cursor-grab" // Cursor changes to 'grab'
          animate={controls}
          drag="x" // Allow horizontal dragging
          dragConstraints={{ left: -reviews.length * 100, right: 0 }} // Restrict the drag area
          onDragStart={handleDragStart} // Stop animation on drag
          onDragEnd={handleDragEnd} // Resume animation after drag
          style={{ display: 'flex', whiteSpace: 'nowrap' }} // Keep reviews in a single row
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`p-4 shadow-md ${styles.reviewCard} h-[20vw] bg-white flex flex-col justify-between rounded-md w-[25vw] flex-shrink-0`}
            >
              <p
                className={`${styles.testimonials} leading-snug text-gray-600 font-lato text-wrap`}
              >
                &quot;{review.review}&quot;
              </p>
              <div className="w-fit flex flex-col">
                <span
                  className={`${styles.testimonialsH} font-sans font-medium leading-tight`}
                >
                  {review.name}
                </span>
                <div className="w-full h-[2px] bg-primary rounded-full"></div>
              </div>
            </div>
          ))}

          {/* Duplicate the reviews once to create a loop effect */}
          {reviews.map((review, index) => (
            <div
              key={index + reviews.length}
              className={`p-4 shadow-md ${styles.reviewCard} h-[20vw] bg-white flex flex-col justify-between rounded-md w-[25vw] flex-shrink-0`}
            >
              <p
                className={`${styles.testimonials} leading-snug text-gray-600 font-lato text-wrap`}
              >
                &quot;{review.review}&quot;
              </p>
              <div className="w-fit flex flex-col">
                <span
                  className={`${styles.testimonialsH} font-sans font-medium leading-tight`}
                >
                  {review.name}
                </span>
                <div className="w-full h-[2px] bg-primary rounded-full"></div>
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
