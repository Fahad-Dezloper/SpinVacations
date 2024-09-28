import React from 'react'
import { ReloadIcon } from '@radix-ui/react-icons';

const Loading = () => {
  return (
      <div className='w-full h-screen flex items-center justify-center backdrop-blur-md z-[999]'>
          <div className="flex flex-col items-center gap-6 px-5">
            <ReloadIcon className="my-2 size-16 animate-spin text-primary" />
            <p className="font-sans text-xl text-text">Your trip is arriving</p>
          </div>
      </div>
  )
}

export default Loading