"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { usePathname } from "next/navigation"
import { BookOpen, ShoppingCart, User, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="border-b bg-white dark:bg-gray-950">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="text-primary">Pagely</span>
        </Link>
        <div className="hidden md:flex max-w-md w-full mx-4">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search books by title, author, or ISBN..." className="pl-8 w-full" />
          </div>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
          >
            Home
          </Link>
          <Link
            href="/marketplace"
            className={`text-sm font-medium transition-colors ${pathname === "/marketplace" ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
          >
            Marketplace
          </Link>
          <Link
            href="/how-it-works"
            className={`text-sm font-medium transition-colors ${pathname === "/how-it-works" ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
          >
            How It Works
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/cart">
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="ghost" size="icon" aria-label="Dashboard">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <ModeToggle />
          <Link href="/auth/login" className="hidden md:block">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/auth/register" className="hidden md:block">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
