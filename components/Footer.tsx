import { socialLinks } from '@/data'
import { Facebook, Linkedin, Twitter} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#16231F] border-t-2 w-full'>
      <div className='p-5 pt-12 md:px-16 md:py-7 xl:max-w-[1196px] m-auto'>
        <div className='lg:flex justify-between items-center'>
          <div className='lg:w-2/3'>
            <Link href='/'>
              <div className='text-xl font-bold px-2'>
                <span className='text-[#1ECA8C]'>Help</span>
                <span className='text-orange-400'>Meet</span>
              </div>
            </Link>
            <p className='font-semibold text-sm lg:text-md text-gray-200 my-5'>
            At HelpMeet, we are dedicated to making a positive impact in the lives of those we serve. We believe that every
            individual has the power to create society.
            </p>
            <div className='flex gap-3 cursor-pointer'>
              {socialLinks.map((social, index)=> 
                <Link href={social.url} key={index}>
                  <Image src={social.src} width={10} height={10} alt='' className='bg-white w-10 h-10 rounded-full p-2'/>
                </Link>
              )}
            </div>
          </div>
          <div className='pt-5'>
            <div className='my-5'>
              <h3 className='text-xl font-bold'>Links</h3>
              <p className='h-0.5 w-10 bg-[#1ECA8C]'></p>
            </div>
            <ul className='font-semibold space-y-5'>                         
              <li>
                <Link href='/donate'>Donate</Link>
              </li>
              <li>
                <Link href='/about-us'>About Us</Link>
              </li>
              <li>Join The Volunteers</li>
            </ul>
          </div>
        </div>
        <hr className='w-full my-5' />
        <div>
          <p className='font-semibold'>@HelpMeet.com 2024 | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer