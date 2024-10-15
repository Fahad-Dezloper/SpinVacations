import { client } from '@/app/lib/sanity';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Loading from '../home/Loading';
import Link from 'next/link';

type trip = {
  name: string;
    imageUrl: string;
    slug: {
        current: string;
  }
};

const badges = [
  { label: 'Desert', bgColor: 'bg-gray-200', textColor: 'text-gray-400' },
  { label: 'Mountain', bgColor: 'bg-gray-200', textColor: 'text-gray-400' },
  { label: 'Temples', bgColor: 'bg-gray-200', textColor: 'text-gray-400' },
  { label: 'Safari', bgColor: 'bg-gray-200', textColor: 'text-gray-400' },
  { label: 'International', bgColor: 'bg-gray-200', textColor: 'text-gray-400' },
  { label: 'Indian', bgColor: 'bg-gray-200', textColor: 'text-gray-400' },
  { label: 'Beaches', bgColor: 'bg-gray-200', textColor: 'text-gray-400' },
  { label: 'Many more...', bgColor: 'bg-gray-400', textColor: 'text-white' }
];

const fetchFeaturedTrips = async () => {
  const query = `*[_type == "mainNav"][0]{
    featuredTrips[]->{
      name,
      "imageUrl": featuredImage.asset->url,
      slug
    }
  }`;

  const data = await client.fetch(query);
  return data;
};

const NavTour = () => {
  const [data, setData] = useState<trip[]>([]); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    fetchFeaturedTrips()
      .then((fetchedData) => {
        console.log(fetchedData); // Debugging: Log the fetched data
        setData(fetchedData.featuredTrips || []); // Set data to the array of featuredTrips
      })
      .catch((error) => console.error('Error fetching data:', error))
      .finally(() => setLoading(false)); // Ensure loading is set to false after data is fetched
  }, []);

  if (loading) return <Loading />; // Show loading state until data is fetched

  if (!Array.isArray(data) || data.length === 0) {
    return <div>No trips found.</div>; // Handle case where no trips are available
  }

  return (
    <div className='text-white'>
      <h1 className='text-lg font-sans text-text'>Top Tours</h1>
      <div className='flex gap-4 justify-between'>
        <div className='flex gap-3'>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-2'>
              {data.map((item, i) => (
                <Link href={item.slug.current} key={i} className='w-[15vw] h-[10vw] rounded-lg relative overflow-hidden'>
                  {/* Image with overlay */}
                  <Image
                    src={item.imageUrl || ''} // Ensure valid image URL
                    alt={item.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='w-full h-full object-cover'
                  />
                  {/* Black overlay with gradient */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'></div>
                  {/* Title text */}
                  <h1 className='absolute bottom-2 left-2 text-white text-lg font-bold'>
                    {item.name}
                  </h1>
                </Link>
              ))}
            </div>
          </div>    
        </div>
              
    

              <div className='w-full flex flex-col gap-3'>
                    <div className='flex flex-col gap-3'>
                    <div className='flex flex-wrap gap-3'>
                        {badges.map((badge, index) => (
                            <Link key={index} href={`https://spin-vacations.vercel.app/category/${badge.label.toLowerCase()}`}>
                            <Badge
                                className={`${badge.bgColor} text-sm hover:bg-primary hover:text-white duration-200 ${badge.textColor}`}
                            >
                                {badge.label}
                            </Badge>
                            </Link>
                        ))}
                    </div>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-6 h-full'>
                        <h1 className='text-xl font-sans text-text'>More here 👇🏼</h1>
                        <div className='flex gap-3'>
                            <button className='font-bold text-sm py-2 px-4 rounded-full border-accent text-[#666666] border hover:bg-primary-dark'>Explore more</button>
                            <Link href="https://wa.me/9910025306?text=Hi,%20Spin%20Vacations!%20I%27m%20interested%20in%20planning%20a%20trip%20with%20you" className='text-white font-bold text-sm py-2 px-4 rounded-full bg-primary hover:bg-primary-dark'>Contact Us</Link>
                        </div>
                    </div>
                </div>
      </div>
    </div>
  );
};

export default NavTour;
