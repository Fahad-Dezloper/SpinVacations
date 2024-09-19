import { client, urlFor } from '../../app/lib/sanity';
import { SearchIcon } from 'lucide-react';
import { Image } from 'next-sanity/image';
import Link from 'next/link'
import React from 'react'
import { MegaMenu } from './shared/MegaMenu';

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
    <div className='flex justify-between items-center px-14 pt-2 pb-1'>
      {/* Logo */}
      <div className=''>
          <Link href="/">
              <Image src={urlFor(data.logo).url()}
                        alt = "GreatPhoto"
                        className="h-full w-full object-cover object-center"
                        width={100}
                        height={60}
                        priority />
          </Link>
      </div>

        {/* Main Navigation */}
        <div className='w-full z-[999]'>
          <MegaMenu />
        </div>

      {/* Search */}
      <div className='cursor-pointer'>
          <SearchIcon />
        </div>
      </div>
    </div>
  )
}

export default MainNav