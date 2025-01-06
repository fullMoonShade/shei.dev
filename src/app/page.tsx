import Image from "next/image";
import { Navbar } from "@/components/navbar"
import Home from "@/pages/home"
import Projects from "@/pages/projects"

export default function Page() {
    return (
        <html lang="en">
          <body>
            <Navbar/>
            <Home/>
            <Projects/>
          </body>
        </html>
      )
}

