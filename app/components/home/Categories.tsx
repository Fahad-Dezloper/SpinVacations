"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { CategoryItem } from '../../interface';
import { Image } from 'next-sanity/image';
import { client } from '@/app/lib/sanity';
import styles from '../css/CategorySection.module.css';
import Loading from './Loading';

// Define the expected type for the categories
type CategoryData = {
  categories: CategoryItem[];
};

// Function to fetch category data
const fetchCategories = async () => {
  const query = `*[_type == "categoriesList"][0]{
                  categories[]->{
                    name,
                    'imageUrl': image.asset->url,
                    slug,
                    // Count how many trips belong to this category
                    "tripsCount": count(*[_type == "tripDetails" && references(^._id)])
                  }
              }`;
  const data = await client.fetch(query);
  // console.log("cate", data);
  return data;
};

const Categories = () => {
  const [data, setData] = useState<CategoryData | null>(null); // State to store fetched data

  useEffect(() => {
    // Fetch the data when the component mounts
    fetchCategories().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  if (!data) return <Loading />; // Show loading state if data is not yet fetched

  return (
    <div className={`w-full h-fit ${styles.mainCont} px-20 flex flex-col gap-8`}>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
          <h3 className='text-[#666666]'>Diverse Tours Curated for you</h3>
          <h1 className={`font-sans text-4xl ${styles.heading}`}>Top Categories of Tours</h1>
        </div>
      </div>

      <div className={`grid grid-cols-4 justify-between ${styles.categoriesCont} h-full w-full gap-3 overflow-hidden grid-rows-2`}>
        {data.categories.map((item: CategoryItem, index) => (
          <Link
            href={`/category/${item.slug.current}`}
            key={index}
            className={`w-[20.5vw] ${styles.categoriesEachcont} flex hover:bg-[#ffffffbd] border-[#E4E6E8] border-2 flex-col gap-[0.8rem] rounded-xl h-[18vw] p-3`}
          >
            <div className={`w-full ${styles.imgSize} h-[11vw] relative rounded-xl overflow-hidden`}>
              <Image
                src={item.imageUrl}
                alt="category image"
                fill
                style={{ objectFit: 'cover' }}
                className="h-full w-full object-cover"
              />
            </div>
            <div className='flex flex-col'>
              <h1 className='font-sans text-xl font-semibold'>{item.name}</h1>
              <div className='flex items-center justify-between'>
                <h3 className='font-lato text-base text-[#666666]'>{item.tripsCount} Tours</h3>
                <div className='p-[0.45rem] flex items-center justify-center rounded-full bg-[#F2F4F6]'>
                  <ArrowRightIcon className='h-4 w-4' />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
