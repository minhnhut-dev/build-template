import type { ContractDataType, PODataType, IMDataType, InvoiceDataType } from '../../lib/types'

export const mockContractData: ContractDataType = {
  Action: "Update",
  "Contract Number": "CTR001",
  "GPO ID": "GPO123",
  "Status": "Active",
  "Contract Start Date": "2024-01-01",
  "Contract End Date": "2024-12-31",
  "GPO Name": "Test GPO",
  "Supplier Type": "Manufacturer",
  "Org Item ID": "ITEM001",
  "Original Item Desc": "Test Item Description",
  "MFR ID": "MFR001",
  "MFR Name": "Test Manufacturer",
  "MFR Item ID": "MFRITEM001",
  "Vendor ID": "VEND001",
  "Vendor Name": "Test Vendor",
  "Vendor Item ID": "VENDITEM001",
  "Corp Number": "CORP001",
  "Contract Item Start Date": "2024-01-01",
  "Contract Item End Date": "2024-12-31",
  "Contract UOM": "EA",
  "Contract QOE": "5",
  "Contract Price": "100.00"
}

export const mockPOData: PODataType = {
  "PO Number": "PO001",
  "PO Date": "2024-01-15",
  "PO Line Number": "1",
  "PO Qty": "10",
  "PO UOM": "EA",
  "PO Price": "50.00",
  "Org Item ID": "ITEM001",
  "Original Item Desc": "Test Item Description",
  "Vendor number": "VEND001",
  "Item Vendor Name": "Test Vendor",
  "Item Vendor Item ID": "VENDITEM001",
  "MFR ID": "MFR001",
  "Item MFR Name": "Test Manufacturer",
  "Item MFR Item ID": "MFRITEM001",
  "GL": "GL001",
  "Received Qty": "8"
}

export const mockItemMasterData: IMDataType = {
  "Vendor ID": "VEND001",
  "Vendor Item ID": "VENDITEM001",
  "Price": "75.00",
  "UOM": "EA",
  "QOE": "5",
  "Item Desc": "Test Item Description",
  "MFR ID": "MFR001",
  "MFR Item ID": "MFRITEM001",
  "Org Item ID": "ITEM001",
  "Vendor Name": "Test Vendor",
  "MFR Name": "Test Manufacturer",
  "Corp Number": "CORP001",
  "Location ID": "LOC001",
  "Corp Name": "Test Corporation",
  "Expense Code Number": "EXP001",
  "Expense Code Name": "Test Expense Code"
}

export const mockInvoiceData: InvoiceDataType = {
  "Invoice ID": "INV001",
  "INV Number": "INV001",
  "INV Date": "2024-01-20",
  "INV Status": "Paid",
  "PO Number": "PO001",
  "PO Line Number": "1",
  "PO ID DB": "POID001",
  "Vendor Number": "VEND001",
  "Vendor Name": "Test Vendor",
  "Org Item ID": "ITEM001",
  "INV Line Desc": "Test Invoice Line Description",
  "UOM": "EA",
  "Corp Number": "CORP001",
  "Cost Center": "CC001",
  "Expense Code": "EXP001",
  "INV Line Number": "1",
  "INV Line ID": "INVLINE001"
}
