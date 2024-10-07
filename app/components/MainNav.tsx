"use client"
import { client, urlFor } from '../../app/lib/sanity';
import { SearchIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { MegaMenu } from './shared/MegaMenu';
import SearchTrips from './home/SearchTrips';
import styles from './css/MainNav.module.css';
import { Sidebar } from '@/components/component/sidebar';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';

// Function to fetch main navigation data
const fetchData = async () => {
  const query = "*[_type == 'mainNav'][0]";
  const data = await client.fetch(query);
  return data;
};

const MainNav = () => {
  const [data, setData] = useState<any>(null); // State to hold navigation data
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    fetchData().then((fetchedData) => {
      setData(fetchedData);
      setLoading(false); // Set loading to false after data is fetched
    });
  }, []);

  if (loading) {
    return <div className={`w-full pt-2 pb-6 ${styles.skeleton}`}>
      <Skeleton className="w-[6vw] h-[3vw] bg-gray-300 rounded-md" />
      <Skeleton className="w-[30vw] h-[3vw] bg-gray-300 rounded-md" />
    </div>;
  }

  if (!data) {
    return <div>No navigation data available</div>;
  }

  return (
    <div className="w-full z-[999]">
      <div className={`${styles.container} flex items-center pt-2 relative`}>
        {/* Logo */}
        <Link href="/" className={`w-fit`}>
            <h1 className="flex gap-3 text-xl w-full h-full items-center justify-center">Agency <span className="text-primary font-semibold">Logo</span></h1>
      </Link>

        {/* Main Navigation */}
        <div className={`w-full z-[999] mr-16 ${styles.mainnav}`}>
          <MegaMenu />
        </div>

        {/* Sidebar */}
        <div className={`${styles.sidebar}`}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
