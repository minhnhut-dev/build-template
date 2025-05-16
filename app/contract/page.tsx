"use client"

import { useState } from "react"
import ContractTable from "@/components/contract-table"
import ResultView from "@/components/result-view"
import Sidebar from "@/components/sidebar"
import FileTypeTabs from "@/components/file-type-tabs"
import { contractData as initialContractData } from "@/lib/data"
import type { ContractDataType, SectionType } from "@/lib/types"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

// Define all possible file types
export type FileType = "HL7" | "x12850" | "Tabular" | "TabularDelimited"

export default function ContractPage() {
  const router = useRouter()
  const [selectedRow, setSelectedRow] = useState<number | null>(null)
  const [contractData, setContractData] = useState<ContractDataType>(initialContractData)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [activeFileType, setActiveFileType] = useState<FileType>("HL7")

  const handleContractValueChange = (key: string, value: string) => {
    setContractData((prevData) => ({
      ...prevData,
      [key]: value,
    }))
  }

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

  const handleFileTypeChange = (fileType: FileType) => {
    console.log(`Setting file type to: ${fileType}`)
    setActiveFileType(fileType)
  }

  const getFileTypeOptions = () => {
    return [
      { value: "HL7", label: "File type: HL7" },
      { value: "Tabular", label: "Tabular in tab form" },
    ]
  }

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Navigation Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        activeItem="Contract"
        onNavItemClick={handleNavItemClick}
      />

      {/* Main Content */}
      <div className={cn("flex flex-col flex-1 transition-all duration-300", isSidebarCollapsed ? "ml-16" : "ml-64")}>
        {/* File Type Tabs */}
        <div className="bg-white border-b border-gray-200">
          <FileTypeTabs options={getFileTypeOptions()} activeValue={activeFileType} onChange={handleFileTypeChange} />
        </div>

        {/* Content Area - Using grid for strict separation */}
        <div className=" flex-1 h-[calc(100vh-48px)]">
          {/* Left panel - Data */}
          <div className="h-full overflow-auto border-r border-gray-300 bg-white p-4">
            <h2 className="text-xl font-bold mb-4 sticky top-0 bg-white z-10 pb-2">Contract Data</h2>
            <ContractTable
              data={contractData}
              selectedRow={selectedRow}
              onSelectRow={setSelectedRow}
              onValueChange={handleContractValueChange}
              activeFileType={activeFileType}
            />
          </div>

          {/* Right panel - Result */}
          {/* <div className="h-full overflow-auto bg-white p-4">
            <h2 className="text-xl font-bold mb-4 sticky top-0 bg-white z-10 pb-2">Result</h2>
            <ResultView data={contractData} selectedRow={selectedRow} fileType={activeFileType} />
          </div> */}
        </div>
      </div>
    </div>
  )
}
