"use client"
import { useState, useEffect } from 'react';
import { client } from '@/app/lib/sanity';
import TripCard from '@/app/components/shared/TripCard';
import styles from '../components/css/Categorypage.module.css';

// Function to fetch upcoming trips
async function fetchUpcomingTrips() {
  const query = `*[_type == "tripDetails" && isUpcomingTrip == true]{
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
  return await client.fetch(query);
}

// Component for category trips page
const UpcomingTripsPage = () => {
  const [trips, setTrips] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const tripsData = await fetchUpcomingTrips();
        setTrips(tripsData);
      } catch (error) {
        console.error('Error fetching upcoming trips:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`w-full flex flex-col gap-7 h-fit ${styles.container} px-20 py-10`}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-[#666666]">Upcoming Trips</h3>
          <h1 className={`font-sans ${styles.heading} text-4xl`}>Explore Trips</h1>
        </div>
      </div>

      <div className={`grid grid-cols-3 justify-items-center ${styles.tripsCont} h-full gap-6 w-full gap-y-8 grid-rows-2`}>
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

export default UpcomingTripsPage;
