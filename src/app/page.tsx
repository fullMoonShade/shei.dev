"use client"

import { useRef } from "react"
import { HydrationOverlay } from "@builder.io/react-hydration-overlay";
import { Navbar } from "@/components/navbar"
import Home from "@/pages/home"
import Projects from "@/pages/projects"
import ContactPage from "@/pages/contact"

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <html lang="en">
      <body>
        <HydrationOverlay>
          <div>
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
        </HydrationOverlay>
      </body>
    </html>
  );
}