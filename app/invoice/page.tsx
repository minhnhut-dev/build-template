"use client"

import Sidebar from "@/components/sidebar";
import { SectionType, InvoiceDataType } from "@/lib/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import InvoiceTable from "./Components/InvoiceTable";
import { invoiceData } from "@/lib/data";

export default function InvoicePage() {
    const router = useRouter()
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [activeFileType, setActiveFileType] = useState<string>("HL7");
    const [data, setData] = useState<InvoiceDataType>(invoiceData);

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
            case "Invoice":
                router.push("/invoice");
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

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar
                isCollapsed={isSidebarCollapsed}
                setIsCollapsed={setIsSidebarCollapsed}
                activeItem="Invoice"
                onNavItemClick={handleNavItemClick}
            />
            <div className={cn("flex flex-col flex-1 transition-all duration-300", isSidebarCollapsed ? "ml-16" : "ml-64")}>
                <div className=" flex-1 h-[calc(100vh-48px)]">
                    <div className="h-full overflow-auto border-r border-gray-300 bg-white p-4">
                        <h2 className="text-xl font-bold mb-4 sticky top-0 bg-white z-10 pb-2">Invoice Data HL7</h2>
                        <InvoiceTable
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
