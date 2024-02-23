import Link from 'next/link'
import React from 'react'

const PageCrumb = ({...page}) => {
  return (
    <section className='bg-[#16231F]'>
      <div className='xl:max-w-[1196px] m-auto p-[100px] text-center'>
        <div className='flex justify-center text-sm'>
          <Link href='/' className='text-orange-400'>Home </Link>
          <span className='text-white'>{'>'} {page.name}</span>
        </div>
        <h1 className='text-white text-xl font-bold my-2'>{page.name}</h1>
      </div>
    </section>
  )
}

export default PageCrumb