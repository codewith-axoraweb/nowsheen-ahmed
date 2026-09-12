
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Muhammad Muneeb Logo"
                width={180}
                height={60}
                className="h-[80px] w-auto object-contain"
                priority
              />
            </div>

            <p className="text-muted-foreground">
              Crafted with clarity by your dedicated Content Writer
            </p>

            <div className="flex space-x-2">
              {/* LinkedIn */}
              <Button size="icon" variant="ghost" asChild>
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>

              {/* Email */}
              <Button size="icon" variant="ghost" asChild>
                <Link href="mailto:mohammadmuneeb596@gmail.com">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-blue"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-blue"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/portfolio"
                  className="text-muted-foreground hover:text-blue"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-blue"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>

            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">
                  mohammadmuneeb596@gmail.com
                </span>
              </li>

              <li>
                <span className="text-muted-foreground">
                  +92 300 4784788
                </span>
              </li>

              <li>
                <span className="text-muted-foreground">
                  Johar Town, Lahore
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Muhammad Muneeb. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}