import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


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

    // Function to generate random size for each avatar
   const getRandomSize = () => {
    const sizes = ['w-16 h-16', 'w-24 h-24', 'w-32 h-32']; // Tailwind sizes: small, medium, large
    return sizes[Math.floor(Math.random() * sizes.length)];
  };
    return (
      <div className='w-full h-fit flex flex-col gap-8 justify-between'>
       <div className='avatar-rotate w-full h-[40vh] flex justify-center items-center bg-blue-300 overflow-hidden relative'>
      {/* Image wrapper moving from right to left */}
      <div
        className='absolute flex space-x-4'
        style={{
            animation: 'moveLeft 30s linear infinite',
        }}
      >
        {travelImages.map((item, index) => (
          <div
            key={index}
            className={`rounded-full overflow-hidden ${getRandomSize()} bg-gray-200`}
          >
            <img src={item} alt="travel" className='w-full h-full object-cover' />
          </div>
        ))}
      </div>

      {/* Inline Style Tag for Custom Animation */}
      <style>{`
        @keyframes moveLeft {
          0% {
            transform: translateX(100vw); /* Start from the right side */
          }
          100% {
            transform: translateX(-100vw); /* Move to the left side */
          }
        }
      `}</style>
            </div>


        <div className='testimonials flex flex-col items-center w-full h-fit'>
          <h1 className='font-sans font-semibold text-4xl'>Love From Our Travelers</h1>
          <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
           >
      <CarouselContent className=''>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 bg-red-300">
            <div className="p-1">
              <Card className='bg-blue-300 text-white'>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>


        </div>
            </div>
  )
}

export default Testimonials