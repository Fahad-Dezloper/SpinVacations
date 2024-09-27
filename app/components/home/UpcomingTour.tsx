"use client"
import React, { useState, useEffect } from 'react';
import ScrollableTours from './ScrollableTours'; // Import the client-side component
import { client } from '@/app/lib/sanity';
import styles from '../css/UpcomingSection.module.css';

// Define the expected structure of the trip data
type Trip = {
  imageUrl: string;
  name: string;
  avgprice: number;
  dateOfLeaving: string;
  days: number;
  nights: number;
  slug: {
    current: string;
  };
};

// Function to fetch upcoming trips
const fetchUpcomingTrips = async () => {
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
};

const UpcomingTour = () => {
  const [data, setData] = useState<Trip[]>([]); // State to hold the upcoming trips data

  useEffect(() => {
    // Fetch the upcoming trips when the component mounts
    fetchUpcomingTrips().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  if (!data) return <div>Loading...</div>
  
  return (
    <div className={`px-20 ${styles.mainCont} flex flex-col gap-8`}>
      {/* Pass the data to the client component */}
      <ScrollableTours data={data} />
    </div>
  );
};

export default UpcomingTour;
