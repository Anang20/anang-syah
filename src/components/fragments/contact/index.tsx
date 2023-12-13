import Section from '@/components/Section'
import React from 'react'
import { Title } from '../Title'
import HeroSectionContact from './HeroSection'

const Contact = () => {
  return (
    <Section className='my-20'>
      <div id='projects'className='flex flex-col items-center justify-center w-full my-10'>
        <Title label='Contact'/>
      </div>
      <HeroSectionContact/>
    </Section>
  )
}

export default Contact