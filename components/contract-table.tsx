"use client"

import type React from "react"
import type { DataType } from "@/lib/types"
import { useState } from "react"

interface ContractTableProps {
  data: DataType
  selectedRow: number | null
  onSelectRow: (index: number) => void
  onValueChange: (key: string, value: string) => void
}

export default function ContractTable({ data, selectedRow, onSelectRow, onValueChange }: ContractTableProps) {
  const highlightedFields = ["MFR Item ID", "Vendor Item ID", "MFR Name", "Contract Number"]
  const [editingCell, setEditingCell] = useState<string | null>(null)

  const handleValueClick = (key: string) => {
    setEditingCell(key)
  }

  const handleValueChange = (key: string, value: string) => {
    onValueChange(key, value)
  }

  const handleKeyDown = (e: React.KeyboardEvent, key: string) => {
    if (e.key === "Enter") {
      setEditingCell(null)
    }
  }

  const handleBlur = () => {
    setEditingCell(null)
  }

  return (
    <div className="w-full">
      <form className="max-w-xs mb-[10px]">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="Normal" defaultValue="Normal">Normal</option>
          <option value="Duplicate-10k">Duplicate 10k lines</option>
          <option value="Duplicate-50k">Duplicate 50k lines</option>
          <option value="Duplicate-100k">Duplicate 100k lines</option>
          <option value="Duplicate-200k">Duplicate 200k lines</option>
        </select>
      </form>
      <table className="w-full border-collapse table-fixed">
        <thead>
          <tr>
            <th className="bg-orange-500 text-white p-2 border border-gray-300 w-1/3">Column</th>
            <th className="bg-orange-500 text-white p-2 border border-gray-300 w-2/3">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value], index) => (
            <tr
              key={key}
              className={`${selectedRow === index ? "bg-blue-100" : ""} hover:bg-gray-100`}
              onClick={() => onSelectRow(index)}
            >
              <td
                className={`p-2 border border-gray-300 ${
                  highlightedFields.includes(key) ? "bg-yellow-300" : ""
                } break-words`}
              >
                {key}
              </td>
              <td
                className={`p-2 border border-gray-300 ${highlightedFields.includes(key) ? "bg-yellow-300" : ""}`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleValueClick(key)
                }}
              >
                {editingCell === key ? (
                  <textarea
                    value={value}
                    onChange={(e) => handleValueChange(key, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, key)}
                    onBlur={handleBlur}
                    className="w-full p-1 border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    rows={Math.max(1, Math.ceil(value.length / 40))}
                    autoFocus
                    style={{ minHeight: "24px", maxHeight: "120px" }}
                  />
                ) : (
                  <div className="cursor-text break-words whitespace-pre-wrap">{value}</div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
