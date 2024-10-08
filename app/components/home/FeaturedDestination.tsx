"use client"
import { ArrowRightIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { client } from '@/app/lib/sanity';
import TripCard from '../shared/TripCard';
import { Button } from '@/components/ui/button';
import styles from '../css/TopDest.module.css';
import Loading from './Loading';

// Define the expected structure of the trip data
type Trip = {
  name: string;
  slug: {
    current: string;
  };
  avgprice: number;
  featuredImageUrl: string;
  packageOverview: {
    tripDuration: {
      days: number;
      nights: number;
    };
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
      vehicleType: string;
    };
  };
};

// Function to fetch featured trips
const fetchFeaturedTrips = async () => {
  const query = `*[_type == "tripDetails" && isFeaturedTrip == true] {
    name,
    slug,
    avgprice,
    "featuredImageUrl": featuredImage.asset->url,
    packageOverview {
      tripDuration {
        days,
        nights
      },
      meals {
        breakfast,
        lunch,
        dinner
      },
      transport {
        flight,
        train,
        bus,
        localTravelVehicle,
        vehicleType
      }
    }
  }`;

  const data = await client.fetch(query);
  return data;
};

const FeaturedDestination = () => {
  const [data, setData] = useState<Trip[]>([]); // State to hold the fetched data

  useEffect(() => {
    // Fetch the featured trips when the component mounts
    fetchFeaturedTrips().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  if (!data) return <Loading />;

  return (
    <div className={`w-full flex flex-col gap-7 h-fit ${styles.mainCont} px-20`}>
      <div className='flex justify-between items-center'>
        <div>
          <h3 className='text-[#666666]'>Top Destination</h3>
          <h1 className={`font-sans text-4xl ${styles.heading}`}>Explore Top Destinations</h1>
        </div>
        <Link href="/top-destinations">
          <Button className={`text-white ${styles.btnSize} rounded-full py-6 px-6 flex gap-3 items-center`}>
            <span>View All</span>
            <span><ArrowRightIcon /></span>
          </Button>
        </Link>
      </div>

      <div className={`grid grid-cols-3 ${styles.tripCont} justify-items-center h-full gap-7 w-full gap-y-8 grid-rows-2`}>
        {data.map((item, index) => (
           index < 6 && (
          <TripCard
            className={`${styles.griditem}`}
            key={index}
            avgPrice={item.avgprice}
            slug={item.slug}
            imageUrl={item.featuredImageUrl}
            name={item.name}
            days={item.packageOverview.tripDuration.days}
            nights={item.packageOverview.tripDuration.nights}
            meals={item.packageOverview.meals}
            transport={item.packageOverview.transport}
            />
           )
        ))}
      </div>
    </div>
  );
};

export default FeaturedDestination;
