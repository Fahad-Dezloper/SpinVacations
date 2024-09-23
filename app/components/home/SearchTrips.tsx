"use client"; // Keep this line at the top

import { useEffect, useState } from 'react';
import { client } from '@/app/lib/sanity';
import Link from 'next/link';

const SearchTrips = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tripResults, setTripResults] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      if (searchQuery.length > 0) {
        const query = `*[_type == "tripDetails" && 
          (name match $searchQuery || 
           packageOverview.bestFor[] match $searchQuery || 
           $searchQuery in packageOverview.travelHighlights[] || 
           categories[]->name match $searchQuery)]{
            _id,
            name,
            "imageUrl": featuredImage.asset->url,
            slug
           }`;
        const params = { searchQuery };

        try {
          const results = await client.fetch(query, params);
          setTripResults(results);
        } catch (error) {
          console.error('Error fetching trips:', error);
        }
      } else {
        setTripResults([]);
      }
    };

    fetchTrips();
  }, [searchQuery]);

  console.log(tripResults)
    return (
      
        <div className='w-full flex flex-col items-center justify-center relative'>
      <input
        type="text"
        placeholder="eg: couples"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-gray-300 rounded-full focus:ring-transparent py-2 px-10 bg-transparent w-full"
      />
          <div className="w-full z-[999] absolute bottom-[-20vw] h-[20vw] overflow-y-auto flex flex-col rounded-2xl ">
            {tripResults.map((trip, i) => (
              <Link href={`/trip/${trip.slug.current}`} key={i} className='h-fit bg-white px-4 py-2 w-full shrink-0 flex gap-3 items-center border-b'>
                <div className='w-[80px] h-[60px] rounded-md overflow-hidden'>
                <img
                    src={trip.imageUrl}
                    alt={trip.name}
                    className="w-full h-full object-cover"
                />
                </div>
                <h1 className='font-semibold text-text text-lg'>{trip.name}</h1>
              </Link>
            ))}
          </div>
          </div>
  );
};

export default SearchTrips;
