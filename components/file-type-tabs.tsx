"use client"

import { cn } from "@/lib/utils"
import type { FileType } from "@/app/page"

interface FileTypeTabsProps {
  options: { value: string; label: string }[]
  activeValue: string
  onChange: (value: FileType) => void
}

export default function FileTypeTabs({ options, activeValue, onChange }: FileTypeTabsProps) {
  if (options.length === 0) return null

  return (
    <div className="flex border-b border-gray-200">
      {options.map((option) => (
        <button
          key={option.value}
          className={cn(
            "px-4 py-2 text-sm font-medium",
            "focus:outline-none transition-colors",
            activeValue === option.value
              ? "border-b-2 border-slate-800 text-slate-800"
              : "text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300",
          )}
          onClick={() => {
            console.log(`Clicked tab: ${option.value}`)
            onChange(option.value as FileType)
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
