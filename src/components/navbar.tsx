"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Moon, Sun } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface NavLink {
  href: string
  label: string
}

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isDarkMode, setIsDarkMode] = React.useState(true)
  const [isSheetOpen, setIsSheetOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  // Mark component as mounted
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Initialize dark mode on mount
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      if (!document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.add("dark")
      }
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newValue = !prev
      document.documentElement.classList.toggle("dark", newValue)
      return newValue
    })
  }

  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleNavigation = async (href: string) => {
    setIsSheetOpen(false)

    if (href.startsWith("#")) {
      const elementId = href.slice(1)
      if (pathname !== "/") {
        await router.push("/")
        requestAnimationFrame(() => handleScroll(elementId))
      } else {
        handleScroll(elementId)
      }
    } else {
      router.push(href)
    }
  }

  const isActive = (href: string) => {
    if (!mounted) return false
    
    if (href.startsWith("#")) {
      return pathname === "/" && typeof window !== 'undefined' && window.location.hash === href
    }
    return pathname === href
  }

  // Prevent hydration errors by not rendering until mounted
  if (!mounted) {
    return null
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link 
            href="/" 
            className="mr-6 flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="hidden font-bold sm:inline-block">Your Logo</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavigation(link.href)}
                className={`relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors hover:text-foreground/80 ${
                  isActive(link.href) ? "text-foreground" : "text-foreground/60"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute inset-x-0 -bottom-px h-px bg-foreground" />
                )}
              </button>
            ))}
          </nav>
        </div>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-2 focus-visible:ring-ring md:hidden"
              aria-label="Toggle Menu"
            >
              <svg
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-200 ease-in-out hover:scale-110"
              >
                <path
                  d="M3 5H11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 12H16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 19H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="left" 
            className="pr-0"
            onInteractOutside={() => setIsSheetOpen(false)}
            onEscapeKeyDown={() => setIsSheetOpen(false)}
          >
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavigation(link.href)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    isActive(link.href) ? "text-foreground" : "text-foreground/60"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex items-center space-x-2">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleTheme}
              className="transition-opacity duration-200 hover:opacity-80"
              aria-label="Toggle dark mode"
            />
            <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
          </div>
        </div>
      </div>
    </header>
  )
}