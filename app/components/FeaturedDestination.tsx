import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { client } from '../lib/sanity';
import { TourCard } from '../interface';

async function getData() {
  const query = `*[_type == "tourCard"]{
    name,
    'imageUrl': image.asset->url,
    location,
    description,
    slug,
    price
  }`;

  const data: TourCard[] = await client.fetch(query);

  return data;
}

const FeaturedDestination = async () => {
  const data = await getData();
  console.log(data)

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
          <Link href={item.slug.current} key={index} className='w-full flex flex-col gap-4 h-fit rounded-xl overflow-hidden'>
            <div className='w-full h-[16vw] shadow-lg rounded-2xl overflow-hidden'>
              <img
                src={item.imageUrl}
                alt="category image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className='flex flex-col gap-3 px-2'>
              <h1 className='font-sans text-xl font-semibold capitalize'>{item.name}</h1>
              <div className='flex flex-col gap-6'>
                <h3
                  className='font-lato text-sm text-[#666666] leading-snug font-light'
                  dangerouslySetInnerHTML={{ __html: truncateText(item.description, 83, true) }}
                ></h3>
                <div className='w-full bg-[#F7F7F7] rounded-b-2xl'>
                  <div className='flex items-center justify-between px-3 py-3'>
                    <div className='flex flex-col'>
                      <h3 className='font-lato text-sm text-[#666666] leading-snug'>
                        {truncateText(item.location, 20, false)}
                      </h3>
                      <h1 className='font-lato text-xl font-semibold'>₹{item.price}</h1>
                    </div>
                    <div className='py-2 px-3 text-sm shadow-md bg-primary rounded-full text-white'>
                      See More
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FeaturedDestination;
