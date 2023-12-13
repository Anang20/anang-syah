"use client"

import About from "@/components/fragments/about"
import Contact from "@/components/fragments/contact"
import Footer from "@/components/fragments/footer"
import Home from "@/components/fragments/home"
import Projects from "@/components/fragments/projects"
// import Qualification from "@/components/fragments/qualification"
import Skills from "@/components/fragments/skills"

export default function Page() {
  
  return (
    <>
      <div>
        <Home/>
        <About />
        <Projects />
        <Skills />
        {/* <Qualification /> */}
        <Contact/>
      </div>
      <Footer/>
    </>
  )
}