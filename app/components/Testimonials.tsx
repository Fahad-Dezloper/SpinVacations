import Image from 'next/image'
import React from 'react'


const Testimonials = () => {
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
  
  const reviews = [

  ]
    return (
      <div className='w-full h-screen mt-[4vw] flex flex-col items-center relative'>
       
        <div className='avatar w-full h-[66vh] relative'>
          <div className='w-28 h-28 absolute overflow-hidden shadow-xl bottom-[10vw] right-[5vw] bg-yellow-300 rounded-full'>
        <Image src={travelImages[0]} alt="Travel Image 1" layout='fill' objectFit='cover' />
      </div>
      <div className='w-32 h-32 absolute overflow-hidden shadow-xl bottom-[6vw] left-[4vw] bg-blue-300 rounded-full'>
        <Image src={travelImages[1]} alt="Travel Image 2" layout='fill' objectFit='cover' />
      </div>
      <div className='w-32 h-32 absolute overflow-hidden shadow-xl bottom-0 right-[-3vw] bg-green-300 rounded-full'>
        <Image src={travelImages[2]} alt="Travel Image 3" layout='fill' objectFit='cover' />
      </div>
      <div className='w-16 h-16 absolute overflow-hidden shadow-xl bottom-0 left-[-2vw] bg-red-300 rounded-full'>
        <Image src={travelImages[3]} alt="Travel Image 4" layout='fill' objectFit='cover' />
      </div>
      <div className='w-16 h-16 absolute overflow-hidden shadow-xl top-[6vw] left-[-2vw] bg-red-300 rounded-full'>
        <Image src={travelImages[4]} alt="Travel Image 5" layout='fill' objectFit='cover' />
      </div>
      <div className='w-16 h-16 absolute overflow-hidden shadow-xl top-[6vw] right-[-2vw] bg-red-300 rounded-full'>
        <Image src={travelImages[5]} alt="Travel Image 6" layout='fill' objectFit='cover' />
      </div>
      <div className='w-16 h-16 absolute overflow-hidden shadow-xl top-[4vw] right-[19vw] bg-red-300 rounded-full'>
        <Image src={travelImages[6]} alt="Travel Image 7" layout='fill' objectFit='cover' />
      </div>
      <div className='w-20 h-20 absolute overflow-hidden shadow-xl top-[6vw] right-[26vw] bg-blue-300 rounded-full'>
        <Image src={travelImages[7]} alt="Travel Image 8" layout='fill' objectFit='cover' />
      </div>
      <div className='w-20 h-20 absolute overflow-hidden shadow-xl top-[6vw] left-[30vw] bg-blue-300 rounded-full'>
        <Image src={travelImages[8]} alt="Travel Image 9" layout='fill' objectFit='cover' />
      </div>
      <div className='w-16 h-16 absolute overflow-hidden shadow-xl top-[4.5vw] right-[44vw] bg-green-300 rounded-full'>
        <Image src={travelImages[9]} alt="Travel Image 10" layout='fill' objectFit='cover' />
      </div>
      <div className='w-16 h-16 absolute overflow-hidden shadow-xl top-[9vw] left-[13vw] bg-red-300 rounded-full'>
        <Image src={travelImages[10]} alt="Travel Image 11" layout='fill' objectFit='cover' />
      </div>
      <div className='w-16 h-16 absolute overflow-hidden shadow-xl top-[0.5vw] left-[6.8vw] bg-red-300 rounded-full'>
        <Image src={travelImages[11]} alt="Travel Image 12" layout='fill' objectFit='cover' />
      </div>
      <div className='w-24 h-24 absolute overflow-hidden shadow-xl top-[0.5vw] left-[19vw] bg-green-300 rounded-full'>
        <Image src={travelImages[12]} alt="Travel Image 13" layout='fill' objectFit='cover' />
      </div>
      <div className='w-16 h-16 absolute overflow-hidden shadow-xl top-[0.5vw] left-[35vw] bg-red-300 rounded-full'>
        <Image src={travelImages[13]} alt="Travel Image 14" layout='fill' objectFit='cover' />
      </div>
      <div className='w-24 h-24 absolute overflow-hidden shadow-xl top-[0.5vw] right-[8vw] bg-green-300 rounded-full'>
        <Image src={travelImages[14]} alt="Travel Image 15" layout='fill' objectFit='cover' />
      </div>
      <div className='w-24 h-24 absolute overflow-hidden shadow-xl top-[0.5vw] right-[33vw] bg-green-300 rounded-full'>
        <Image src={travelImages[15]} alt="Travel Image 16" layout='fill' objectFit='cover' />
      </div>
        </div>

        
        
        
        <div className='w-[65vw] h-[60vh] absolute bottom-7 rounded-full flex flex-col gap-6 items-center justify-center py-3'>
          <h1 className='font-sans text-4xl capitalize'>Love from our travelers</h1>
          <div className='w-full h-full flex justify-between'>
            <div className='w-[20vw] rounded-md h-[18vw] bg-white border-2 flex flex-col justify-between'>
              <h3 className='text-base font-lato p-3 text-[#666666] leading-[1.3]  '>One of best  travel planner. I have been travelling with spin vaccation since last 12 years and  they always serve more than expected.
                Perfect itinerary, affordable pricing, nice and polite staff.
              </h3>
              <div className='w-full flex items-center justify-center'>
                <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                </div>
              </div>
              <div className='flex gap-4 items-center pb-3'>
                    <div className='w-[30%] h-[1px] rounded-r-full bg-black'></div>
                    <h1>Himanshu Kumar</h1>
              </div>
            </div>
            <div className='w-[20vw] rounded-md h-[18vw] bg-white border-2 flex flex-col justify-between'>
              <h3 className='text-base font-lato p-3 text-[#666666] leading-[1.3]  '>One of best  travel planner. I have been travelling with spin vaccation since last 12 years and  they always serve more than expected.
                Perfect itinerary, affordable pricing, nice and polite staff.
              </h3>
              <div className='w-full flex items-center justify-center'>
                <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                </div>
              </div>
              <div className='flex gap-4 items-center pb-3'>
                    <div className='w-[30%] h-[1px] rounded-r-full bg-black'></div>
                    <h1>Himanshu Kumar</h1>
              </div>
            </div>
            <div className='w-[20vw] rounded-md h-[18vw] bg-white border-2 flex flex-col justify-between'>
              <h3 className='text-base font-lato p-3 text-[#666666] leading-[1.3]  '>One of best  travel planner. I have been travelling with spin vaccation since last 12 years and  they always serve more than expected.
                Perfect itinerary, affordable pricing, nice and polite staff.
              </h3>
              <div className='w-full flex items-center justify-center'>
                <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                </div>
              </div>
              <div className='flex gap-4 items-center pb-3'>
                    <div className='w-[30%] h-[1px] rounded-r-full bg-black'></div>
                    <h1>Himanshu Kumar</h1>
              </div>
            </div>
          </div>
          </div>
            </div>
  )
}

export default Testimonials