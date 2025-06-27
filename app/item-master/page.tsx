"use client"

import Sidebar from "@/components/sidebar"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { SectionType } from "@/lib/types"
import ItemMasterTable from "./Components/ItemMasterTable"
import { cn } from "@/lib/utils"
import { itemMasterData } from "@/lib/data"


export default function ItemMasterPage() {
    const router = useRouter()
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [activeFileType, setActiveFileType] = useState<string>("HL7");
    const [data, setData] = useState(itemMasterData);

    const handleNavItemClick = (title: SectionType) => {
        switch (title) {
            case "Contract":
                router.push("/contract");
                break;
            case "Item Master":
                router.push("/item-master");
                break;
            case "POH":
                router.push("/poh");
                break;
        }
    }

    const handleSelectRow = (index: number) => {
        setSelectedRow(index);
    };

    const handleValueChange = (key: string, value: string) => {
        setData(prevData => ({
            ...prevData,
            [key]: value
        }));
    };

  return(
    <div className="flex h-screen overflow-hidden">
        <Sidebar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        activeItem="Tutorial"
        onNavItemClick={handleNavItemClick}
      />
            {/* Main Content */}
    <div className={cn("flex flex-col flex-1 transition-all duration-300", isSidebarCollapsed ? "ml-16" : "ml-64")}>
        {/* File Type Tabs */}
        {/* Content Area - Using grid for strict separation */}
        <div className=" flex-1 h-[calc(100vh-48px)]">
          {/* Left panel - Data */}
          <div className="h-full overflow-auto border-r border-gray-300 bg-white p-4">
            <h2 className="text-xl font-bold mb-4 sticky top-0 bg-white z-10 pb-2">Item Master Data</h2>
            <ItemMasterTable 
              data={data}
              selectedRow={selectedRow}
              onSelectRow={handleSelectRow}
              onValueChange={handleValueChange}
              activeFileType={activeFileType}
            />
          </div>
        </div>
      </div>
    </div>
  )
}