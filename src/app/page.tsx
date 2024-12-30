import Image from "next/image";
import { Navbar } from "@/components/navbar"
import Home from "@/pages/home"

export default function Page() {
    return (
        <html lang="en">
          <body>
            <Navbar />
            <Home />
          </body>
        </html>
      )
}

