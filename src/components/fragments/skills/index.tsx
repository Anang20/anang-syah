import Section from '@/components/Section'
import React from 'react'
import { Title } from '../Title'
import HeroSectionSkills from './HeroSection'

const Skills = () => {
  return (
    <Section className='my-10'>
      <div id='skills'className='flex flex-col items-center justify-center w-full my-10'>
        <Title label='Skills'/>
      </div>
      <HeroSectionSkills/>
    </Section>
  )
}

export default Skills