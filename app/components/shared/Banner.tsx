// pages/index.tsx
import React from 'react';
import BannerCarousel from '@/app/components/home/BannerCarousel';
import { client } from '@/app/lib/sanity';

// Server-side function to fetch banner data
export async function getServerSideProps() {
  const query = `*[_type == "imgBanner"][0]{
   bannerImages[]{
     'imageUrl': asset->url,
     caption,
     altText,
     link
   }
 }`;

  const data = await client.fetch(query);

  return data;
}
const HomePage = async () => {
  const data = await getServerSideProps();
  return (
    <div>
      <BannerCarousel bannerImages={data} />
    </div>
  );
};

export default HomePage;



// *[_type == "imgBanner"][0]{
//     bannerImages[]{
//       'imageUrl': asset->url,
//       caption,
//       altText,
//       link
//     }
//   }