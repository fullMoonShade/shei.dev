"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import Home from "@/pages/home";
import Projects from "@/pages/projects";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate individual sections
      gsap.from(".navbar", { opacity: 0, y: -50, duration: 1, ease: "power3.out" });
      gsap.from(".home", { opacity: 0, x: -100, duration: 1.5, ease: "power3.out", delay: 0.5 });
      gsap.from(".projects", { opacity: 0, x: 100, duration: 1.5, ease: "power3.out", delay: 1 });
    }, containerRef);

    return () => ctx.revert(); // Cleanup animations on component unmount
  }, []);

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
  );
}
