import Image from 'next/image'
import React from 'react'
import support from '../../public/chooseUs/undraw_travelers_re_y25a.svg'
import map from '../../public/chooseUs/undraw_adventure_map_hnin.svg'


const ChooseUs = () => {
  return (
      <div className="w-full h-screen flex bg-[#fbfaff] flex-col gap-14 px-14 items-center mt-[3vw]">
          <div className='flex font-sans flex-col gap-2 items-center justify-center'>
              <h1 className='text-4xl tracking-tight'>Why Our Travelers Keep Coming Back</h1>
              <div className='w-full h-[0.5px] bg-primary mt-[0.3]'></div>
              <h3 className='text-[#666666]'>Every trip, a story worth telling.</h3>
      </div>
      <div className='flex w-full h-full'>
          <div className='grid w-[60%] grid-cols-3 gap-4 h-[93%] px-3'>
              {/* left */}
          <div className="col-span-1 rounded-xl p-3 flex flex-col justify-end shadow-md gap-3 bg-[#FFDAB9] h-full">
            {/* <Image src={} /> */}
            <h1 className='font-sans text-lg leading-tight font-semibold text-text'>We Handle the Details, You Enjoy the Fun</h1>
            <p className='font-lato text-base leading-tight text-[#666666]'>Sit back and relax—we’ve got the planning covered! From booking to organizing, we handle all the boring stuff so you can focus on the fun.</p>
              </div>
  
                          {/* Right Side */}
          <div className="col-span-2 flex flex-col space-y-4">
                      {/* <!-- Top full-width div --> */}
            <div className="bg-[#E0F7FA] rounded-xl flex flex-col justify-end shadow-md p-3 h-1/2"> 
                        {/* <!-- Content here --> */}
              <h1 className='font-sans text-lg leading-tight font-semibold text-text'>Friendly Travel Buddies</h1>
              <p className='font-lato text-base leading-tight text-[#666666]'>A playful illustration of two people with backpacks, maps, and wide smiles, showing camaraderie.</p>
            </div>
                      
                      {/* <!-- Bottom two half-width divs --> */}
                      <div className="flex space-x-4 h-1/2">
                        <div className="w-1/2 rounded-xl p-3 flex flex-col justify-end shadow-md bg-[#FFFACD]"> 
                {/* <!-- Content here --> */}
                <h1 className='font-sans text-lg leading-tight font-semibold text-text'>Dive into Local Adventures</h1>
                <p className='font-lato text-base leading-tight text-[#666666]'>Skip the tourist traps and dive into real local adventures. We’ll guide you to the hidden gems that make your trip truly unforgettable.</p>
                        </div>
                        <div className="w-1/2 p-3 rounded-xl flex flex-col justify-end shadow-md bg-[#E0FFE0]"> 
                {/* <!-- Content here --> */}
                <h1 className='font-sans text-lg leading-tight font-semibold text-text'>No Surprises, Just Good Vibes</h1>
                <p className='font-lato text-base leading-tight text-[#666666]'>With us, what you see is what you get—honest advice and clear plans. No surprises, just good vibes for your entire trip.</p>
                        </div>
                      </div>
                    </div>
            </div>
{/* <Image src={support} alt="Support" className='h-full w-full object-cover' layout="responsive" /> */}
        
        
        {/* right */}
        <div className='w-[40%] flex items-end justify-end'>
          <div className='w-[33vw]'>
                <Image src={map} alt="Support" className='h-full w-full object-cover' layout="responsive" />
            </div>
        </div>  

          </div>
    </div>
  )
}

export default ChooseUs