import React, { useLayoutEffect, useState } from 'react';
import SplitText from "@/components/animations/SplitText";
import ShapeBlur from "@/components/animations/ShapeBlur"

export default function Home() {
  const [pixelRatio, setPixelRatio] = useState(1); // Initialize with a default value


  useLayoutEffect(() => {
    // Only attempt to access window in a browser environment
    if (typeof window !== 'undefined') {
      setPixelRatio(window.devicePixelRatio || 1);
    }
  }, []);


  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className="flex flex-col min-h-screen relative">
       <div style={{position: 'absolute', top:'10%', left:0, width: '100%', height: '500px', overflow: 'hidden', zIndex:0}}>
          <ShapeBlur
            variation={0}
            pixelRatioProp={pixelRatio} // Use the state value
            shapeSize={2.}
            roundness={0.5}
            borderSize={0.05}
            circleSize={0.5}
            circleEdge={1}
          />
      </div>
      <main className="flex-1 flex items-center justify-center relative z-10">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <SplitText
                  text="Welcome to My Portfolio"
                  className="text-3xl font-black tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-stroke-2 text-stroke-black"
                  delay={20}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  easing="easeOutCubic"
                  threshold={0.2}
                  rootMargin="-50px"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
                <p className="mx-auto max-w-[700px] text-gray-700 font-medium md:text-xl dark:text-gray-400">
                  I'm a passionate developer creating beautiful and functional web experiences.
                </p>
              </div>
              <div className="space-x-4">
              <a
                className="inline-flex h-9 items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#projects"
                onClick={scrollToProjects}
              >
                View Projects
              </a>
              <a
                  className="inline-flex h-9 items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#contact"
                  onClick={scrollToContact}
                >
                  Contact Me
              </a>


              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}