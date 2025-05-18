"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/sidebar";
import { cn } from "@/lib/utils";
import type { SectionType } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Copy,
  Download,
  Eye,
  FileText,
  Info,
  HelpCircle,
  Settings,
} from "lucide-react";

export default function TutorialPage() {
  const router = useRouter();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("getting-started");
  const [duplicateCount, setDuplicateCount] = useState("1");
  const [fileFormat, setFileFormat] = useState("HL7");
  const [fileName, setFileName] = useState("CONTRACT2025042301.txt");

  const handleNavItemClick = (title: SectionType) => {
    switch (title) {
      case "Contract":
        router.push("/contract");
        break;
      case "POH":
        router.push("/poh");
        break;
      case "Item Master":
        router.push("/item-master");
        break;
      case "Invoice":
        router.push("/invoice");
        break;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Navigation Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        activeItem="Tutorial"
        onNavItemClick={handleNavItemClick}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-6 px-8">
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Hướng dẫn tạo file HL7 Contract tự động
              </h1>
              <p className="text-blue-100 mt-2">
                Trang này giúp bạn dễ dàng tạo file contract HL7 với các tuỳ chọn{" "}
                <span className="font-medium">duplicate</span>,{" "}
                <span className="font-medium">xem trước</span> và{" "}
                <span className="font-medium">tải file</span> về máy.
              </p>
            </div>

            {/* Tutorial Content */}
            <div className="p-6 md:p-8">
              <div className="space-y-10">
                {/* Step 1 */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold text-xl shadow-md shadow-blue-200">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-blue-800 mb-3">
                      Nhập dữ liệu hợp đồng (Contract)
                    </h2>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-4">
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Contract Number
                            </label>
                            <input
                              type="text"
                              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Ví dụ: CNB10041025"
                              defaultValue="CNB10041025"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              <span className="bg-yellow-100 px-2 py-0.5 rounded border border-yellow-300 mr-1">
                                MFR Item ID
                              </span>
                            </label>
                            <input
                              type="text"
                              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Ví dụ: L-70"
                              defaultValue="L-70"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              <span className="bg-yellow-100 px-2 py-0.5 rounded border border-yellow-300 mr-1">
                                Vendor Item ID
                              </span>
                            </label>
                            <input
                              type="text"
                              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Ví dụ: VCN10102000NHUTPM"
                              defaultValue="VCN10102000NHUTPM"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Ngày hiệu lực
                            </label>
                            <input
                              type="date"
                              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                              defaultValue="2025-04-10"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Nhập đầy đủ các trường thông tin contract cần thiết. Các trường quan trọng được làm nổi bật.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold text-xl shadow-md shadow-blue-200">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-blue-800 mb-3">
                      Chọn loại file xuất và số lượng Duplicate
                    </h2>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="w-full sm:w-auto">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Định dạng file
                        </label>
                        <select
                          value={fileFormat}
                          onChange={(e) => setFileFormat(e.target.value)}
                          className="w-full sm:w-auto min-w-[150px] bg-white border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="HL7">HL7</option>
                          <option value="X12">X12</option>
                        </select>
                      </div>
                      <div className="w-full sm:w-auto">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Số lượng duplicate
                        </label>
                        <select
                          value={duplicateCount}
                          onChange={(e) => setDuplicateCount(e.target.value)}
                          className="w-full sm:w-auto min-w-[200px] bg-white border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="1">Normal (1 block)</option>
                          <option value="10">Duplicate 10</option>
                          <option value="100">Duplicate 100</option>
                          <option value="1000">Duplicate 1000</option>
                        </select>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-800 flex items-start">
                      <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Khi chọn duplicate, các trường đặc biệt (như mã Contract) sẽ tự động được đánh số tăng dần ở từng block để đảm bảo tính duy nhất.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold text-xl shadow-md shadow-blue-200">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-blue-800 mb-3">
                      Xem trước nội dung file
                    </h2>
                    <div className="mb-4">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
                        <Eye size={16} />
                        Xem trước file
                      </Button>
                    </div>
                    <div className="bg-gray-900 text-gray-200 rounded-lg p-4 font-mono text-xs overflow-x-auto mb-3">
                      <div>MSH|^~\&|SupplyChain|MCKESSON|...|MFN^M18^MFN_M18|...</div>
                      <div className="text-gray-400">...</div>
                      <div>CTR|CNB10041025 <span className="text-yellow-400 font-bold">1</span>|GPO|A|20250410|20260410|...</div>
                      <div className="text-gray-400">...</div>
                      <div className="text-gray-500 border-t border-gray-700 my-2 pt-2">--- Block tiếp theo ---</div>
                      <div>CTR|CNB10041025 <span className="text-yellow-400 font-bold">2</span>|GPO|A|20250410|20260410|...</div>
                      <div className="text-gray-400">...</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex items-center gap-1 text-sm">
                        <Copy size={14} />
                        Sao chép
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold text-xl shadow-md shadow-blue-200">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-blue-800 mb-3">
                      Tải file về máy
                    </h2>
                    <div className="flex flex-wrap items-end gap-3 mb-4">
                      <div className="w-full sm:w-auto">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Tên file
                        </label>
                        <input
                          type="text"
                          value={fileName}
                          onChange={(e) => setFileName(e.target.value)}
                          className="w-full sm:w-auto min-w-[240px] border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2">
                        <Download size={16} />
                        Tạo và tải file
                      </Button>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700">
                      <div className="flex items-start">
                        <HelpCircle className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>
                          File sẽ được lưu dưới dạng <strong>.txt</strong> hoặc định dạng bạn đã chọn. 
                          Bạn có thể đổi tên file trước khi tải để dễ nhận diện.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Tips */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <div className="bg-blue-50 rounded-lg p-4 text-sm">
                  <div className="font-medium text-blue-800 mb-1 flex items-center">
                    <Info className="h-4 w-4 mr-1" />
                    Mẹo hữu ích:
                  </div>
                  <ul className="text-gray-700 space-y-2 pl-6 list-disc">
                    <li>Bạn có thể sử dụng chức năng copy nhanh nội dung để chỉnh sửa thêm.</li>
                    <li>Xem trước dữ liệu dạng bảng để kiểm tra tất cả các trường trước khi xuất file.</li>
                    <li>Khi duplicate số lượng lớn, nên xem trước để đảm bảo không có lỗi.</li>
                  </ul>
                </div>
                <div className="text-center text-gray-500 text-xs mt-6">
                  Giao diện này được xây dựng với{" "}
                  <span className="font-bold">Next.js</span> và{" "}
                  <span className="font-bold">TailwindCSS</span>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
