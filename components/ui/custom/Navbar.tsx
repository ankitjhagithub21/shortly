'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

import { signIn, useSession } from "next-auth/react"
import UserDropdown from './UserDropdown'

const navItems = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'My Links', href: '/links' },
  { name: 'Pricing', href: '/pricing' },
]


const Navbar = () => {
  const { data: session } = useSession()
  console.log(session)
  return (
    <header className="border-b shadow-sm fixed top-0 w-full">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold">
          Shortly
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium hover:underline">
              {item.name}
            </Link>
          ))}
          {session ? (
            <UserDropdown />
          ) : (
            <Button size="sm" onClick={() => signIn("google")}>
              Login
            </Button>
          )}

        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px]">
              <SheetHeader>
                Menu
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm font-medium">
                    {item.name}
                  </Link>
                ))}
                {session ? (
                  <UserDropdown />
                ) : (
                  <Button size="sm" onClick={() => signIn("google")}>
                    Login
                  </Button>
                )}

              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Navbar