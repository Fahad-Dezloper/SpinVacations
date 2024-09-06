import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.png'
import footerimg from '../../public/undraw_traveling_yhxq.svg'

const Footer = () => {
  return (
      

<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center h-8 me-3">
                            <Image src={logo} height={150} width={150} alt='spin vacations logo' /> 
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div className='flex flex-col items-center'>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Reach us</h2>
                  <div className="text-gray-500 flex gap-4 dark:text-gray-400 font-medium">
                      <div className='w-10 rounded-xl h-10 bg-red-300'></div>
                      <div className='w-10 rounded-xl h-10 bg-red-300'></div>
                      <div className='w-10 rounded-xl h-10 bg-red-300'></div>
                  </div>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 flex flex-col gap-4 font-medium">
                      <li className="">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Payment Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Travel Policy</a>
                      </li>
                  </ul>
              </div>
                    </div>
                  
                  <div className='w-[20vw] h-[15vw]'>
                      <Image src={footerimg} alt='footer' width={300} height={300} />
                  </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="www.spinvacations.in" className="hover:underline">Spin Vacations™</a>. All Rights Reserved.
                  </span>
                  
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Crafted by ❤️ by <a href="https://x.com/l_fahadkhan_l" className="hover:underline">𝕏</a>
          </span>
          {/* <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
          </div> */}
      </div>
    </div>
</footer>
  )
}

export default Footer