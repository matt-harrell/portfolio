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
            <h1 className='lg:text-6xl text-5xl md:text-left text-center md:animate-fadeInRight md:mb-0 mb-5'>Matt Harrell</h1>
            <h1 className='lg:text-5xl text-4xl md:text-left text-center md:animate-[fadeInRight_1.5s] md:mb-0 mb-10'>Web Developer</h1>
            <p className='max-w-lg md:animate-[fadeInTop_2s]'>
              I am a focused web developer who specializes in front end development using technologies such as HTML,CSS and JavaScript. I 
              currently work at Covetrus, and use these technologies to build websites and solve problems within the company. During my freetime, 
              I work to grow my web development skill set with side projects. Additionally, I have taught myself React and have used it in a couple of projects. 
            </p>
        </div>
    </div>
  )
}

export default AboutSection;