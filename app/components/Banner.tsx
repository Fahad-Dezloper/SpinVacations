"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "../../public/image/img1.jpg";
import img2 from "../../public/image/img2.jpg";
import img3 from "../../public/image/img3.jpg";
import img4 from "../../public/image/img4.jpg";
import { motion } from "framer-motion";

const Banner = () => {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbIndexes, setThumbIndexes] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      shiftThumbnails();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const shiftThumbnails = () => {
    setThumbIndexes((prevIndexes) => {
      const updatedIndexes = [...prevIndexes.slice(1), prevIndexes[0]];
      return updatedIndexes;
    });
  };

  return (
    <div className="w-full h-[93vh] relative overflow-hidden bg-black">
      {/* Main Image */}
      <motion.div
        key={currentIndex}
        className="w-full h-full absolute top-0 left-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex}`}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Thumbnails */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {thumbIndexes.map((thumbIndex, i) => (
          <motion.div
            key={thumbIndex}
            className={`h-[20vh] w-[10vw] overflow-hidden rounded-lg ${
              i < 3 ? "z-10" : "z-0"
            }`}
            initial={{ x: i === 3 ? "100%" : 0 }}
            animate={{
              x: i === 3 ? "100%" : `-${i * 10}vw`,
              opacity: i < 3 ? 1 : 0,
            }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={images[thumbIndex]}
              alt={`Thumbnail ${thumbIndex}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
