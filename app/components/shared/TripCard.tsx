// components/TripCard.tsx
'use client'; // Mark as a Client Component

import Link from 'next/link';
import React from 'react';
import { TourCard } from '../../interface';

const TripCard = ({ slug, imageUrl, price, description, location, name }: TourCard) => {
  // console.log(slug)
  const truncateText = (text: string, limit: number, isDescription: boolean) => {
    if (text.length > limit) {
      return isDescription ? `${text.slice(0, limit)}... <span className='text-[#013E7E]'>more</span>` : `${text.slice(0, limit)}...`;
    }
    return text;
  };

  return (
    <Link href={`/${slug}`} className='w-full flex flex-col gap-4 h-fit rounded-xl overflow-hidden'>
            <div className='w-full h-[16vw] shadow-lg rounded-2xl overflow-hidden'>
              <img
                src={imageUrl}
                alt="category image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className='flex flex-col gap-3 px-2'>
              <h1 className='font-sans text-xl font-semibold capitalize'>{name}</h1>
              <div className='flex flex-col gap-6'>
                <h3
                  className='font-lato text-sm text-[#666666] leading-snug font-light'
                  dangerouslySetInnerHTML={{ __html: truncateText(description, 83, true) }}
                ></h3>
                <div className='w-full bg-[#F7F7F7] rounded-b-2xl'>
                  <div className='flex items-center justify-between px-3 py-3'>
                    <div className='flex flex-col'>
                      <h3 className='font-lato text-sm text-[#666666] leading-snug'>
                        {truncateText(location, 20, false)}
                      </h3>
                      <h1 className='font-lato text-xl font-semibold'>₹{price}</h1>
                    </div>
                    <div className='py-2 px-3 text-sm shadow-md bg-primary rounded-full text-white'>
                      See More
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
  );
};

export default TripCard;
