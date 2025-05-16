export type ContractDataType = {
  Action: string
  "Contract Number": string
  "GPO ID": string
  Status: string
  "Contract Start Date": string
  "Contract End Date": string
  "GPO Name": string
  "Supplier Type": string
  "Org Item ID": string
  "Original Item Desc": string
  "MFR ID": string
  "MFR Name": string
  "MFR Item ID": string
  "Contract Item Start Date": string
  "Contract Item End Date": string
  "Vendor ID": string
  "Vendor Name": string
  "Vendor Item ID": string
  "Corp Number": string
  "Contract UOM": string
  "Contract QOE": string
  "Contract Price": string
}

export type PODataType = {
  "PO Number": string
  "PO Date": string
  "PO Line Number": string
  "PO Qty": string
  "PO UOM": string
  "PO Price": string
  "Vendor number": string
  "Item Vendor Name": string
  "Item Vendor Item ID": string
  "MFR ID": string
  "Item MFR Name": string
  "Item MFR Item ID": string
  "Org Item ID": string
  GL: string
  "Original Item Desc": string
  "Received Qty": string
}

export type DataType = ContractDataType | PODataType

export type SectionType = "Contract" | "POH" | "Item Master" | "Invoice"
