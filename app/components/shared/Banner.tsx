// pages/index.tsx
import React from 'react';
import BannerCarousel from '@/app/components/home/BannerCarousel';
import { client } from '@/app/lib/sanity';
import { CategoryItem } from '@/app/interface';
import Reviews from '../home/Reviews';

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

  // console.log("Fetched Data:", data); // Debug the fetched data

  return data;
}
export async function getReviews() {
  const query = `*[_type == "reviews"]{
    name,
    review,
    stars
  }`;

  const data = await client.fetch(query);
  console.log("Fetched Review Data:", data); // data is an array of reviews
  return data;
}

const HomePage = async () => {
  const data = await getServerSideProps();
  const reviews = await getReviews();
  console.log("this",reviews);
  return (
    <div>
      <BannerCarousel bannerImages={data} />
      <Reviews reviews={reviews} />
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