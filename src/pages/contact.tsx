import { Github, Linkedin, MessageCircle } from 'lucide-react'
import Link from "next/link"

export default function ContactPage() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: MessageCircle, href: "https://discord.gg/yourserver", label: "Discord" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yourprofile", label: "LinkedIn" },
  ]

  return (
    <div id="contact" className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Connect with Me
              </h1>
              <div className="flex space-x-8 mt-8">
                {socialLinks.map((link) => (
                  <SocialIcon key={link.label} {...link} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

interface SocialIconProps {
  icon: React.ElementType
  href: string
  label: string
}

function SocialIcon({ icon: Icon, href, label }: SocialIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
      aria-label={label}
    >
      <Icon className="h-10 w-10" />
    </Link>
  )
}