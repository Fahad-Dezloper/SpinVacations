import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.png';
import footerimg from '../../public/undraw_traveling_yhxq.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { MailIcon, MapIcon, MapPin } from 'lucide-react';
import styles from './css/Footer.module.css'
import Link from 'next/link';

const Footer = () => {
  return (
      

<footer className={`w-full bg-white border ${styles.mainCont} h-fit flex flex-col px-14 py-8`}>
          <div className={`w-full h-full ${styles.footerCont} grid grid-cols-4 justify-between`}>
              
              <div className={`w-full h-full flex ${styles.hide} flex-col gap-12 items-start`}>
                    <a href="#" className="">
                        <Image src={logo} height={150} width={150} alt='Spin Vacations Logo' />
                    </a>
                    <div className='transform -scale-x-100'>
                        <Image src={footerimg} alt='footer' width={240} height={240} />
                    </div>
              </div>


            {/* Tablets */}
              <div className={`w-full ${styles.tablets} hidden h-full flex-col`}>
                    <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">About</h2>
                    <ul className="text-gray-500 dark:text-gray-400 flex flex-col gap-4 font-medium">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">About Us</a></li>
                    <li><a href="#" className="hover:underline">All Trips</a></li>
                    </ul>
              </div> 

              <div className={`w-full ${styles.tablets} hidden h-full flex-col`}>
                    <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul className="text-gray-500 dark:text-gray-400 flex flex-col gap-4 font-medium">
                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="#" className="hover:underline">Payment Policy</a></li>
                    <li><a href="#" className="hover:underline">Travel Policy</a></li>
                    </ul>
              </div>
              
              {/* Desktop */}
              <div className={`w-full ${styles.hide} h-full flex flex-col`}>
                    <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">About</h2>
                    <ul className="text-gray-500 dark:text-gray-400 flex flex-col gap-4 font-medium">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">About Us</a></li>
                    <li><a href="#" className="hover:underline">All Trips</a></li>
                    </ul>
              </div>     

              <div className={`w-full ${styles.hide} h-full flex flex-col`}>
                    <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul className="text-gray-500 dark:text-gray-400 flex flex-col gap-4 font-medium">
                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="#" className="hover:underline">Payment Policy</a></li>
                    <li><a href="#" className="hover:underline">Travel Policy</a></li>
                    </ul>
                  </div>

              
              {/* Mobile */}
              <div className={`hidden ${styles.mobile} mb-9 justify-between w-full`}>
              <div className='w-full h-full flex flex-col'>
                    <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">About</h2>
                    <ul className="text-gray-500 dark:text-gray-400 flex flex-col gap-4 font-medium">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">About Us</a></li>
                    <li><a href="#" className="hover:underline">All Trips</a></li>
                    </ul>
              </div>     

              <div className='w-full h-full flex flex-col'>
                    <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul className="text-gray-500 dark:text-gray-400 flex flex-col gap-4 font-medium">
                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="#" className="hover:underline">Payment Policy</a></li>
                    <li><a href="#" className="hover:underline">Travel Policy</a></li>
                    </ul>
                  </div>
              </div>
              
              <div className='w-full h-full flex flex-col gap-6 mb-9'>
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Us</h2>
                        <div className="text-gray-500 flex gap-4 dark:text-gray-400">
                        {/* Social Media Icons */}
                        <Link href="https://www.facebook.com/spinvacations/" className='w-10 h-10 rounded-full bg-[#F27638] text-white hover:bg-white hover:text-text  duration-200 flex items-center justify-center border-2 border-primary'>
                            <FontAwesomeIcon icon={faFacebookF} className={`${styles.iconsize}`} />
                        </Link>
                        <Link href="https://www.instagram.com/spinvacations/" className='w-10 h-10 rounded-full bg-[#F27638] text-white hover:bg-white hover:text-text  duration-200 flex items-center justify-center border-2 border-primary'>
                            <FontAwesomeIcon icon={faInstagram} className={`${styles.iconsize}`} />
                        </Link>
                        <Link href="https://maps.app.goo.gl/5wxnQ5etv7cY6nGv9" className='w-10 h-10 rounded-full bg-[#F27638] text-white hover:bg-white hover:text-text  duration-200 flex items-center justify-center border-2 border-primary'>
                            <FontAwesomeIcon icon={faGoogle} className={`${styles.iconsize}`}  />
                        </Link>
                        </div>
                  </div>
                  <div>
                      {/* Contact Info */}
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact Us</h2>
                        <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-4'>
                            <MapPin className='w-7 h-7' />
                            <h3 className={`flex-wrap ${styles.address} font-lato`}>1/6969-A, Main Hanuman Road, Shahdara, Delhi – 110032</h3>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <MailIcon className='w-5 h-5' />
                                  <div className={`${styles.address} font-sans`}>
                            <h3>Team@spinvacations.in</h3>
                            <h3>Spinvacations@gmail.com</h3>
                            </div>
                        </div>
                        </div>
                    </div>
                  </div>
              </div> 
              
               <div className={`w-full h-full ${styles.mobile} hidden flex-col gap-12 items-start`}>
                    <a href="#" className="hidden">
                        <Image src={logo} height={150} width={150} alt='Spin Vacations Logo' />
                    </a>
                    <div className='transform -scale-x-100'>
                        <Image src={footerimg} alt='footer' width={330} height={240} />
                    </div>
              </div>
          </div>

          
          {/* Tablets */}
          <div className={`w-full h-full ${styles.tablets} hidden flex-col gap-12 items-start`}>
                    <a href="#" className="hidden">
                        <Image src={logo} height={150} width={150} alt='Spin Vacations Logo' />
                    </a>
                    <div className='transform -scale-x-100 w-full h-[43vh]'>
                      <Image src={footerimg} alt='footer' fill style={{objectFit: "cover"}} />
                    </div>
              </div>


          <div className=''>
            <hr className="mb-4 border-gray-200 w-full dark:border-gray-700" />
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">© 2024 <a href="https://spinvacations.in" className="hover:underline">Spin Vacations™</a>. All Rights Reserved.</span>
                <span className={`text-sm text-gray-500 dark:text-gray-400 ${styles.crafted}`}>Crafted with ❤️ by &nbsp;<a href="https://x.com/l_fahadkhan_l" className="hover:underline">𝕏</a></span>
            </div>
        </div>
</footer>

  )
}

export default Footer