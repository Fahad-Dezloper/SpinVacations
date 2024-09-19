"use client"
import { Button } from '@/components/ui/button'
import { ArrowDownLeft, ArrowDownRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import friendly from '@/public/chooseUs/friendly.svg'
import enjoy from '@/public/chooseUs/enjoy.svg'
import vibes from '@/public/chooseUs/vbes.svg'
import local from '@/public/chooseUs/local.svg'
import React from 'react'


const ChooseUs = () => {
  const data = [
    {
      title: 'Friendly Travel Buddies',
      discription: "We're here to help you every step of the way, making sure your trip is as smooth and fun as possible. Think of us as your travel sidekicks!",
      img: friendly,
      bgColor: '#FFF0EC'
    },
    {
      title: 'We Handle the Details, You Enjoy the Fun',
      discription: 'Sit back and relax—we’ve got the planning covered! From booking to organizing, we handle all the boring stuff so you can focus on the fun.',
      img: enjoy,
      bgColor: '#E4F9F9'
    },
    {
      title: 'Dive into Local Adventures',
      discription: 'Skip the tourist traps and dive into real local adventures. We’ll guide you to the hidden gems that make your trip truly unforgettable.',
      img: local,
      bgColor: '#F6F3FC'
    },
    {
      title: 'No Surprises, Just Good Vibes',
      discription: 'With us, what you see is what you get—honest advice and clear plans. No surprises, just good vibes for your entire trip.',
      img: vibes,
      bgColor: '#E3F0FF'
    }
  ]

  return (
      <div className="w-full h-[80vh] flex flex-col gap-14 px-14 items-center mt-[3vw]">
      <div className='flex items-center w-full h-full gap-9'>

        {/* right */}
        <div className='w-[60%] h-[93%] flex flex-col gap-6'>
          <div className='flex font-sans flex-col gap-2 items-start justify-start'>
              <h1 className='text-4xl tracking-tight'>Why Our Travelers Keep Coming Back</h1>
              {/* <div className='w-full h-[0.5px] bg-primary mt-[0.3]'></div> */}
              <h3 className='text-[#666666]'>Every trip, a story worth telling.</h3>
          </div>
          <div className='text-lg flex items-center w-full justify-end text-text gap-3 font-sans font-semibold '>
            Ease your travel with Spin Vacations
            <div className='p-2 ml-2 rounded-full bg-[#F2F4F6] duration-200 hover:text-white border-primary hover:bg-accent border-2'>
              <ArrowUpRight className='rotate-12'/>
            </div>
          </div>
          <div className='w-full h-full overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-accent scrollbar-track-[#F2F4F6]'>
            <div className='flex gap-4 h-full pb-12'>
              {data.map((item, i) => (
                <div key={i} className={`w-[20vw] border shrink-0 h-[18vw] rounded-2xl flex items-center justify-center bg-[${item.bgColor}]`}>
                <div className='w-full h-full flex flex-col gap-4 items-center justify-center'>
                  <div className='w-[8vw] h-[8vw] relative overflow-hidden'>
                    <Image src={item.img} alt="Why choose us" fill style={{ objectFit: "cover" }} />
                  </div>
                  <div className='flex flex-col px-6 gap-2 items-center justify-center'>
                      <h1 className='text-wrap font-semibold text-text font-sans text-center text-sm leading-none'>{item.title}</h1>
                      <p className='text-wrap text-center leading-none text-sm font-lato text-[#666666]'>{item.discription}</p>
                    </div>
                </div>
              </div>
              ))}
              </div>
            </div>
        </div>

         {/* left */}
        <div className='w-[40%] flex flex-col gap-8 items-center'>
          <div className='w-full flex flex-col gap-24 h-full'>
            <div className='w-full flex justify-start relative'>
              <div className='flex px-5 py-2 rounded-full bg-white shadow-gradient-shadow items-center'>
                <div className='text-accent text-sm font-semibold'>🌐 Step 1: &nbsp;</div>
                <div>Visit the website</div>
                <div className='p-1 ml-2 rounded-full bg-[#F2F4F6] border-r-primary border-b-primary border-2'>
                  <ArrowDownRight />
                </div>
              </div>
            </div>
            <div className='w-full flex justify-end relative'>
              <div className='flex px-5 py-2 rounded-full bg-white shadow-gradient-shadow items-center'>
                <div className='p-1 mr-2 rounded-full bg-[#F2F4F6] border-l-primary border-b-primary border-2'>
                  <ArrowDownLeft />
                </div>
                <div className='text-accent text-sm font-semibold'>🤳🏼 Step 2: &nbsp;</div>
                <div>Select the trip and 📞 Us</div>
              </div>
            </div>
            <div className='w-full flex justify-start'>
              <div className='flex px-5 py-3 rounded-full bg-white shadow-gradient-shadow items-center'>
                <div className='text-accent text-sm font-semibold'>🎒 Step 3: &nbsp;</div>
                <div>Pack your bags and <span className='text-accent'>(</span> Less Go <span className='text-accent'>)</span></div>
              </div>
            </div>
                {/* <Image src={map} alt="Support" className='h-full w-full object-cover' layout="responsive" /> */}
          </div>
          <Link href="all-tours">
          <Button className='text-white rounded-full w-fit'>Explore the Trips</Button>
          </Link>
        </div> 
          </div>
    </div>
  )
}

export default ChooseUs