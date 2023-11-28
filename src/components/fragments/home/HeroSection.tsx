import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';  

export const HeroSectionHome = () => {
  
  return (
    <div className="relative flex justify-center items-center flex-col font-extrabold text-7xl gap-3 w-full h-screen">
        <h1 className={`py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-transparent bg-clip-text`}>Hi, Anang Syah Amirul Haqim</h1>
        <TypeAnimation
            preRenderFirstString={true}
            sequence={[1000, 'Front-End Developer', 1000, '']}
            wrapper="h1"
            speed={50}
            repeat={Infinity}
            className={`py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-transparent bg-clip-text`}
        />
        <div className='absolute mx-auto -z-20'>
            <Image alt='stack' src={'/images/stack.png'} width={1000} height={1000}/>
        </div>
        <div className='absolute mx-auto top-44 left-0 -z-20 h-2/6'>
            <Image alt='comet' src={'/images/comet.png'} width={1500} height={1500}/>
        </div>
    </div>
  )
}