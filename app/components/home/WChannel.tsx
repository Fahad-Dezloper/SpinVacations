import Link from 'next/link'
import React from 'react'
import styles from '../css/WChannel.module.css'

const WChannel = () => {
  return (
    <div className={`w-full h-[20vw] ${styles.container} mb-[2vw]`}>
      <div className={`w-full h-full bg-white border border-dashed border-black rounded-2xl ${styles.internalContainer} p-8 flex gap-12`}>
        {/* Laptop */}
        <div className={`flex flex-col justify-between ${styles.lap}`}>
          <h1 className={`text-3xl text-text ${styles.btn} tracking-tight`}>Join Our <span className='text-[#25d366] tracking-normal font-semibold font-sans'>WhatsApp</span> channel <br />to receive timely updates on all our <span className='underline decoration-[#25d366]'>upcoming trips</span>.</h1>
          <Link href="/" className='w-full flex items-center justify-center'>
            <button className={`py-3 px-12 bg-[#25d366] duration-200 ease-in-out hover:bg-white border border-[#25d366] hover:text-[#25d366] text-white font-semibold rounded-full text-base w-fit`}>Join Now</button>
          </Link>
        </div>

        
        {/* Mobile */}
        <div className={`flex flex-col justify-between ${styles.mobile}`}>
          <h1 className='text-sm leading-none text-text tracking-tight'>Join Our <span className='text-[#25d366] tracking-normal font-semibold font-sans'>WhatsApp</span> channel to receive timely updates on all our <span className='underline decoration-[#25d366]'>upcoming trips</span>.</h1>
          <Link href="/" className='w-full flex items-center justify-center'>
            <button className='py-2 px-6 bg-[#25d366] text-white font-semibold rounded-full text-xs w-fit'>Join Now</button>
          </Link>
        </div>
        <div className={`w-[50vw] ${styles.gif} h-full rounded-2xl bg-red-300`}></div>
      </div>
    </div>
  )
}

export default WChannel