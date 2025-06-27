import type { ContractDataType, PODataType, DataType, InvoiceDataType } from "../types"

export function formatAsPipeDelimited(data: DataType, duplicateCount: number = 5): string[] {
  if ("Action" in data) {
    const contractData = data as ContractDataType;
     const highlightedFields: (keyof ContractDataType)[] = [
      "MFR Item ID",
      "Vendor Item ID",
      "MFR Name",
    ];

    let blocks: string[] = [];
    for (let i = 1; i <= duplicateCount; i++) {
      const modifiedData = { ...contractData };
      highlightedFields.forEach((field) => {
        modifiedData[field] =
          contractData[field] + (duplicateCount > 1 ? `${i}` : "");
      });

      const lines = [
        `MSH|^~\\&|SupplyChain|MCKESSON|||20140502064957||MFN^M18^MFN_M18|15335234|P|2.9`,
        `MFI|CTR||UPD|||NE`,
        `MFE|MAD|000000014||2802_110|E||20140502064957924||`,
        `CTR|${modifiedData["Contract Number"]}|${modifiedData["GPO ID"]}|${modifiedData["Status"]}|${modifiedData["Contract Start Date"]}|${modifiedData["Contract End Date"]}||751|L||||${modifiedData["GPO ID"]}|${modifiedData["GPO Name"]}||||||${modifiedData["Supplier Type"]}|||1||`,
        `ITM|${modifiedData["Org Item ID"]}|${modifiedData["Original Item Desc"]}|A|||||${modifiedData["MFR ID"]}|${modifiedData["MFR Name"]}|${modifiedData["MFR Item ID"]}||||||||||||||||||||||||||${modifiedData["Contract Item Start Date"]}|${modifiedData["Contract Item End Date"]}||`,
        `VND|1|${modifiedData["Vendor ID"]}|${modifiedData["Vendor Name"]}|${modifiedData["Vendor Item ID"]}||${modifiedData["Corp Number"]}^47507^||||||||${modifiedData["Contract Item Start Date"]}|${modifiedData["Contract Item End Date"]}||`,
        `PKG|1|${modifiedData["Contract UOM"]}||||||||${modifiedData["Contract Price"]}|1|${modifiedData["Vendor Item ID"]}`,
      ];
      blocks.push(lines.join("\r\n"));
    }
    return blocks.join("\r\n").split("\r\n");
  }
  else if ("PO Number" in data) {
    const poData = data as PODataType;
    const lines = [
      `MSH|^~\\&|SupplyChain|MCKESSON|||20250401||MFN^M18^MFN_M18|15335234|P|2.9`,
      `MFI|PO||UPD|||NE`,
      `MFE|NEW|000000014||${poData["PO Number"]}|E||20250401||`,
      `PO|${poData["PO Number"]}|${poData["PO Date"]}|${poData["PO Line Number"]}|${poData["PO Qty"]}|${poData["PO UOM"]}|${poData["PO Price"]}`,
      `ITM|${poData["Org Item ID"]}|${poData["Original Item Desc"]}`,
      `VND|1|${poData["Vendor number"]}|${poData["Item Vendor Name"]}|${poData["Item Vendor Item ID"]}`,
      `MFR|${poData["MFR ID"]}|${poData["Item MFR Name"]}|${poData["Item MFR Item ID"]}`,
      `GL|${poData["GL"]}`,
      `RCV|${poData["Received Qty"]}`,
    ];
    return lines;
  }
  else if ("INV Number" in data && "INV Date" in data && "Invoice ID" in data) {
    const invoiceData = data as unknown as InvoiceDataType;
    const lines = [
      `MSH|^~\\&|SupplyChain|MCKESSON|||20250210||MFN^M18^MFN_M18|15335234|P|2.9`,
      `MFI|INV||UPD|||NE`,
      `MFE|NEW|000000014||${invoiceData["Invoice ID"]}|E||20250210||`,
      `INV|${invoiceData["Invoice ID"]}|${invoiceData["INV Number"]}|${invoiceData["INV Date"]}|${invoiceData["INV Status"]}`,
      `PO|${invoiceData["PO Number"]}|${invoiceData["PO Line Number"]}|${invoiceData["PO ID DB"]}`,
      `VND|${invoiceData["Vendor Number"]}|${invoiceData["Vendor Name"]}`,
      `ITM|${invoiceData["Org Item ID"]}|${invoiceData["INV Line Desc"]}|${invoiceData["UOM"]}`,
      `CORP|${invoiceData["Corp Number"]}|${invoiceData["Cost Center"]}|${invoiceData["Expense Code"]}`,
    ];
    return lines;
  }
  else {
    // Default case for other data types
    const lines = Object.entries(data).map(([key, value]) => `${key}|${value}`);
    return lines;
  }
} 