// app/category/[slug]/page.tsx
"use client"
import { useState, useEffect } from 'react';
import { client } from '@/app/lib/sanity';
import TripCard from '@/app/components/shared/TripCard';

// Function to fetch trips based on category slug
const fetchTopTrips = async () => {
  const query = `*[_type == "tripDetails" && isFeaturedTrip == true]{
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
  const trips = await client.fetch(query);
  return trips;
};

const TopTripsPage = () => {
  const [trips, setTrips] = useState<any[]>([]); // State to store the fetched trips
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    fetchTopTrips().then((fetchedTrips) => {
      setTrips(fetchedTrips);
      setLoading(false); // Set loading to false after fetching data
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex flex-col gap-7 h-fit px-20 py-10">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-[#666666]">Featured Trips</h3>
          <h1 className="font-sans text-4xl">Explore Trips</h1>
        </div>
      </div>

      <div className="grid grid-cols-3 justify-items-center px-3 h-full gap-6 w-full gap-y-8 grid-rows-2">
        {trips.map((item, index) => (
          <TripCard
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
        ))}
      </div>
    </div>
  );
};

export default TopTripsPage;
