import React from "react";

interface ViewDataModalProps {
  open: boolean;
  onClose: () => void;
  data: Record<string, any> | Record<string, any>[] | null;
}

export default function ViewDataModal({ open, onClose, data }: ViewDataModalProps) {
  if (!open || !data) return null;
  const isArray = Array.isArray(data);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="
          bg-white
          p-4 sm:p-6 lg:p-8
          rounded-2xl shadow-2xl
          w-full
          max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl
          relative
          overflow-y-auto max-h-[90vh]
          mx-2
        "
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-700 bg-transparent hover:bg-gray-200 rounded-lg text-base w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center"
          onClick={onClose}
        >
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <h2 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
          View Data
        </h2>
        <div className="overflow-x-auto">
          {isArray ? (
            (data as Record<string, any>[]).map((block, idx) => (
              <div key={idx} className="mb-8 border border-gray-300 rounded-lg shadow-sm">
                <div className="bg-gray-100 px-4 py-2 font-semibold text-gray-700 rounded-t-lg">
                  Block {idx + 1}
                </div>
                <table className="min-w-full border border-gray-200 text-xs sm:text-sm">
                  <tbody>
                    {Object.entries(block).map(([key, value]) => (
                      <tr key={key} className="border-b last:border-b-0">
                        <td className="py-2 px-2 sm:py-2 sm:px-4 font-medium text-gray-700 bg-gray-50 w-1/3">
                          {key}
                        </td>
                        <td className="py-2 px-2 sm:py-2 sm:px-4 text-gray-900 break-all">
                          {String(value)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))
          ) : (
            <table className="min-w-full border border-gray-200 text-xs sm:text-sm">
              <tbody>
                {Object.entries(data).map(([key, value]) => (
                  <tr key={key} className="border-b last:border-b-0">
                    <td className="py-2 px-2 sm:py-2 sm:px-4 font-medium text-gray-700 bg-gray-50 w-1/3">
                      {key}
                    </td>
                    <td className="py-2 px-2 sm:py-2 sm:px-4 text-gray-900 break-all">
                      {String(value)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
