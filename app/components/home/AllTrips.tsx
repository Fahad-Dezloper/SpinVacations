import { client } from '@/app/lib/sanity';
import React from 'react';
import AllScrollableTours from './AllScrollableTours';
import styles from '../css/AllTours.module.css'

// Fetch data in the Server Component
async function getData() {
  const query = `*[_type == "tripDetails"]{
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

const AllTrips = async () => {
  const data = await getData(); // Fetch data here

  return (
    <div className={`px-20 ${styles.mainCont} flex flex-col gap-8`}>
      {/* Pass the data to the client component */}
      <AllScrollableTours data={data} />
    </div>
  );
};

export default AllTrips;
