"use client";

import type React from "react";
import type { DataType } from "@/lib/types";
import { useState } from "react";
import ModalCreateFile from "@/components/modal-create-file";
import ViewDataModal from "@/components/modal-view-data";
import {
  formatAsPipeDelimited,
  formatAsItemMaster
} from "@/lib/formatter";

import { formatNumberShort } from "@/constants/FormatData"

interface ItemMasterTableProps {
  data: DataType;
  selectedRow: number | null;
  onSelectRow: (index: number) => void;
  onValueChange: (key: string, value: string) => void;
  activeFileType: any;
}

export default function ItemMasterTable({
  data,
  selectedRow,
  onSelectRow,
  onValueChange,
  activeFileType,
}: ItemMasterTableProps) {
  const highlightedFields = [
    "Vendor Item ID",
    "Org Item ID",
    "MFR Item ID"
  ];
  const [editingCell, setEditingCell] = useState<string | null>(null);

  const [duplicateOption, setDuplicateOption] = useState<"Normal" | number>(
    "Normal"
  );

  const [usePeopleSoft, setUsePeopleSoft] = useState(false);

  const handleDuplicateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === "Normal") setDuplicateOption("Normal");
    else
      setDuplicateOption(
        Number(val.replace("Create-", "").replace("k", "000"))
      );
  };

  const handlePeopleSoftChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsePeopleSoft(e.target.checked);
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
    const duplicateCount = duplicateOption === "Normal" ? 1 : duplicateOption;
    switch (activeFileType) {
      case "HL7":
        return formatAsItemMaster(data, duplicateCount, usePeopleSoft);
      default:
        return formatAsPipeDelimited(data);
    }
  };
  
  const formattedData = getFormattedData();
  const resultHL7Text = formattedData.join("\r\n").replace(/\n/g, '');

  return (
    <>
      <div className="w-full">
        <form className="max-w-xs mb-[10px] flex items-center gap-4">
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={
              duplicateOption === "Normal"
                ? "Normal"
                : `Create-${formatNumberShort(duplicateOption)}`
            }
            onChange={handleDuplicateChange}
          >
            <option value="Normal">Normal</option>
            <option value="Create-10k">Create 10k item</option>
            <option value="Create-50k">Create 50k item</option>
            <option value="Create-100k">Create 100k item</option>
            <option value="Create-200k">Create 200k item</option>
          </select>
          
          <div className="flex items-center">
            <input
              id="usePeopleSoft"
              type="checkbox"
              checked={usePeopleSoft}
              onChange={handlePeopleSoftChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="usePeopleSoft" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Use PeopleSoft
            </label>
          </div>
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
            typeFile="IM"
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