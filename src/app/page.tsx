"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import Home from "@/pages/home"
import Projects from "@/pages/projects"

gsap.registerPlugin(ScrollTrigger)

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Navbar animation
      gsap.from(".navbar", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        clearProps: "all",
      })

      // Home section animation
      gsap.from(".home", {
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
        clearProps: "all",
      })

      // Projects section animation
      gsap.from(".projects", {
        opacity: 0,
        x: 100,
        duration: 1.5,
        ease: "power3.out",
        delay: 1,
        clearProps: "all",
      })

      // Scroll-triggered animations for projects
      gsap.utils.toArray(".project-item").forEach((item: any, index) => {
        gsap.from(item, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        })
      })

      // Parallax effect for background elements (if any)
      gsap.utils.toArray(".parallax").forEach((element: any) => {
        gsap.to(element, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      })
    }, containerRef)

    return () => ctx.revert() // Cleanup animations on component unmount
  }, [])

  return (
    <html lang="en">
      <body>
        <div ref={containerRef}>
          <div className="navbar">
            <Navbar />
          </div>
          <div className="home">
            <Home />
          </div>
          <div className="projects">
            <Projects />
          </div>
        </div>
      </body>
    </html>
  )
}

