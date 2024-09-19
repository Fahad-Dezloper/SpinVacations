import { client } from '@/app/lib/sanity';
import React from 'react';
import ScrollableTours from './ScrollableTours'; // Import the client-side component

// Fetch data in the Server Component
async function getData() {
  const query = `*[_type == "tripDetails" && isUpcomingTrip == true]{
    "imageUrl": featuredImage.asset->url,
    name,
    avgprice,
    "dateOfLeaving": upcomingTripDate,
    "days": packageOverview.tripDuration.days,
    "nights": packageOverview.tripDuration.nights,
    slug
  }`;

  const data = await client.fetch(query);
  return data;
}

const UpcomingTour = async () => {
  const data = await getData(); // Fetch data here

  return (
    <div className='px-20 flex flex-col gap-8'>
      {/* Pass the data to the client component */}
      <ScrollableTours data={data} />
    </div>
  );
};

export default UpcomingTour;
