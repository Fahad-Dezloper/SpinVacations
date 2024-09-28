"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from '../css/Banner.module.css'
import Image from "next/image";

const BannerCarousel = ({ data }) => {
  // console.log("hi", data)
  const imagesArray = data ? data : [];

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
    if (imagesArray.length > 0) {
      const intervalId = setInterval(goToNextSlide, 4000); // Change slide every 2 seconds
      return () => clearInterval(intervalId);
    }
  }, [imagesArray.length]);

  if (!imagesArray.length) {
    return <div>No images to display</div>; // Handle case when no images are available
  }

  return (
    <div className={`w-full h-fit ${styles.mainCont} flex items-center justify-center`}>
      <div className={`relative ${styles.container} overflow-hidden`}>
        {/* Left arrow */}
        <button
          className={`absolute left-0 ${styles.icon} top-1/2 bg-white border-2 border-bg-gray-600 rounded-full p-2 text-[#F27638] hover:bg-primary hover:text-white hover:border-primary duration-300 transform -translate-y-1/2 z-10`}
          onClick={goToPrevSlide}
        >
          <ArrowLeftIcon className="h-6 w-6" />
        </button>

        {/* Right arrow */}
        <button
          className={`absolute right-0 ${styles.icon} top-1/2 bg-white border-2 border-bg-gray-600 rounded-full p-2 text-[#F27638] hover:bg-primary hover:text-white hover:border-primary duration-300 transform -translate-y-1/2 z-10`}
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
            <div key={index} className="min-w-full h-full flex relative justify-center items-center">
              <Link
                href={banner.slug ? `/trip/${banner.slug}` : '/'}
                rel="Trip Featured Image"
                className={`${styles.imgSize} overflow-hidden relative`}
              >
                 <Image
                    src={banner.imageUrl}
                    alt={banner.altText || "Banner Image"}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    className="object-cover w-full h-full"
                    sizes="(max-width: 640px) 100vw, (min-width: 641px) and (max-width: 1024px) 80vw, 80vw"
                  />
                {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
                <div className={`absolute top-0 left-0 px-4 py-2 bg-white rounded-br-2xl ${styles.tripname} text-text font-sans font-semibold`}>
                  {banner.name}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {imagesArray.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-gray-500" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
