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
import styles from '../css/ChooseUs.module.css'


const ChooseUs = () => {
  const data = [
    {
      title: 'Friendly Travel Buddies',
      discription: "We're here to help you every step of the way, Think of us as your travel sidekicks 🤼!",
      img: friendly,
      bgColor: '#FFF0EC'
    },
    {
      title: 'We Handle the Details, You Enjoy the Fun',
      discription: 'Sit back and relax—we’ve got the planning covered! you can focus on the fun 🥳.',
      img: enjoy,
      bgColor: '#E4F9F9'
    },
    {
      title: 'Dive into Local Adventures',
      discription: 'Dive into real local adventures. We’ll guide you to the hidden gems 💎.',
      img: local,
      bgColor: '#F6F3FC'
    },
    {
      title: 'No Surprises, Just Good Vibes',
      discription: 'With us, what you see is what you get. No surprises, just good vibes.',
      img: vibes,
      bgColor: '#E3F0FF'
    }
  ]

  return (
    <div className={`w-full h-[80vh] ${styles.mainCont} flex flex-col gap-14 px-14 items-center mt-[3vw]`}>
      <div className={`flex ${styles.cont} w-full h-full gap-9`}>

        {/* right */}
        <div className={`w-[60%] ${styles.rightCont} h-[93%] flex flex-col gap-6`}>
          <div className='flex font-sans flex-col gap-2 items-start justify-start'>
              <h1 className='text-4xl tracking-tight'>Why Our Travelers Keep Coming Back</h1>
              {/* <div className='w-full h-[0.5px] bg-primary mt-[0.3]'></div> */}
              <h3 className='text-[#666666]'>Every trip, a story worth telling.</h3>
          </div>
          <div className={`text-lg flex items-center w-full justify-end text-text gap-3 font-sans font-semibold ${styles.stepsHide} `}>
            Ease your travel with Spin Vacations
            <div className='p-2 ml-2 rounded-full bg-[#F2F4F6] duration-200 hover:text-white border-primary hover:bg-accent border-2'>
              <ArrowUpRight className='rotate-12'/>
            </div>
          </div>
          <div className={`w-full h-full ${styles.scroller} overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-accent scrollbar-track-[#F2F4F6]`}>
            <div className={`flex gap-4 flex-none shrink-0 h-fit ${styles.cardCont} w-full items-center pb-12`}>
              {data.map((item, i) => (
                <div key={i} className={`w-[20vw] ${styles.card} flex-none border shrink-0 h-[18vw] rounded-2xl flex items-center justify-center`} style={{ backgroundColor: item.bgColor }}>
                <div className='w-full h-full flex flex-col  gap-4 items-center justify-center'>
                    <div className={`${styles.imgSize} w-[9vw] h-[6vw] relative overflow-hidden`}>
                    <Image src={item.img} alt="Why choose us" fill style={{ objectFit: "cover" }} />
                  </div>
                  <div className='flex flex-col px-6 gap-2 items-center justify-center'>
                      <h1 className={`text-wrap font-semibold text-text font-sans ${styles.title} text-center text-sm leading-none`}>{item.title}</h1>
                      <p className={`text-wrap text-center leading-none ${styles.stepsFont} font-lato text-[#666666]`}>{item.discription}</p>
                    </div>
                </div>
              </div>
              ))}
            </div>
          </div>
          <div className={`text-lg hidden items-center w-full justify-end text-text gap-3 font-sans font-semibold ${styles.stepsH}`}>
            Ease your travel with Spin Vacations
            <div className='p-2 ml-2 rounded-full bg-[#F2F4F6] duration-200 hover:text-white border-primary hover:bg-accent border-2'>
              <ArrowUpRight className={`rotate-[180deg] ${styles.arrow}`}/>
            </div>
          </div>
        </div>

         {/* left */}
        <div className={`w-[40%] ${styles.leftCont} flex flex-col gap-9 items-center`}>
          <div className={`w-full flex flex-col ${styles.leftCont2} gap-12 h-full`}>
            <div className={`w-full flex ${styles.step1} justify-start relative`}>
              <div className={`${styles.stepsFont} flex px-5 py-2 rounded-full bg-white shadow-gradient-shadow items-center`}>
                <div className={`p-1 hidden ${styles.stepshow} mr-2 rounded-full bg-[#F2F4F6] border-l-primary border-b-primary border-2`}>
                  <ArrowDownLeft />
                </div>
                <div className='flex'>
                <div className={`text-accent ${styles.stepsFont} font-semibold`}>🌐 Step 1: &nbsp;</div>
                  <div>Visit the website</div>
                </div>
                <div className={`p-1 ml-2 ${styles.stepsHide} rounded-full bg-[#F2F4F6] border-r-primary border-b-primary border-2`}>
                  <ArrowDownRight />
                </div>
              </div>
            </div>

            <div className={`w-full flex ${styles.step2} justify-end relative`}>
              <div className={`${styles.stepsFont} flex px-5 py-2 rounded-full bg-white shadow-gradient-shadow items-center`}>
                <div className={`p-1 mr-2 ${styles.stepsHide} rounded-full bg-[#F2F4F6] border-l-primary border-b-primary border-2`}>
                  <ArrowDownLeft />
                </div>
                <div className='text-accent font-semibold'>🤳🏼 Step 2: &nbsp;</div>
                <div>Select the trip and 📞 Us</div>
                <div className={`p-1 ml-2 ${styles.stepshow} hidden rounded-full bg-[#F2F4F6] border-r-primary border-b-primary border-2`}>
                  <ArrowDownRight />
                </div>
              </div>
            </div>

            <div className={`w-full flex ${styles.step3} justify-start`}>
              <div className={`${styles.stepsFont} flex px-5 py-5 rounded-full bg-white shadow-gradient-shadow items-center`}>
                <div className='text-accent font-semibold'>🎒 Step 3: &nbsp;</div>
                <div>Pack your bags and <span className='text-accent'>(</span> Less Go <span className='text-accent'>)</span></div>
              </div>
            </div>
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