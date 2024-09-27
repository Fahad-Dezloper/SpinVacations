"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Reviews from './Reviews'
import { client } from '@/app/lib/sanity'
import styles from '../css/Testimonials.module.css'

type Reviews = {
  name: string;
  review: string;
  stars: number;
};

const fetchReviews = async () => { 
  const query = `*[_type == 'reviews']{
        name,
        review,
        stars
  }`;

   const data = await client.fetch(query);
  // console.log("from all", data)
  return data;
}


const Testimonials = () => {
  const [reviews, setData] = useState<Reviews[]>([]);
  // console.log(reviews);

  // Fetch data on component mount
  useEffect(() => {
    fetchReviews().then((fetchedData) => {
      setData(fetchedData);
    });

    // real-time subscription 
    const subscription = client.listen('*[_type == "reviews"]{name,review,stars}').subscribe((update) => {
      if (update.result) {
        fetchReviews().then((fetchedData) => {
          setData(fetchedData);
        });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);
  
  const travelImages = [
        'https://i.pinimg.com/236x/26/67/42/266742e1a6565d6a94b6b881c441c2a3.jpg',
        'https://i.pinimg.com/564x/9b/d2/48/9bd24846b4cf8410be7f7af43cad1771.jpg',
        'https://i.pinimg.com/564x/0e/5a/0b/0e5a0b704811986fe2de813b0e317404.jpg',
        'https://i.pinimg.com/236x/37/f9/9c/37f99ca950359c9ef059addbb59f16d2.jpg',
        'https://i.pinimg.com/564x/c0/ee/86/c0ee8636d1616ac95e0eaa54fd3e9b88.jpg',
        'https://i.pinimg.com/564x/ab/1b/89/ab1b8952f6bbac124ff915ead2d68757.jpg',
        'https://i.pinimg.com/564x/fd/70/e1/fd70e1cacebf10cb5d2b2aca71e80b7d.jpg',
        'https://i.pinimg.com/564x/98/d4/5c/98d45cddf7e83e93a1fba400a101134f.jpg',
        'https://i.pinimg.com/736x/b4/fa/b8/b4fab80ced26dad46d426acfd46c5d33.jpg',
        'https://i.pinimg.com/236x/e6/d4/df/e6d4df05d8dc3d7cd8f1edc2ebd72105.jpg',
        'https://i.pinimg.com/236x/4f/fe/c0/4ffec039189bf5d455611f51b7040db7.jpg',
        'https://i.pinimg.com/236x/26/67/42/266742e1a6565d6a94b6b881c441c2a3.jpg',
        'https://i.pinimg.com/564x/9b/d2/48/9bd24846b4cf8410be7f7af43cad1771.jpg',
        'https://i.pinimg.com/564x/0e/5a/0b/0e5a0b704811986fe2de813b0e317404.jpg',
        'https://i.pinimg.com/236x/37/f9/9c/37f99ca950359c9ef059addbb59f16d2.jpg',
        'https://i.pinimg.com/564x/c0/ee/86/c0ee8636d1616ac95e0eaa54fd3e9b88.jpg',
        'https://i.pinimg.com/564x/ab/1b/89/ab1b8952f6bbac124ff915ead2d68757.jpg',
        'https://i.pinimg.com/564x/fd/70/e1/fd70e1cacebf10cb5d2b2aca71e80b7d.jpg',
        'https://i.pinimg.com/564x/98/d4/5c/98d45cddf7e83e93a1fba400a101134f.jpg',
        'https://i.pinimg.com/736x/b4/fa/b8/b4fab80ced26dad46d426acfd46c5d33.jpg',
        'https://i.pinimg.com/236x/e6/d4/df/e6d4df05d8dc3d7cd8f1edc2ebd72105.jpg',
        'https://i.pinimg.com/236x/4f/fe/c0/4ffec039189bf5d455611f51b7040db7.jpg',
        'https://i.pinimg.com/564x/fd/70/e1/fd70e1cacebf10cb5d2b2aca71e80b7d.jpg',
        'https://i.pinimg.com/564x/98/d4/5c/98d45cddf7e83e93a1fba400a101134f.jpg',
        'https://i.pinimg.com/736x/b4/fa/b8/b4fab80ced26dad46d426acfd46c5d33.jpg',
        'https://i.pinimg.com/236x/e6/d4/df/e6d4df05d8dc3d7cd8f1edc2ebd72105.jpg',
        'https://i.pinimg.com/236x/4f/fe/c0/4ffec039189bf5d455611f51b7040db7.jpg',
        'https://i.pinimg.com/236x/26/67/42/266742e1a6565d6a94b6b881c441c2a3.jpg',
        'https://i.pinimg.com/564x/9b/d2/48/9bd24846b4cf8410be7f7af43cad1771.jpg',
        'https://i.pinimg.com/564x/0e/5a/0b/0e5a0b704811986fe2de813b0e317404.jpg',
        'https://i.pinimg.com/236x/37/f9/9c/37f99ca950359c9ef059addbb59f16d2.jpg',
        'https://i.pinimg.com/564x/c0/ee/86/c0ee8636d1616ac95e0eaa54fd3e9b88.jpg',
        'https://i.pinimg.com/564x/ab/1b/89/ab1b8952f6bbac124ff915ead2d68757.jpg',
        'https://i.pinimg.com/564x/fd/70/e1/fd70e1cacebf10cb5d2b2aca71e80b7d.jpg',
        'https://i.pinimg.com/564x/98/d4/5c/98d45cddf7e83e93a1fba400a101134f.jpg',
        'https://i.pinimg.com/736x/b4/fa/b8/b4fab80ced26dad46d426acfd46c5d33.jpg',
        'https://i.pinimg.com/236x/e6/d4/df/e6d4df05d8dc3d7cd8f1edc2ebd72105.jpg',
        'https://i.pinimg.com/236x/4f/fe/c0/4ffec039189bf5d455611f51b7040db7.jpg',
  ]

  if (!reviews) return <div>Loading...</div>;

  
    return (
      <div className={`w-full h-[110vh] mt-[4vw] ${styles.mainCont} flex flex-col items-center relative overflow-hidden`}>
       
        <div className={`avatar ${styles.avatar} w-full h-[66vh] relative`}>
          <div className={`w-28 h-28 absolute overflow-hidden shadow-xl ${styles.position1} rounded-full`}>
        <Image src={travelImages[0]} alt="Travel Image 1" fill style={{ objectFit: "cover" }} />
      </div>
      <div className='w-32 h-32 absolute overflow-hidden shadow-xl bottom-[6vw] left-[4vw]  rounded-full'>
        <Image src={travelImages[1]} alt="Travel Image 2" fill style={{ objectFit: "cover" }} />
      </div>
      <div className='w-32 h-32 absolute overflow-hidden shadow-xl bottom-0 right-[-3vw] rounded-full'>
        <Image src={travelImages[2]} alt="Travel Image 3" fill style={{ objectFit: "cover" }} />
      </div>
      <div className='w-16 h-16 absolute overflow-hidden shadow-xl bottom-0 left-[-2vw] rounded-full'>
        <Image src={travelImages[3]} alt="Travel Image 4" fill style={{ objectFit: "cover" }} />
      </div>
      <div className='w-16 h-16 absolute overflow-hidden shadow-xl top-[6vw] left-[-2vw] rounded-full'>
        <Image src={travelImages[4]} alt="Travel Image 5" fill style={{ objectFit: "cover" }} />
      </div>
      <div className='w-16 h-16 absolute overflow-hidden shadow-xl top-[6vw] right-[-2vw] rounded-full'>
        <Image src={travelImages[5]} alt="Travel Image 6" fill style={{ objectFit: "cover" }} />
      </div>
          <div className={`w-16 h-16 absolute overflow-hidden shadow-xl ${styles.position7} rounded-full`}>
        <Image src={travelImages[6]} alt="Travel Image 7" fill style={{ objectFit: "cover" }} />
      </div>
          <div className={`w-20 h-20 absolute overflow-hidden shadow-xl ${styles.position8} top-[6vw] right-[26vw]  rounded-full`}>
        <Image src={travelImages[7]} alt="Travel Image 8" fill style={{ objectFit: "cover" }} />
      </div>
      <div className='w-20 h-20 absolute overflow-hidden shadow-xl top-[6vw] left-[30vw]  rounded-full'>
        <Image src={travelImages[8]} alt="Travel Image 9" fill style={{ objectFit: "cover" }} />
      </div>
      <div className='w-16 h-16 absolute overflow-hidden shadow-xl top-[4.5vw] right-[44vw] rounded-full'>
        <Image src={travelImages[9]} alt="Travel Image 10" fill style={{ objectFit: "cover" }} />
      </div>
          <div className={`w-16 h-16 absolute overflow-hidden shadow-xl ${styles.position11} rounded-full`}>
        <Image src={travelImages[10]} alt="Travel Image 11" fill style={{ objectFit: "cover" }} />
      </div>
      <div className='w-16 h-16 absolute overflow-hidden shadow-xl top-[0.5vw] left-[6.8vw] rounded-full'>
        <Image src={travelImages[11]} alt="Travel Image 12" fill style={{ objectFit: "cover" }} />
      </div>
      <div className={`w-24 h-24 absolute overflow-hidden shadow-xl ${styles.position13} left-[19vw] rounded-full`}>
        <Image src={travelImages[12]} alt="Travel Image 13" fill style={{ objectFit: "cover" }} />
      </div>
        <div className={`w-16 h-16 absolute overflow-hidden shadow-xl ${styles.position14} rounded-full`}>
        <Image src={travelImages[13]} alt="Travel Image 14" fill style={{ objectFit: "cover" }} />
      </div>
          <div className={`w-24 h-24 absolute overflow-hidden shadow-xl ${styles.position15} rounded-full`}>
        <Image src={travelImages[14]} alt="Travel Image 15" fill style={{ objectFit: "cover" }} />
      </div>
          <div className={`w-24 h-24 absolute overflow-hidden shadow-xl ${styles.position16} rounded-full`}>
        <Image src={travelImages[15]} alt="Travel Image 16" fill style={{ objectFit: "cover" }} />
      </div>
        </div>

        {/* <div className='w-full h-12 bg-red-400'></div> */}
        <Reviews reviews={reviews} />
            </div>
  )
}

export default Testimonials