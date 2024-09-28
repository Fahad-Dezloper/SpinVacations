"use client"
import { client } from '@/app/lib/sanity';
import React, { useEffect, useState } from 'react';
import AllScrollableTours from './AllScrollableTours';
import styles from '../css/AllTours.module.css';
import Loading from './Loading';

// Define the expected type for the trip details
type Trip = {
  imageUrl: string;
  name: string;
  avgprice: number;
  dateOfLeaving: string;
  days: number;
  nights: number;
  slug: string;
};

// Function to fetch data
const fetchTrips = async () => {
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
  // console.log("from all", data)
  return data;
};

const AllTrips = () => {
  const [data, setData] = useState<Trip[]>([]); // State to store fetched data

  // Fetch data on component mount
  useEffect(() => {
    fetchTrips().then((fetchedData) => {
      setData(fetchedData);
    });

    // real-time subscription 
    const subscription = client.listen('*[_type == "tripDetails"]').subscribe((update) => {
      if (update.result) {
        fetchTrips().then((fetchedData) => {
          setData(fetchedData);
        });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (!data) return <Loading />;

  return (
    <div className={`px-20 ${styles.mainCont} flex flex-col gap-8`}>
      {/* Pass the data to the client component */}
      <AllScrollableTours data={data} />
    </div>
  );
};

export default AllTrips;
