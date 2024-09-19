"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const BannerTrip = ({ data }) => {
  const safeData = Array.isArray(data) ? data : [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const fallbackImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png";

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      safeData.length > 0 ? (prevIndex === safeData.length - 1 ? 0 : prevIndex + 1) : 0
    );
  };


  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      safeData.length > 0 ? (prevIndex === 0 ? safeData.length - 1 : prevIndex - 1) : 0
    );
  };


  useEffect(() => {
    const interval = setInterval(goToNext, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);


  
  const imageSrc = (safeData.length > 0 && currentIndex >= 0 && currentIndex < safeData.length)
    ? safeData[currentIndex]
    : fallbackImage;

  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full relative overflow-hidden rounded-lg shadow-lg">
        <Image
          src={imageSrc}
          alt={`carousel-${currentIndex}`}
          fill
          style={{ objectFit: "cover" }}
          className="w-full h-64 md:h-96 object-cover transition-transform duration-500"
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 border text-white text-2xl p-2 rounded-full hover:bg-opacity-80 focus:outline-none"
      >
        <ChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900 bg-opacity-70 border text-white text-2xl p-2 rounded-full hover:bg-opacity-80 focus:outline-none"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default BannerTrip;
