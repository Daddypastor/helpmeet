import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
  return (
    <section className='py-16 px-5 lg:px-12 bg-slate-400/25'>
      <div className='w-full xl:max-w-[1196px] m-auto'>
        <h1 className='text-2xl md:text-4xl font-bold text-center'><span className='text-[#1ECA8C]'>Help</span><span className='text-orange-400'>Meet</span></h1>
        <div className='md:flex py-5 gap-5'>
          <div className='gap-2 my-3 md:w-1/2 h-full'>
            <div className='flex items-center gap-2 w-full h-1/2 space-y-2'>
              <div className='w-full h-40 lg:h-64'>
                <Image src='/about-us/9.jpg' width={200} height={40} alt='' className='h-full w-full rounded-xl' />
              </div>
              <div className='w-full h-40 lg:h-64'>
                <Image src='/about-us/5.webp' width={400} height={40} alt='' className='h-full w-full rounded-xl' />
              </div>
            </div>
            <div className='w-full h-full md:h-[25rem]'>
              <div className='w-full h-full rounded-lg py-3'>
                <Image src='/about-us/7.webp' width={400} height={40} alt='' className='h-full w-full rounded-xl' />
              </div>
            </div>
          </div>
          <div className='text-gray-600 md:w-1/2 md:px-5'>
            <div className='text-sm md:text-xs lg:text-base text-left'>
              <p className='py-2'>
                <span className='font-semibold text-3xl text-orange-400'>A</span>s a passionate advocate for education and community empowerment, We founded HelpMeet with a vision to make a meaningful difference in the lives of students on campus. Having experienced firsthand the challenges of pursuing higher education, We understand the importance of access to financial support, resources, and mentorship in achieving academic success.
              </p>
              <div className='flex justify-center'>
                <div className='h-48 w-full md:w-[22rem] bg-gray-600 rounded-l-full flex my-5'>
                  <div className='w-1/2 h-48 rounded-full bg-gray-200'></div>
                  <div className='w-1/2 flex items-center flex-col pt-5 p-3'>
                    <p className='capitalize text-center text-white italic text-sm pb-2'>
                      provide a platform where individuals can come together to support students in their educational journey..
                    </p>     
                    <span className='text-orange-400 text-sm font-bold'>~MISSION~</span>           
                      <p className='text-xs text-[#1ECA8C] font-bold py-1'>Emmanuel Excellent</p>
                  </div>
                </div>
              </div>
              <p className='py-2'>
                Whether it&apos;s contributing towards school fees, sponsoring innovative projects, or providing essential materials, we strive to create opportunities for students to thrive and reach their full potential.
              </p>
              <p className='py-2'>
                Driven by a deep sense of empathy and a desire to give back to our community, we are committed to transparency, integrity, and accountability in everything we do. Every donation, no matter how big or small, makes a significant impact in empowering students and shaping their future.
              </p>
              <p className='py-2 italic'>
                You can join us on this incredible journey of making a difference. Together, we can inspire positive change and create a brighter tomorrow for students on campus!. 
              </p>     
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection