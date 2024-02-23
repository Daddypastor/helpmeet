import AboutSection from '@/components/AboutSection'
import PageCrumb from '@/components/PageCrumb'
import React from 'react'

const page = () => {
  return (
    <main>
        <PageCrumb name='About Us'/>
        <AboutSection/>
    </main>
  )
}

export default page