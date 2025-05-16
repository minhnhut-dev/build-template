"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { FileText, ShoppingCart, Database, Receipt, ChevronLeft, ChevronRight } from "lucide-react"
import type { SectionType } from "@/lib/types"

interface SidebarProps {
  isCollapsed: boolean
  setIsCollapsed: (collapsed: boolean) => void
  activeItem: string
  onNavItemClick: (title: SectionType) => void
}

interface NavItem {
  title: SectionType
  icon: React.ReactNode
  href: string
}

export default function Sidebar({ isCollapsed, setIsCollapsed, activeItem, onNavItemClick }: SidebarProps) {
  const navItems: NavItem[] = [
    {
      title: "Contract",
      icon: <FileText className="h-5 w-5" />,
      href: "#",
    },
    // {
    //   title: "POH",
    //   icon: <ShoppingCart className="h-5 w-5" />,
    //   href: "#",
    // },
    // {
    //   title: "Item Master",
    //   icon: <Database className="h-5 w-5" />,
    //   href: "#",
    // },
    // {
    //   title: "Invoice",
    //   icon: <Receipt className="h-5 w-5" />,
    //   href: "#",
    // },
  ]

  return (
    <div
      className={cn(
        "fixed left-0 top-0 h-full bg-slate-800 text-white transition-all duration-300 z-10",
        isCollapsed ? "w-16" : "w-64",
      )}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        {!isCollapsed && <h1 className="text-xl font-bold">Supply Chain</h1>}
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-slate-700"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </Button>
      </div>

      {/* Navigation Items */}
      <nav className="mt-4">
        <ul className="space-y-2 px-2">
          {navItems.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                className={cn(
                  "flex items-center rounded-md p-2 hover:bg-slate-700 transition-colors",
                  activeItem === item.title ? "bg-slate-700" : "",
                )}
                onClick={(e) => {
                  e.preventDefault()
                  onNavItemClick(item.title)
                }}
              >
                <span className="mr-3">{item.icon}</span>
                {!isCollapsed && <span>{item.title}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
