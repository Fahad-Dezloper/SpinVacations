"use client"; // This makes it a client-side component

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const formatDate = (dateString) => {
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'th'; // except 11-13
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  const ordinalSuffix = getOrdinalSuffix(day);

  return `${day}${ordinalSuffix} ${month}, ${year}`;
};

const UpcomingData = ({ data }) => { // Accept data as a prop
  return (
    <>
      {data.map((trip, i) => (
        <Link
          href={`/trip/${trip.slug.current}`}
          key={i}
          className='min-w-[25%] cursor-pointer overflow-hidden shadow-gradient-shadow relative h-[50vh] rounded-2xl bg-red-400'
        >
          <Image
            src={trip.imageUrl}
            alt='Tour Image'
            fill
            style={{ objectFit: "cover" }}
            className='w-full h-full object-cover'
          />
          <div className='absolute h-[16vh] w-full px-6 bottom-0 bg-white border-accent border-b-2 rounded-2xl shadow-gradient-shadow'>
            <div className='flex flex-col h-full'>
              <div className='text-xs bg-pgradient flex items-center justify-center w-full rounded-br-2xl rounded-bl-2xl py-[4px]'>
                Leaving on&nbsp;
                <span className='font-semibold' dangerouslySetInnerHTML={{ __html: formatDate(trip.dateOfLeaving) }} />
              </div>
              <div className='flex justify-between w-full h-full items-center'>
                <div className='flex flex-col gap-[4px]'>
                  <div className='flex gap-2 items-center'>
                    <h3 className='text-text text-base font-sans font-semibold'>
                      {trip.name}
                    </h3>
                    <p className='text-gray-500 font-semibold text-xs'>
                      {trip.days === 0 ? '' : `${trip.days}D`} 
                      {trip.days !== 0 && trip.nights !== 0 && <span className='text-accent'> / </span>}
                      {trip.nights !== 0 && `${trip.nights}N`}
                    </p>
                  </div>
                  <div className='flex justify-between items-center'>
                    <p className='font-sans text-xl font-semibold'>₹{trip.avgprice}</p>
                  </div>
                </div>
                <div className='flex justify-center items-center'>
                  <button className='p-2 text-white bg-accent rounded-full'>
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default UpcomingData;
