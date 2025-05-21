"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BookText, ShoppingBag, Settings, QrCode, DollarSign, LayoutDashboard, LogOut } from "lucide-react"

export default function DashboardNav() {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "My Books",
      href: "/dashboard/books",
      icon: <BookText className="h-5 w-5" />,
    },
    {
      title: "Sales",
      href: "/dashboard/sales",
      icon: <ShoppingBag className="h-5 w-5" />,
    },
    {
      title: "Payments",
      href: "/dashboard/payments",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      title: "QR Codes",
      href: "/dashboard/qr-codes",
      icon: <QrCode className="h-5 w-5" />,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  return (
    <nav className="flex flex-col gap-2">
      {navItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <Button variant={pathname === item.href ? "secondary" : "ghost"} className="w-full justify-start">
            {item.icon}
            <span className="ml-2">{item.title}</span>
          </Button>
        </Link>
      ))}
      <Link href="/">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground">
          <LogOut className="h-5 w-5" />
          <span className="ml-2">Log Out</span>
        </Button>
      </Link>
    </nav>
  )
}
