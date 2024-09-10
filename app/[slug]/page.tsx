// app/trip/[slug]/page.tsx

import { client } from '@/app/lib/sanity';

// Define the query to fetch a specific trip by slug
async function getTripBySlug(slug: string) {
  const query = `*[_type == "destinations" && slug.current == $slug][0]{
    name,
    description,
    location,
    price,
    'imageUrl': image.asset->url,
    categories[]->{
      name,
      'categorySlug': slug.current
    }
  }`;

  const trip = await client.fetch(query, { slug });
  return trip;
}

// Page component to display trip details
const TripDetailPage = async ({ params }: { params: { slug: string } }) => {
  const trip = await getTripBySlug(params.slug);

  // If no trip is found, return a 404 page
  if (!trip) {
    return <div>Trip not found</div>;
  }

  return (
    <div className="w-full h-fit px-20 py-10 flex flex-col gap-8">
      <div className="flex flex-col items-start">
        <h1 className="font-sans text-4xl">{trip.name}</h1>
        <p className="text-lg text-gray-600">{trip.description}</p>
        <p className="text-md font-semibold text-gray-500">
          Location: {trip.location}
        </p>
        <p className="text-md font-semibold text-gray-500">
          Price: ${trip.price}
        </p>

        {/* Image */}
        <div className="w-full h-[40vh] rounded-lg overflow-hidden my-4">
          <img
            src={trip.imageUrl}
            alt={trip.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mt-4">
          {trip.categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-100 px-3 py-2 rounded-lg text-sm text-gray-700"
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripDetailPage;
