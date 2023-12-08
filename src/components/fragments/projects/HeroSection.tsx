import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { ProjectItems } from '@/contains/contains'
import { ArrowUpRight, ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSectionProjects = () => {
  return (
      <div className='flex items-center'>
          <div className='hidden h-96 md:flex items-center absolute md:static left-3'>
            <div className='bg-primary text-primary-foreground h-12 w-12 md:h-16 md:w-16 cursor-pointer flex justify-center items-center rounded-full'><ChevronLeft/></div>
          </div>
          <div className='flex overflow-x-hidden space-x-4 p-0 md:p-4'>
              {ProjectItems?.map((item, index) => (
                <Card key={index} className='relative w-80 flex-none min-h-[24rem]'>
                    <CardHeader>
                        <div className='w-full h-2/4'>
                            <Image alt="project" src={item.image} width={1000} height={500}/>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </CardContent>
                    <CardFooter className='absolute bottom-0'>
                        <Button><Link href={item.url} target='_blank'></Link>Detail<ArrowUpRight className='ml-1'/></Button>
                    </CardFooter>
                </Card>
              ))}
          </div>
    </div>
  )
}

export default HeroSectionProjects