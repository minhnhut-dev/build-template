"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Sidebar from "@/components/sidebar"
import type { SectionType } from "@/lib/types"
import { cn } from "@/lib/utils"
import { BookOpen, TrendingUp, Package, FileText, BarChart2, Truck, Database, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"

export type FileType = "HL7" | "x12850" | "Tabular" | "TabularDelimited"

export default function Home() {
  const router = useRouter()
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [animatedStats, setAnimatedStats] = useState({ contracts: 0, items: 0, orders: 0, invoices: 0 })

  // Handle Navigation
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

  // Animate stats on page load
  useEffect(() => {
    const targetStats = { contracts: 0, items: 0, orders: 0, invoices: 0 }
    const duration = 2000 // ms
    const frameDuration = 16 // ~60fps
    const steps = duration / frameDuration
    
    let step = 0
    const interval = setInterval(() => {
      step++
      const progress = step / steps
      
      setAnimatedStats({
        contracts: Math.floor(targetStats.contracts * progress),
        items: Math.floor(targetStats.items * progress),
        orders: Math.floor(targetStats.orders * progress),
        invoices: Math.floor(targetStats.invoices * progress)
      })
      
      if (step >= steps) clearInterval(interval)
    }, frameDuration)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Navigation Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        activeItem="Home"
        onNavItemClick={handleNavItemClick}
      />

      {/* Main Content */}
      <div className={cn("flex flex-col flex-1 transition-all duration-300", isSidebarCollapsed ? "ml-16" : "ml-64")}>
        <div className="p-6 flex-1 overflow-y-auto">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Supply Chain Data builder</h1>
            <p className="text-lg text-gray-600">
              Welcome to your comprehensive supply chain management dashboard
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Number of Contract files created</p>
                  <p className="text-2xl font-bold text-gray-800">{animatedStats.contracts}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </div>
            
            {/* <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Items Managed</p>
                  <p className="text-2xl font-bold text-gray-800">{animatedStats.items}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <Package className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Purchase Orders</p>
                  <p className="text-2xl font-bold text-gray-800">{animatedStats.orders}</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Truck className="h-6 w-6 text-purple-500" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-500 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Open Invoices</p>
                  <p className="text-2xl font-bold text-gray-800">{animatedStats.invoices}</p>
                </div>
                <div className="bg-amber-100 p-3 rounded-lg">
                  <BarChart2 className="h-6 w-6 text-amber-500" />
                </div>
              </div>
            </div> */}
          </div>

          {/* Quick Access Links */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => router.push("/contract")}
              >
                <div className="h-2 bg-blue-500"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 group-hover:bg-blue-500 transition-colors">
                      <FileText className="h-6 w-6 text-blue-500 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Contract</h3>
                  </div>
                  <p className="text-gray-600 mb-4">View and manage contract data</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-500">Access now</span>
                  </div>
                </div>
              </div>
              
              <div
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => router.push("/poh")}
              >
                <div className="h-2 bg-purple-500"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-3 rounded-lg mr-4 group-hover:bg-purple-500 transition-colors">
                      <Truck className="h-6 w-6 text-purple-500 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">POH</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Track purchase order history with delivery status and timeline visualization</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-purple-500">Access now</span>
                    <span className="text-xs py-1 px-2 bg-purple-100 text-purple-700 rounded-full">{animatedStats.orders} orders</span>
                  </div>
                </div>
              </div>
              <div
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => router.push("/item-master")}
              >
                <div className="h-2 bg-green-500"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-lg mr-4 group-hover:bg-green-500 transition-colors">
                      <Package className="h-6 w-6 text-green-500 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Item Master</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Comprehensive item database with inventory levels and supplier information</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-green-500">Access now</span>
                    <span className="text-xs py-1 px-2 bg-green-100 text-green-700 rounded-full">{animatedStats.items} items</span>
                  </div>
                </div>
              </div>
              
              <div
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => router.push("/invoice")}
              >
                <div className="h-2 bg-amber-500"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 p-3 rounded-lg mr-4 group-hover:bg-amber-500 transition-colors">
                      <BarChart2 className="h-6 w-6 text-amber-500 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Invoice</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Monitor invoice status, payment tracking, and financial analytics</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-amber-500">Access now</span>
                    <span className="text-xs py-1 px-2 bg-amber-100 text-amber-700 rounded-full">{animatedStats.invoices} open</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => router.push("/tutorial")} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
              <BookOpen className="h-4 w-4" />
              <span>View Tutorial</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
