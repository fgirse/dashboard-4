"use client"

import { useState, useEffect, useRef, use } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "../../../../lib/lib/utils";
import { navbar } from "@heroui/react";
import LogoEZ from "../../../../public/TextLogo4.png";
import Image from "next/image"    
import { useTranslations } from "next-intl";
import Logo from "../../../../public/LogoEZ990.svg";

type NavItem = {
  title: string
  href: string
  children?: NavItem[]
}



export default function Navbar() {
  const t = useTranslations("Navbar")
  const navItems: NavItem[] = [
    {
      title: t("home"),
      href: "/",
    },
    
    {
      title: t("about"),
      href: "/about",
      children: [
        {
          title: t("whatwedo"),
          href: "/whatwedo",
        },
        {
          title: t("whoweare"),
          href: "/whoweare",
        },
        {
          title: t("cv"),
          href: "/curriculum"
        },
      ],
    },
    {
      title: t("gallery"),
      href: "/galleria",
    },
    {
      title: t("services"),
      href: "/services",
    },
    {
      title: t("contact"),
      href: "/contact",
    },
    {
      title: t("rechtliches"),
      href: "/rechtliches",
      children: [
        {
          title: t("impressum"),
          href: "/impressum",
        },
        {
          title: t("datenschutz"),
          href: "/datenschutz",
        },
        {
          title: t("cookies"),
          href: "/cookies",
        },
        {
          title: t("agb"),
          href: "/agb",
        },
     
      ],
      
    },
  
  ]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Close dropdown when clicking outside
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title)
  }

  return (
    <nav className="bg-orange-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
        <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image src={LogoEZ} className="text-xl font-bold text-gray-800" alt="LogoEZ" width={240} height={20}/>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <div key={item.title} className="relative" ref={dropdownRef}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 flex items-center"
                    >
                      {item.title}
                      <ChevronDown
                        className={cn(
                          "ml-1 h-4 w-4 transition-transform",
                          activeDropdown === item.title ? "rotate-180" : "",
                        )}
                      />
                    </button>

                    {activeDropdown === item.title && (
                      <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/admin" className="text-xl text-white bg-red-800 rounded-lg px-3 py-1 hover:bg-lime-500">{t("Admin")}</Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <div key={item.title}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 flex items-center justify-between"
                  >
                    {item.title}
                    <ChevronDown
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform",
                        activeDropdown === item.title ? "rotate-180" : "",
                      )}
                    />
                  </button>

                  {activeDropdown === item.title && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                          onClick={() => {
                            setActiveDropdown(null)
                            setMobileMenuOpen(false)
                          }}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
        
      </div>
    </nav>
  )
}









