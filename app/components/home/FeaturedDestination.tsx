import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { client } from '@/app/lib/sanity';
import { TourCard } from '../../interface';
import TripCard from '../shared/TripCard';

async function getData() {
  const query = `*[_type == "destinations"]{
  name,
    'imageUrl': image.asset->url,
    location,
    description,
    'slug': slug.current,
    price
    }`;

  const data: TourCard[] = await client.fetch(query);

  return data;
}

const FeaturedDestination = async () => {
  const data = await getData();
  // console.log(data)

  const truncateText = (text: string, limit: number, isDescription: boolean) => {
    if (text.length > limit) {
      return isDescription ? `${text.slice(0, limit)}... <span className='text-[#013E7E]'>more</span>` : `${text.slice(0, limit)}...`;
    }
    return text;
  };

  return (
    <div className='w-full flex flex-col gap-7 h-fit px-20 py-10'>
      <div className='flex justify-between items-center'>
        <div>
          <h3 className='text-[#666666]'>Top Destination</h3>
          <h1 className='font-sans text-4xl'>Explore Top Destinations</h1>
        </div>
        <div className='flex items-center gap-3'>
          <div className='p-3 rounded-full border-2 border-primary'>
            <ChevronLeft />
          </div>
          <div className='p-3 rounded-full border-2 border-primary'>
            <ChevronRight />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 justify-items-center px-3 h-full gap-6 w-full gap-y-8 grid-rows-2'>
        {data.map((item: TourCard, index) => (
          <TripCard key={index} slug={item.slug} imageUrl={item.imageUrl} name={item.name} description={item.description} location={item.location} price={item.price} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedDestination;
