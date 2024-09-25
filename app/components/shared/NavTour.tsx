import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import React from 'react'

const NavTour = () => {
  return (
    <div className='text-white'>
        <h1 className='text-lg font-sans text-text'>Top Tours</h1>
        <div className='flex'>
            <div className='flex gap-3'>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-2'>
                    <div className='w-[15vw] h-[10vw] rounded-lg relative overflow-hidden'>
                            {/* Image with overlay */}
                            <Image
                                src="https://cdn.sanity.io/images/4ulpsb6i/production/022e777751e9e629aac870e6b51c9bc5866d921d-876x585.webp?w=2000&fit=max&auto=format"
                                alt="Kashmir"
                                fill
                                style={{ objectFit: "cover" }}
                                className='w-full h-full object-cover'
                            />
                            
                            {/* Black overlay with gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                            {/* Title text */}
                            <h1 className='absolute bottom-2 left-2 text-white text-lg font-bold'>
                                Kashmir
                            </h1>
                    </div>

                    <div className='w-[15vw] h-[10vw] rounded-lg relative overflow-hidden'>
                            {/* Image with overlay */}
                            <Image
                                src="https://cdn.sanity.io/images/4ulpsb6i/production/6a6596c1917e45160b03e0e036bfe619eca3f8a9-3200x1120.jpg?w=2000&fit=max&auto=format"
                                alt="Kathmandu"
                                fill
                                style={{ objectFit: "cover" }}
                                className='w-full h-full object-cover'
                            />
                            
                            {/* Black overlay with gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                            {/* Title text */}
                            <h1 className='absolute bottom-2 left-2 text-white text-lg font-bold'>
                                Vietnam
                            </h1>
                    </div>
                    </div>
                </div>
                
                <div className='w-full flex flex-col gap-3'>
                    <div className='flex flex-col gap-3'>
                    <div className='flex flex-wrap gap-3'>
                        <Badge className='bg-gray-200 text-sm hover:bg-primary hover:text-white duration-200 text-gray-400'>Desert</Badge>
                        <Badge className='bg-gray-200 text-sm hover:bg-primary hover:text-white duration-200 text-gray-400'>Mountains</Badge>
                        <Badge className='bg-gray-200 text-sm hover:bg-primary hover:text-white duration-200 text-gray-400'>Temples</Badge>
                        <Badge className='bg-gray-200 text-sm hover:bg-primary hover:text-white duration-200 text-gray-400'>Safari</Badge>
                        <Badge className='bg-gray-200 text-sm hover:bg-primary hover:text-white duration-200 text-gray-400'>International</Badge>
                        <Badge className='bg-gray-200 text-sm hover:bg-primary hover:text-white duration-200 text-gray-400'>Indian</Badge>
                        <Badge className='bg-gray-200 text-sm hover:bg-primary hover:text-white duration-200 text-gray-400'>Beaches</Badge>
                        <Badge className='bg-gray-400 text-sm hover:bg-primary hover:text-white duration-200 text-white'>Many more...</Badge>
                    </div>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-6 h-full'>
                        <h1 className='text-xl font-sans text-text'>More here 👇🏼</h1>
                        <div className='flex gap-3'>
                            <button className='font-bold text-sm py-2 px-4 rounded-full border-accent text-[#666666] border hover:bg-primary-dark'>Explore more</button>
                            <button className='text-white font-bold text-sm py-2 px-4 rounded-full bg-primary hover:bg-primary-dark'>Contact Us</button>
                        </div>
                    </div>
                </div>

                </div>
        </div>
    </div>
  )
}

export default NavTour