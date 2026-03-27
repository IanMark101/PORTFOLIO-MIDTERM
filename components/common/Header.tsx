"use client"

import { ModeToggle } from "./button-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { navList } from "@/constant/Navbar"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
export default function Header() {
  const currentPath = usePathname()

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-slate-200 bg-white/60 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-10">
        <p className="truncate text-lg font-bold text-gray-900 sm:text-xl md:text-2xl dark:text-white">
          My Portfolio
        </p>

        <div className="flex items-center gap-2 lg:hidden">
          <ModeToggle />
          <Sheet>
            <SheetTrigger className="p-2">
              <Menu />
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-center font-extrabold">
                  MY PORTFOLIO
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-6">
                {navList.map((item, index) => (
                  <SheetClose key={index} asChild className="text-center">
                    <Link href={item.path}>{item.name}</Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <ul className="hidden items-center gap-x-10 text-gray-900 lg:flex dark:text-white">
          {navList.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`whitespace-nowrap hover:text-blue-600 dark:hover:text-blue-400 ${
                  currentPath === item.path
                    ? "font-bold text-blue-600 dark:text-blue-400"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}

          <li className="flex items-center">
            <ModeToggle />
          </li>
        </ul>
      </div>
    </header>
  )
}
