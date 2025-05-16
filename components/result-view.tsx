"use client";

import type React from "react";

import { useState, useRef } from "react";
import type { DataType } from "@/lib/types";
import {
  formatAsPipeDelimited,
  formatAsX12,
  formatAsTabular,
  formatAsTabularDelimited,
} from "@/lib/formatter";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import type { FileType } from "@/app/page";
import { toast } from "@/components/ui/use-toast";

interface ResultViewProps {
  data: DataType;
  selectedRow: number | null;
  fileType: FileType;
}

export default function ResultView({
  data,
  selectedRow,
  fileType,
}: ResultViewProps) {
  const [copied, setCopied] = useState(false);
  const tabularTextRef = useRef<HTMLPreElement>(null);

  const getFormattedData = () => {
    console.log(`Formatting data as: ${fileType}`);
    switch (fileType) {
      case "HL7":
        return formatAsPipeDelimited(data);
      case "x12850":
        return formatAsX12(data);
      case "Tabular":
        return formatAsTabular(data);
      case "TabularDelimited":
        return formatAsTabularDelimited(data);
      default:
        return formatAsPipeDelimited(data);
    }
  };

  const formattedData = getFormattedData();
  const resultText = formattedData.join("\n");
  const tabularText = fileType === "Tabular" ? formatTabularAsText(data) : "";

  const handleCopy = async () => {
    try {
      // If it's tabular format, copy the formatted tabular text
      if (fileType === "Tabular" && tabularTextRef.current) {
        await navigator.clipboard.writeText(tabularText);
      } else {
        await navigator.clipboard.writeText(resultText);
      }

      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: "The content has been copied to your clipboard.",
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      toast({
        title: "Copy failed",
        description: "Failed to copy text to clipboard.",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  const handleTabularCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (tabularTextRef.current) {
      try {
        await navigator.clipboard.writeText(tabularText);
        toast({
          title: "Tabular format copied",
          description:
            "The tabular formatted text has been copied to your clipboard.",
          duration: 2000,
        });
      } catch (err) {
        console.error("Failed to copy tabular text: ", err);
        toast({
          title: "Copy failed",
          description: "Failed to copy tabular text to clipboard.",
          variant: "destructive",
          duration: 2000,
        });
      }
    }
  };

  return (
    <>
      <div className="relative w-full">
        <div className="top-2 end-2 bg-gray-50 dark:bg-gray-700 rounded-xl">
          <button
            onClick={() => handleCopy()}
            className="text-gray-900 dark:text-gray-400 m-0.5 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border h-8"
          >
            {!copied ? (
              <>
                {" "}
                <span id="default-message">
                  <span className="inline-flex items-center">
                    <svg
                      className="w-3 h-3 me-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20"
                    >
                      <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                    </svg>
                    <span className="text-xs font-semibold">Copy code</span>
                  </span>
                </span>
              </>
            ) : (
              <>
                <span>
                  <span className="inline-flex items-center">
                    <svg
                      className="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                    <span className="text-xs font-semibold text-blue-700 dark:text-blue-500">
                      Copied
                    </span>
                  </span>
                </span>
              </>
            )}
          </button>
        </div>
        <div className="font-mono text-sm mt-10 w-full">
          {fileType === "Tabular" ? (
            <div className="w-full overflow-x-auto relative">
              <Button
                variant="outline"
                size="sm"
                onClick={handleTabularCopy}
                className="absolute top-2 right-2 z-10 bg-white"
              >
                <Copy className="h-4 w-4 mr-1" />
                <span>Copy Tabular</span>
              </Button>
              <pre
                ref={tabularTextRef}
                className="whitespace-pre text-xs p-4 border rounded-md bg-gray-50"
              >
                {tabularText}
              </pre>
            </div>
          ) : fileType === "TabularDelimited" ? (
            <div className="w-full">
              <table className="w-full border-collapse table-fixed">
                <thead>
                  <tr>
                    <th className="p-2 border border-gray-300 bg-gray-100 text-left w-1/3">
                      Field
                    </th>
                    <th className="p-2 border border-gray-300 bg-gray-100 text-left w-2/3">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(data).map(([key, value], index) => (
                    <tr key={index}>
                      <td className="p-2 border border-gray-300 break-words">
                        {key}
                      </td>
                      <td className="p-2 border border-gray-300 break-words whitespace-pre-wrap">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="w-full">
              {formattedData.map((line, index) => (
                <div
                  key={index}
                  className="p-2 border-b border-gray-200 overflow-hidden text-ellipsis"
                  style={{
                    whiteSpace: "nowrap",
                    position: "relative",
                  }}
                >
                  {line}
                  {line.length > 100 && (
                    <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// Helper function to format data as fixed-width text
function formatTabularAsText(data: DataType): string {
  if ("PO Number" in data) {
    // This is PO data
    return formatPODataAsText(data as any);
  } else if ("Contract Number" in data) {
    // This is contract data
    return formatContractDataAsText(data as any);
  }

  // Generic fallback for other data types
  const keys = Object.keys(data);
  const values = Object.values(data);

  // Calculate column widths based on content
  const columnWidths = keys.map((key, index) => {
    return Math.max(key.length, String(values[index]).length, 10);
  });

  // Create header row
  let result = keys
    .map((key, index) => key.padEnd(columnWidths[index]))
    .join(" ");

  // Add separator line
  result += "\n" + columnWidths.map((width) => "-".repeat(width)).join(" ");

  // Add data row
  result +=
    "\n" +
    values
      .map((value, index) => String(value).padEnd(columnWidths[index]))
      .join(" ");

  return result;
}

function formatPODataAsText(data: any): string {
  // Define column headers and their widths
  const columns = [
    { key: "PO Number", header: "PO Number", width: 8 },
    { key: "PO Date", header: "PO Date", width: 8 },
    { key: "PO Line Number", header: "Line Number", width: 4 },
    { key: "PO Qty", header: "PO Qty", width: 6 },
    { key: "PO UOM", header: "PO UOM", width: 6 },
    { key: "PO Price", header: "PO Price", width: 8 },
    { key: "Vendor number", header: "Vendor number", width: 8 },
    { key: "Item Vendor Name", header: "Item Vendor Name", width: 20 },
    { key: "Item Vendor Item ID", header: "Item Vendor Item ID", width: 18 },
    { key: "MFR ID", header: "MFR ID", width: 8 },
    { key: "Item MFR Name", header: "Item MFR Name", width: 20 },
    { key: "Item MFR Item ID", header: "Item MFR Item ID", width: 18 },
    { key: "Org Item ID", header: "Org Item ID", width: 12 },
    { key: "GL", header: "GL", width: 20 },
    { key: "Original Item Desc", header: "Original Item Desc", width: 20 },
    { key: "Received Qty", header: "Received Qty", width: 12 },
  ];

  // Create header row
  let result = columns.map((col) => col.header.padEnd(col.width)).join(" ");

  // Add separator line
  result += "\n" + columns.map((col) => "-".repeat(col.width)).join(" ");

  // Add data row
  result +=
    "\n" +
    columns
      .map((col) => {
        const value = data[col.key] || "";
        return String(value).padEnd(col.width);
      })
      .join(" ");

  return result;
}

function formatContractDataAsText(data: any): string {
  // Define column headers and their widths for contract data
  const columns = [
    { key: "Contract Number", header: "Contract Number", width: 15 },
    { key: "GPO ID", header: "GPO ID", width: 8 },
    { key: "Status", header: "Status", width: 6 },
    { key: "Contract Start Date", header: "Start Date", width: 10 },
    { key: "Contract End Date", header: "End Date", width: 10 },
    { key: "GPO Name", header: "GPO Name", width: 15 },
    { key: "Supplier Type", header: "Supplier Type", width: 12 },
    { key: "Org Item ID", header: "Org Item ID", width: 12 },
    { key: "Original Item Desc", header: "Item Desc", width: 25 },
    { key: "MFR ID", header: "MFR ID", width: 8 },
    { key: "MFR Name", header: "MFR Name", width: 20 },
    { key: "MFR Item ID", header: "MFR Item ID", width: 15 },
    { key: "Vendor ID", header: "Vendor ID", width: 10 },
    { key: "Vendor Name", header: "Vendor Name", width: 20 },
    { key: "Vendor Item ID", header: "Vendor Item ID", width: 15 },
    { key: "Contract Price", header: "Price", width: 8 },
  ];

  // Create header row
  let result = columns.map((col) => col.header.padEnd(col.width)).join(" ");

  // Add separator line
  result += "\n" + columns.map((col) => "-".repeat(col.width)).join(" ");

  // Add data row
  result +=
    "\n" +
    columns
      .map((col) => {
        const value = data[col.key] || "";
        return String(value).padEnd(col.width);
      })
      .join(" ");

  return result;
}
