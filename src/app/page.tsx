"use client"

import { useRef } from "react"
import { Navbar } from "@/components/navbar"
import Home from "@/pages/home"
import Projects from "@/pages/projects"
import ContactPage from "@/pages/contact"

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null)

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
          <div className="contact">
            <ContactPage />
          </div>
        </div>
      </body>
    </html>
  );  
}