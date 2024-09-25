"use client"; // This makes the component client-side

import { ArrowRightIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AllTripsData from '../shared/AllTripsData';
import styles from '../css/AllTours.module.css'

const AllScrollableTours = ({ data }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between items-center'>
            <div>
                <h3 className='text-[#666666]'>Get the best</h3>
                <h1 className={`font-sans ${styles.heading} text-4xl`}>Explore All other Tours</h1>
            </div>
        <div className='flex gap-4 items-center'>
          <div className={`flex gap-4 items-center ${styles.hide}`}>
                <div
                onClick={scrollLeft}
                className='p-3 cursor-pointer rounded-full border-2 border-primary duration-200 hover:bg-accent hover:text-white'
                >
                <ChevronLeft />
                </div>
                <div
                onClick={scrollRight}
                className='p-3 cursor-pointer rounded-full border-2 border-primary duration-200 hover:bg-accent hover:text-white'
                >
                <ChevronRight />
                  </div>
          </div>  
          
                    <div className='flex gap-4 items-center'>
                    <Link href="/all-tours">
              <Button className={`text-white rounded-full ${styles.btnSize} py-6 px-6 flex gap-3 items-center bg-primary`}>
                    <span>View All</span>
                    <ArrowRightIcon />
                    </Button>
                </Link>
                </div>
            </div>
      </div>

      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className='hide-scrollbar flex gap-6 overflow-x-auto whitespace-nowrap'
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* Render the data dynamically */}
        <AllTripsData data={data} />
      </div>
    </div>
  );
};

export default AllScrollableTours;
