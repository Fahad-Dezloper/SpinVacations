// pages/index.tsx
import React from 'react';
import BannerCarousel from '@/app/components/home/BannerCarousel';
import { client } from '@/app/lib/sanity';

// Server-side function to fetch banner data
const fetchBannerImages = async () => {
  const query = `*[_type == "imgBanner"][0]{
    bannerImages[]{
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

const HomePage = async () => {
  const bannerImages = await fetchBannerImages(); // Fetch data
  // console.log(bannerImages);
  if (!bannerImages || bannerImages.length === 0) {
    return <div>No banner images available</div>;
  } // Log to confirm data is passed as props

  return (
    <div>
      <BannerCarousel data={bannerImages} />
    </div>
  );
};

export default HomePage;
