import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface ModalCreateFileProps {
  typeFile: "contract" | "POH" | "IM" | "Invoice"
  open: boolean;
  onClose: () => void;
  data: any
}

// Tạo schema validation với yup
const schema = yup.object({
  fileName: yup
    .string()
    .required("Tên file không được để trống")
    .matches(
      /^[a-zA-Z0-9._-]+$/,
      "Tên file chỉ được chứa chữ cái, số và ký tự đặc biệt . _ -"
    )
    .max(100, "Tên file không được vượt quá 100 ký tự")
}).required();

// Định nghĩa kiểu dữ liệu form
type FormValues = {
  fileName: string;
};

export default function ModalCreateFile({ typeFile, open, onClose, data }: ModalCreateFileProps) {
  // Khởi tạo react-hook-form với resolver yup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      fileName: ""
    }
  });

  if (!open) return null;

  // Format data as "key: value" per line
  function formatDataToText(data: Record<string, any>) {
    return Object.entries(data)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
  }

  // Xử lý khi submit form thành công
  const onSubmit = (formData: FormValues) => {
    const text = (data);
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = formData.fileName.endsWith('.txt') ? formData.fileName : `${formData.fileName}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Đã tạo file thành công",
      description: "Nội dung đã được tạo thành file!",
      duration: 2000,
    }); 
    
    reset();
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
        <div className="relative p-4 w-full max-w-lg max-h-full" onClick={e => e.stopPropagation()}>
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Tạo file
              </h3>
              <button
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={onClose}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Đóng modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5">
              <form 
                className="space-y-4" 
                onSubmit={handleSubmit(onSubmit)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSubmit(onSubmit)();
                  }
                }}
              >
                <div>
                  <label htmlFor="fileName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên file</label>
                  <input
                    {...register("fileName")}
                    type="text"
                    id="fileName"
                    className={`bg-gray-50 border ${
                      errors.fileName ? "border-red-500" : "border-gray-300"
                    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
                    placeholder="CONTRACT2025042301.AHN200728LOCAL.GPONV.txt"
                    autoFocus
                  />
                  {errors.fileName && (
                    <p className="mt-1 text-sm text-red-500">{errors.fileName.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Tạo file
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
