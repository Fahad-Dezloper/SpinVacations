// app/category/[slug]/page.tsx

import { client } from '@/app/lib/sanity';
import TripCard from '@/app/components/shared/TripCard';
import { TourCard } from '@/app/interface';

// Function to fetch trips based on category slug
async function getTripsByCategory(slug: string) {
  const query = `*[_type == "destinations" && $slug in categories[]->slug.current]{
    name,
    'imageUrl': image.asset->url,
    location,
    description,
    'slug': slug.current,
    price
  }`;
  const trips: TourCard[] = await client.fetch(query, { slug });
  return trips;
}

// Component for category trips page
const CategoryTripsPage = async ({ params }: { params: { slug: string } }) => {
  const trips = await getTripsByCategory(params.slug); // Fetch trips by category

  return (
    <div className="w-full flex flex-col gap-7 h-fit px-20 py-10">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-[#666666]">Trips in Category</h3>
          <h1 className="font-sans text-4xl">Explore Trips</h1>
        </div>
      </div>

      <div className="grid grid-cols-3 justify-items-center px-3 h-full gap-6 w-full gap-y-8 grid-rows-2">
        {trips.map((trip: TourCard, index) => (
          <TripCard
            key={index}
            slug={trip.slug}
            imageUrl={trip.imageUrl}
            name={trip.name}
            description={trip.description}
            location={trip.location}
            price={trip.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryTripsPage;
