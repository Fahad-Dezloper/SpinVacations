// app/category/[slug]/page.tsx
"use client"
import { client } from '@/app/lib/sanity';
import TripCard from '@/app/components/shared/TripCard';
import styles from '../../components/css/Categorypage.module.css';
import { useEffect, useState } from 'react';

// Define the expected type for the trip details
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

// Function to fetch trips based on category slug
const fetchTripsByCategory = async (slug: string) => {
  const query = `*[_type == "tripDetails" && $slug in categories[]->slug.current]{
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
  const trips = await client.fetch(query, { slug });
  // console.log(trips)
  return trips;
};

// Component for category trips page
const CategoryTripsPage = ({ params }: { params: { slug: string } }) => {
  const [trips, setTrips] = useState<Trip[]>([]); // State to hold the trips

  // Fetch trips when the component mounts
  useEffect(() => {
    fetchTripsByCategory(params.slug).then((fetchedTrips) => {
      setTrips(fetchedTrips);
    });

    // Listen for real-time updates to the trips data
    const subscription = client.listen(`*[_type == "tripDetails" && $slug in categories[]->slug.current]`, { slug: params.slug }).subscribe((update) => {
      if (update.result) {
        fetchTripsByCategory(params.slug).then((fetchedTrips) => {
          setTrips(fetchedTrips);
        });
      }
    });

    // Clean up the subscription when the component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, [params.slug]); // Dependency on slug

  return (
    <div className={`w-full flex flex-col ${styles.container} gap-7 h-fit px-20 py-10`}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-[#666666]">Trips in Category</h3>
          <h1 className={`font-sans text-4xl ${styles.heading}`}>Explore Trips</h1>
        </div>
      </div>

      <div className={`grid grid-cols-3 ${styles.tripsCont} justify-items-center h-full gap-6 w-full gap-y-8 grid-rows-2`}>
        {trips.map((item, i) => (
          <TripCard
            key={i} // Using slug as the key for uniqueness
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

export default CategoryTripsPage;
