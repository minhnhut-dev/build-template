"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Sidebar from "@/components/sidebar"
import type { SectionType } from "@/lib/types"
import { cn } from "@/lib/utils"
import { BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export type FileType = "HL7" | "x12850" | "Tabular" | "TabularDelimited"

export default function Home() {
  const router = useRouter()
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const handleNavItemClick = (title: SectionType) => {
    // Navigate to the appropriate route
    switch (title) {
      case "Contract":
        router.push("/contract")
        break
      case "POH":
        router.push("/poh")
        break
      case "Item Master":
        router.push("/item-master")
        break
      case "Invoice":
        router.push("/invoice")
        break
    }
  }

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Navigation Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        activeItem="Home"
        onNavItemClick={handleNavItemClick}
      />

      {/* Main Content */}
      <div className={cn("flex flex-col flex-1 transition-all duration-300", isSidebarCollapsed ? "ml-16" : "ml-64")}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center max-w-2xl p-8">
            <h1 className="text-3xl font-bold mb-4">Supply Chain Data Viewer</h1>
            <p className="text-lg text-gray-600 mb-8">
              Welcome to the Supply Chain Data Viewer. Use the sidebar to navigate to different sections.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div
                className="p-6 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => router.push("/contract")}
              >
                <h2 className="text-xl font-semibold mb-2">Contract</h2>
                <p className="text-gray-600">View and manage contract data</p>
              </div>
              <div
                className="p-6 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => router.push("/poh")}
              >
                <h2 className="text-xl font-semibold mb-2">POH</h2>
                <p className="text-gray-600">Purchase Order History</p>
              </div>
              <div
                className="p-6 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => router.push("/item-master")}
              >
                <h2 className="text-xl font-semibold mb-2">Item Master</h2>
                <p className="text-gray-600">Manage item master data</p>
              </div>
              <div
                className="p-6 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => router.push("/invoice")}
              >
                <h2 className="text-xl font-semibold mb-2">Invoice</h2>
                <p className="text-gray-600">View and manage invoices</p>
              </div>
            </div>
            <Button onClick={() => router.push("/tutorial")} className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>View Tutorial</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
