'use client';

import Link from 'next/link';
import React from 'react';
import styles from '../css/TopDest.module.css'

interface TripCardProps {
  slug: {
    current: string;
  };
  imageUrl: string;
  name: string;
  description?: string;
  location?: string;
  avgPrice: number;
  price?: number;
  days: number;
  nights: number;
  meals: {
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
  };
  transport: {
    flight: boolean;
    train: boolean;
    bus: boolean;
    localTravelVehicle: boolean;
    vehicleType?: string;
  };
  className?: string;
}

const TripCard = ({  slug,
  imageUrl,
  name,
  avgPrice,
  description,
  location,
  price,
  days,
  nights,
  meals,
  transport }: TripCardProps) => {

  return (
    <Link href={`/trip/${slug.current}`} className={`w-full flex shadow-gradient-shadow gradient-shadow flex-col gap-4 h-fit rounded-xl overflow-hidden'`}>
      <div className={`w-full h-[16vw] ${styles.imgSize} shadow-gradient-shadow gradient-shadow rounded-2xl overflow-hidden`}>
              <img
                src={imageUrl}
                alt="category image"
                className="h-full w-full object-cover"
              />
          </div>
      
      <div className='flex flex-col gap-3 px-2'>
        <h1 className='font-sans text-xl px-2 font-semibold capitalize'>
          {name}  
        </h1>
        <div className='flex flex-col gap-3'>
          <div className='flex text-sm flex-col gap-4'>
          <div className='flex px-2 gap-2 items-center text-sm'>
              <h1 className='font-lato whitespace-nowrap'>
                {/* {days}D <span className='text-accent font-black'>/</span> {nights}N */}
                {days === 0 ? '' : `${days}D`} 
                {days !== 0 && nights !== 0 && <span className='text-accent font-black'> / </span>}
                {nights !== 0 && `${nights}N`}
              </h1>
            |
              <h1>
                {transport.flight ? '✈️' : ''}
                {transport.train ? '🚂' : ''}
                {transport.bus ? '🚎' : ''}
              </h1>
            |
            <div className='flex gap-1 items-center'>
              <h1>{meals.breakfast || meals.lunch || meals.dinner ? 'Meal' : ''}</h1>
            </div>
            |
            <h1>Sightseeing</h1>

            </div>
            </div>
          

                <div className='w-full rounded-b-2xl'>
                  <div className='flex items-center justify-between px-3 py-3'>
                    <div className='flex flex-col'>
                      <h3 className='font-lato text-sm font-semibold text-gray-500 leading-snug capitalize'>
                  {/* {truncateText(location, 20, false)} */}
                  Starting from
                      </h3>
                <h1 className='font-sans text-xl'>₹{avgPrice}</h1>
                    </div>
                    <div className='py-2 px-4 text-sm shadow-md bg-primary rounded-full text-white'>
                      Know More
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
  );
};

export default TripCard;
