import Image from 'next/image'
import React from 'react'

const UpcomingNav = () => {
  return (
    <div className='grid grid-cols-3 w-full h-full gap-4'>
        
        <div className='relative overflow-hidden rounded-lg w-[14.2vw] h-[20vw] bg-blue-400'>
            {/* Image */}
                <Image
                src="https://i.pinimg.com/564x/97/b7/47/97b7478deca26eecb33066f3560aff04.jpg"
                alt="Trip to Maldives"
                fill
                style={{ objectFit: "cover" }}
                className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                {/* Trip Details */}
                <div className="absolute bottom-4 left-4 text-white space-y-2">
                <h2 className="text-2xl font-bold">Maldives Getaway</h2>
                <p className="text-lg">Price: $1200</p>
                <p className="text-lg">Duration: 7 Days</p>
                <p className="text-lg">Destination: Maldives</p>
                </div>
        </div>
        {/* Trip 2 */}
        <div className="relative overflow-hidden w-[14.2vw] h-[20vw] rounded-lg">
            <Image
            src="https://i.pinimg.com/236x/02/21/ad/0221ad079845c3157be2a3e2bef978ce.jpg"
            alt="Trip to Bali"
            fill
            style={{ objectFit: "cover" }}
            className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white space-y-2">
            <h2 className="text-2xl font-bold">Bali Adventure</h2>
            <p className="text-lg">Price: $950</p>
            <p className="text-lg">Duration: 5 Days</p>
            <p className="text-lg">Destination: Bali</p>
            </div>
        </div>
        
        {/* Trip 3 */}
        <div className="relative overflow-hidden w-[14.2vw] h-[20vw] rounded-lg">
            <Image
            src="https://i.pinimg.com/474x/6f/de/28/6fde28d83ecf14413862e98525a51656.jpg"
            alt="Trip to Santorini"
            fill
            style={{ objectFit: "cover" }}
            className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white space-y-2">
            <h2 className="text-2xl font-bold">Santorini Escape</h2>
            <p className="text-lg">Price: $1500</p>
            <p className="text-lg">Duration: 6 Days</p>
            <p className="text-lg">Destination: Santorini</p>
            </div>
        </div>
    </div>
  )
}

export default UpcomingNav