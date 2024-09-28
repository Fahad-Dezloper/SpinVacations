import { client } from '@/app/lib/sanity';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Loading from '../home/Loading';
import Link from 'next/link';

type Trip = {
  name: string;
  slug: {
    current: string;
  };
  avgprice: number;
  featuredImageUrl: string; // Remove quotes for consistency
  packageOverview: {
    tripDuration: {
      days: number;
      nights: number;
    };
  };
};

const fetchUpcomingFeaturedTrips = async () => {
  const query = `*[_type == "mainNav"][0]{
    upcomingFeaturedTrips[]->{
      name,
      slug,
      avgprice,
      "featuredImageUrl": featuredImage.asset->url,
      packageOverview {
        tripDuration {
          days,
          nights
        }
      }
    }
  }`;

  const data = await client.fetch(query);
  return data?.upcomingFeaturedTrips || []; // Ensure you return the correct array
};

const UpcomingNav = () => {
  const [data, setData] = useState<Trip[]>([]); // State to hold the fetched data

  useEffect(() => {
    // Fetch the featured trips when the component mounts
    fetchUpcomingFeaturedTrips().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  // Ensure the loading state is correctly handled
  if (!data || data.length === 0) return <Loading />;

  return (
    <div className='grid grid-cols-3 w-full h-full gap-4'>
      {data.map((item, i) => (
        <Link href={item.slug.current} key={i} className='relative overflow-hidden rounded-lg w-[14.2vw] h-[20vw]'>
          {/* Image */}
          <Image
            src={item.featuredImageUrl}
            alt={item.name}
            fill
            style={{ objectFit: "cover" }}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          {/* Trip Details */}
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <p className="text-sm">Starting from: ₹{item.avgprice}</p>
            <p className="text-sm">
              Duration: {item.packageOverview.tripDuration.days === 0 ? '' : `${item.packageOverview.tripDuration.days}D`} 
                {item.packageOverview.tripDuration.days !== 0 && item.packageOverview.tripDuration.nights !== 0 && <span className='text-accent font-black'> / </span>}
                {item.packageOverview.tripDuration.nights !== 0 && `${item.packageOverview.tripDuration.nights}N`}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UpcomingNav;
