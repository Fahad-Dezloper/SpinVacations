import { client, urlFor } from '../../app/lib/sanity';
import { SearchIcon } from 'lucide-react';
import Link from 'next/link'
import React from 'react'
import { MegaMenu } from './shared/MegaMenu';
import SearchTrips from './home/SearchTrips';
import styles from './css/MainNav.module.css'
import {Sidebar} from '@/components/component/sidebar'
import Image from 'next/image';
async function getData(){
    const query = "*[_type == 'mainNav'][0]";

    const data = await client.fetch(query);

    return data;
}

interface MenuItem {
  _key: string;
  menuName: string;
  link: string;
}

const MainNav = async () => {
  const data = await getData()
  // console.log(data.logo);  
  return (
    <div className='w-full z-[999]'>
      <div className={`${styles.container} flex items-center px-4 pt-2 pb-2 relative`}>
      {/* Logo */}
      
        <Link href="/" className={`${styles.logo} relative overflow-hidden`}>
              <Image src={urlFor(data.logo).url()}
                        alt = "GreatPhoto"
                        className="h-full w-full object-cover"
                        fill
                        style={{objectFit: "cover"}}
                         />
          </Link>

        {/* Main Navigation */}
        <div className={`w-full z-[999] mr-16 ${styles.mainnav}`}>
          <MegaMenu />
        </div>

        {/* Search */}
        <div className={`${styles.searchBar}`}>
        <div className='cursor-pointer w-full relative flex items-center'>
          <SearchIcon className='absolute top-2 left-2 text-[#666666]' />
          <SearchTrips />
          </div>
        </div>

        <div className={`${styles.sidebar}`}>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default MainNav