"use client"

import Sidebar from "@/components/sidebar";
import { SectionType, PODataType } from "@/lib/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import PohTable from "./Components/PohTable";
import { poData } from "@/lib/data";

export default function PohPage() {
    const router = useRouter();
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [activeFileType, setActiveFileType] = useState("HL7");

    const [data, setData] = useState<PODataType>(poData);

    const handleNavItemClick = (title: SectionType) => {
        switch (title) {
            case "Contract":
                router.push("/contract");
                break;
            case "Item Master":
                router.push("/item-master");
                break;
            case "Invoice":
                router.push("/invoice");
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
        setData(prev => ({
            ...prev,
            [key]: value
        }));
    };

  return (
    <div className="flex h-screen overflow-hidden">
        <Sidebar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        activeItem="POH"
        onNavItemClick={handleNavItemClick}
      />
      <div className={cn("flex flex-col flex-1 transition-all duration-300", isSidebarCollapsed ? "ml-16" : "ml-64")}>
        <div className=" flex-1 h-[calc(100vh-48px)]">
          <div className="h-full overflow-auto border-r border-gray-300 bg-white p-4">
            <h2 className="text-xl font-bold mb-4 sticky top-0 bg-white z-10 pb-2">POH Data HL7</h2>
            <PohTable
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
