"use client"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const BannerCarousel = ({ bannerImages }) => {
  const imagesArray = bannerImages.bannerImages; // Access the array

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
    );
    };
    
    useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 2000); // Change slide every 2 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [imagesArray.length]);

    return (
      <div className="w-full h-[80vh] flex items-center justify-center">
        <div className="relative w-[92vw] h-[75vh] overflow-hidden">
      {/* Left arrow */}
      <button
        className="absolute left-0 top-1/2 bg-white border-2 border-bg-gray-600 rounded-full p-2 text-[#F27638] hover:bg-primary hover:text-white hover:border-primary duration-300 transform -translate-y-1/2 z-10"
        onClick={goToPrevSlide}
      >
        <ArrowLeftIcon className="h-6 w-6" />
      </button>

      {/* Right arrow */}
      <button
        className="absolute right-0 top-1/2 bg-white border-2 border-bg-gray-600 rounded-full p-2 text-[#F27638] hover:bg-primary hover:text-white hover:border-primary duration-300 transform -translate-y-1/2 z-10"
        onClick={goToNextSlide}
      >
        <ArrowRightIcon className="h-6 w-6" />
      </button>

      {/* Carousel images */}
      <div
        className="flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {imagesArray.map((banner, index) => (
          <div key={index} className="min-w-full h-full flex justify-center items-center">
            <a href={banner.link} target="_blank" rel="noopener noreferrer" className="w-[80vw] h-[75vh] overflow-hidden rounded-xl">
              <img
                src={banner.imageUrl}
                alt={banner.altText}
                className="object-cover w-full h-full"
              />
            </a>
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {imagesArray.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-black' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
        </div>
    </div>
  );
};

export default BannerCarousel;
