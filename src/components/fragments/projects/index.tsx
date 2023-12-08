import Section from '@/components/Section'
import React from 'react'
import { Title } from '../Title'
import HeroSectionProjects from './HeroSection'

const Projects = () => {
  return (
    <Section className='my-10'>
      <div id='projects'className='flex flex-col items-center justify-center w-full my-10'>
        <Title label='Projects'/>
      </div>
      <HeroSectionProjects/>
    </Section>
  )
}

export default Projects