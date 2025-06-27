import type { InvoiceDataType, DataType } from "../types"

export function formatAsInvoiceHL7(data: DataType, duplicateCount: number = 1): string[] {
  const invoiceData = data as InvoiceDataType;
  const highlightedFields: (keyof InvoiceDataType)[] = [
    "Invoice ID",
    "INV Number",
    "PO Number",
    "Vendor Number",
    "Org Item ID"
  ];

  let blocks: string[] = [];
  for (let i = 1; i <= duplicateCount; i++) {
    const modifiedData = { ...invoiceData };
    highlightedFields.forEach((field) => {
      if (field === "INV Line Number") {
        const baseNumber = parseInt(invoiceData[field]) || 1;
        modifiedData[field] = (baseNumber + i - 1).toString();
      } else {
        modifiedData[field] =
          invoiceData[field] + (i > 1 ? `-${i-1}` : "");
      }
    });

    const lines = [
      `ISA^00^          ^00^          ^01^sending system ^01^receiving syste^141117^1137^U^04010^000000002^0^P^^`,
      `GS^IN^sending system^receiving syste^141117^1137^20141117^X^04010`,
      `ST^810^201118810614`,
      `BIG^${modifiedData["INV Date"]}^${modifiedData["INV Number"]}^${modifiedData["PO Number"]}`,
      `REF^DP^${modifiedData["Invoice ID"]}`,
      `DTM^011^${modifiedData["INV Date"]}^1011`,
      `N1^BY^^91^${modifiedData["Corp Number"]}`,
      `N1^SE^${modifiedData["Vendor Number"]}`,
      `N1^ST^${modifiedData["Vendor Name"]}^91^`,
      `IT1^${modifiedData["INV Line Number"]}^${modifiedData["INV Line ID"]}^${modifiedData["UOM"]}^${modifiedData["INV Line Desc"]}^VC^${modifiedData["Org Item ID"]}^IN^^BP^${modifiedData["Org Item ID"]}^CG^${modifiedData["Cost Center"]}^ON^${modifiedData["Expense Code"]}^FD^^TP^^CN^^DV^${modifiedData["Vendor Name"]}~${modifiedData["Vendor Number"]}^^`,
      `PID^F^^^^^${modifiedData["INV Line Desc"]}`,
      `TDS^${modifiedData["INV Status"]}`,
      `CTT^1^1`,
      `SE^1^20150120`,
      `GE^1^20150120`,
      `IEA^1^000000002`,
    ];
    
    blocks.push(lines.join("\r\n"));
  }
  
  return blocks.join("\r\n").split("\r\n");
} 