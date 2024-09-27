"use client"
import React, { useState, useEffect } from 'react';
import BannerCarousel from '@/app/components/home/BannerCarousel';
import { client } from '@/app/lib/sanity';

// Function to fetch banner data
const fetchBannerImages = async () => {
  const query = `*[_type == "imgBanner"][0]{
    bannerImages[] {
      _type == "image" => {
        "imageUrl": asset->url,
        caption,
        altText,
      },
      _type == "reference" => {
        "imageUrl": @->featuredImage.asset->url,
        "name": @->name,
        "slug": @->slug.current
      }
    }
  }`;

  const data = await client.fetch(query);
  return data?.bannerImages ?? []; // Return empty array if no data
};

const BannerPage = () => {
  const [bannerImages, setBannerImages] = useState<any[]>([]); // State to hold banner data
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    // Fetch banner images when the component mounts
    fetchBannerImages().then((fetchedBannerImages) => {
      setBannerImages(fetchedBannerImages);
      setLoading(false); // Set loading to false after data is fetched
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!bannerImages || bannerImages.length === 0) {
    return <div>No banner images available</div>;
  }

  return (
    <div>
      <BannerCarousel data={bannerImages} />
    </div>
  );
};

export default BannerPage;
