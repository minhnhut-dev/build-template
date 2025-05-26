"use client";

import type React from "react";
import type { DataType } from "@/lib/types";
import { useState } from "react";
import ModalCreateFile from "./modal-create-file";
import ViewDataModal from "./modal-view-data";
import {
  formatAsPipeDelimited,
  formatAsX12,
  formatAsTabular,
  formatAsTabularDelimited,
} from "@/lib/formatter";

interface ContractTableProps {
  data: DataType;
  selectedRow: number | null;
  onSelectRow: (index: number) => void;
  onValueChange: (key: string, value: string) => void;
  activeFileType: any;
}

export default function ContractTable({
  data,
  selectedRow,
  onSelectRow,
  onValueChange,
  activeFileType,
}: ContractTableProps) {
  const highlightedFields = [
    "MFR Item ID",
    "Vendor Item ID",
    "MFR Name",
    "Contract Number",
  ];
  const [editingCell, setEditingCell] = useState<string | null>(null);

  const [duplicateOption, setDuplicateOption] = useState<"Normal" | number>(
    "Normal"
  );

  const handleDuplicateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === "Normal") setDuplicateOption("Normal");
    else
      setDuplicateOption(
        Number(val.replace("Duplicate-", "").replace("k", "000"))
      );
  };

  const [showModal, setShowModal] = useState(false);
  const [showViewDataModal, setShowViewDataModal] = useState(false);

  const openViewDataModal = () => setShowViewDataModal(true);
  const closeViewDataModal = () => setShowViewDataModal(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleValueClick = (key: string) => {
    setEditingCell(key);
  };

  const handleValueChange = (key: string, value: string) => {
    onValueChange(key, value);
  };

  const handleKeyDown = (e: React.KeyboardEvent, key: string) => {
    if (e.key === "Enter") {
      setEditingCell(null);
    }
  };

  const handleBlur = () => {
    setEditingCell(null);
  };

  const getFormattedData = () => {
    console.log(`Formatting data as: ${activeFileType}`);
    switch (activeFileType) {
      case "HL7":
        return formatAsPipeDelimited(data, duplicateOption === "Normal" ? 15000 : duplicateOption);
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
  const resultHL7Text = formattedData.join("\n");

  return (
    <>
      <div className="w-full">
        <form className="max-w-xs mb-[10px]">
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={
              duplicateOption === "Normal"
                ? "Normal"
                : `Duplicate-${duplicateOption}k`
            }
            onChange={handleDuplicateChange}
          >
            <option value="Normal">Normal</option>
            <option value="Duplicate-10">Create 10k lines</option>
            <option value="Duplicate-50">Create 50k lines</option>
            <option value="Duplicate-100">Create 100k lines</option>
            <option value="Duplicate-200">Create 200k lines</option>
          </select>
         
        </form>
        <table className="w-full border-collapse table-fixed">
          <thead>
            <tr>
              <th className="bg-orange-500 text-white p-2 border border-gray-300 w-1/3">
                Column
              </th>
              <th className="bg-orange-500 text-white p-2 border border-gray-300 w-2/3">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map(([key, value], index) => (
              <tr
                key={key}
                className={`${
                  selectedRow === index ? "bg-blue-100" : ""
                } hover:bg-gray-100`}
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
                  className={`p-2 border border-gray-300 ${
                    highlightedFields.includes(key) ? "bg-yellow-300" : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleValueClick(key);
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
                    <div className="cursor-text break-words whitespace-pre-wrap">
                      {value}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 flex">
        <button
          onClick={openModal}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Create file
        </button>
        <button
          onClick={openViewDataModal}
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          type="button"
        >
          View data
        </button>
        {showModal && (
          <ModalCreateFile
            onClose={closeModal}
            open={showModal}
            typeFile="contract"
            data={resultHL7Text}
          />
        )}
        {showViewDataModal && (
          <ViewDataModal
            onClose={closeViewDataModal}
            open={showViewDataModal}
            data={data}
          />
        )}
      </div>
    </>
  );
}
