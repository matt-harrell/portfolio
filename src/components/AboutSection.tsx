import React from 'react'
import GreatWaveSVG from './GreatWaveSVG';
import '../styles/index.css'

function AboutSection() {
  return (
    <div className='grid grid-cols-12'>
        <div className=' md:col-span-6 col-span-full md:block hidden'>
            <GreatWaveSVG/>
        </div>
        <div className=' md:col-span-6 col-span-full flex flex-col justify-center lg:px-6 md:px-4 px-3 lg:bg-none bg-wave md:py-0 py-6'>
            <h1 className='lg:text-6xl md:text-5xl text-4xl md:text-left text-center md:animate-fadeInRight'>Matt Harrell</h1>
            <h1 className='lg:text-5xl md:text-4xl text-3xl md:text-left text-center md:animate-[fadeInRight_1.5s]'>Web Developer</h1>
            <p className='max-w-lg md:animate-[fadeInTop_2s]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsam iste magni praesentium animi mollitia error repellat, aliquid consequatur, ex esse sunt quia explicabo vel. Blanditiis quae quam ratione quisquam.
            </p>
        </div>
    </div>
  )
}

export default AboutSection;