import { client, urlFor } from '../../app/lib/sanity';
import { SearchIcon } from 'lucide-react';
import { Image } from 'next-sanity/image';
import Link from 'next/link'
import React from 'react'

async function getData(){
    const query = "*[_type == 'mainNav'][0]";

    const data = await client.fetch(query);

    return data;
}

// Define the type for each menu item
interface MenuItem {
  _key: string;
  menuName: string;
  link: string;
}

const MainNav = async () => {
  const data = await getData()
  // console.log(data.logo);
  return (
    <div className='w-full bg-[#fff] backdrop-blur-sm z-[100]'>
    <div className='flex justify-between items-center px-14 py-1'>
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
      <div className='flex gap-6 items-center'>
        {data.menuItems.map((item: MenuItem) => (
          <Link className='font-lato text-base font-medium' href={item.link} key={item._key}>
            {item.menuName}
          </Link>
        ))}
      </div>

      {/* Search */}
      <div className='flex gap-6 items-center'>
        <SearchIcon />
        <Link href="/contact" className="bg-primary text-base border-primary border-2 rounded-md text-white shadow-md px-6 py-3 hover:bg-transparent hover:text-text duration-200">Contact</Link>
      </div>
      </div>
    </div>
  )
}

export default MainNav