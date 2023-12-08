import React from 'react'

const Section = ({className, children}: {className?: string, children: React.ReactNode}) => {
  return (
      <section className={`px-5 md:px-20 ${className}`}>
          {children}
    </section>
  )
}

export default Section