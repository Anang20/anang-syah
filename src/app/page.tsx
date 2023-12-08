"use client"

import About from "@/components/fragments/about"
import Footer from "@/components/fragments/footer"
import Home from "@/components/fragments/home"
import Projects from "@/components/fragments/projects"

export default function Page() {
  
  return (
    <>
      <div>
        <Home/>
        <About />
        <Projects/>
      </div>
      <Footer/>
    </>
  )
}