// app/category/[slug]/page.tsx

import { client } from '@/app/lib/sanity';
import TripCard from '@/app/components/shared/TripCard';
import styles from '../../components/css/Categorypage.module.css'

// Function to fetch trips based on category slug
async function getTripsByCategory(slug: string) {
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
  return trips;
}

interface TripCardProps {
  slug: {
    current: string;
  };
  featuredImageUrl: string;
  name: string;
  avgprice: number;
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
      vehicleType?: string;
    };
  };
}

// Component for category trips page
const CategoryTripsPage = async ({ params }: { params: { slug: string } }) => {
  const trips = await getTripsByCategory(params.slug); // Fetch trips by category

  return (
    <div className={`w-full flex flex-col ${styles.container} gap-7 h-fit px-20 py-10`}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-[#666666]">Trips in Category</h3>
          <h1 className={`font-sans text-4xl ${styles.heading}`}>Explore Trips</h1>
        </div>
      </div>

      <div className={`grid grid-cols-3 ${styles.tripsCont} justify-items-center h-full gap-6 w-full gap-y-8 grid-rows-2`}>
        {trips.map((item :TripCardProps, index) => (
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

export default CategoryTripsPage;
