'use client'
import { navLinks } from '@/data'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'


const Header = () => {
  const [ menu, setMenu ] = useState(false);
  const path = usePathname();
  console.log(path);
  return (
    <header className='bg-[#16231F] border-b-2 w-full sticky top-0 z-30'>
      <div className='p-5 md:px-12 md:py-7 xl:max-w-[1196px] m-auto'>
        <div className='flex justify-between items-center'>
          <Link href='/'>
            <div className='text-xl font-bold px-2'>
              <span className='text-[#1ECA8C]'>Help</span>
              <span className='text-orange-400'>Meet</span>
            </div>
          </Link>
          {menu == false?
            <Menu className='text-gray-200 lg:hidden' onClick={() => setMenu(!menu)}/>
            : ''
          }
          <nav className={`text-gray-200 bg-[#16231F] ${menu?'':'hidden'} lg:block absolute lg:relative right-0 top-0 px-5 pt-28 pb-10 pr-12 lg:p-0 rounded-l-lg shadow-md`}>            
            <ul className='flex flex-col items-center lg:flex-row lg:gap-x-8 gap-y-10 capitalize font-semibold text-sm cursor-pointer'>
              {navLinks.map((nav, index) => 
              <li className={`${nav.url == path? 'text-[#1ECA8C] shadow-lg shadow-orange-400' :''} hover:text-[#1ECA8C] hover:shadow-lg hover:shadow-orange-400`} key={index}>
                <Link href={nav.url}>{nav.name}</Link>
              </li>
              )}
              <Link href='/donate'>
                <button className='bg-[#1ECA8C] font-bold rounded-md p-3 px-5 text-sm text-white hover:shadow-lg hover:shadow-orange-400 hidden lg:block'>Donate Now !</button>
              </Link>
            </ul>
            <X className='absolute top-5 right-5 lg:hidden' onClick={() => setMenu(!menu)}/>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header