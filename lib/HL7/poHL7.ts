import type { PODataType, DataType } from "../types"

export function formatAsPOHHL7(data: DataType, duplicateCount: number = 1): string[] {
  const poData = data as PODataType;
  const highlightedFields: (keyof PODataType)[] = [
    "PO Number",
    "PO Line Number",
    "Item Vendor Item ID",
    "Item MFR Item ID"
  ];

  let blocks: string[] = [];
  for (let i = 1; i <= duplicateCount; i++) {
    const modifiedData = { ...poData };
    highlightedFields.forEach((field) => {
      if (field === "PO Line Number") {
        const baseNumber = parseInt(poData[field]) || 1;
        modifiedData[field] = (baseNumber + i - 1).toString();
      } else {
        modifiedData[field] =
          poData[field] + (i > 1 ? `-${i-1}` : "");
      }
    });

    const lines = [
      `ISA^00^          ^00^          ^01^sending system ^01^receiving syste^141117^1137^U^04010^000000002^0^P^^`,
      `GS^PO^sending system^receiving syste^141117^1137^201118810614`,
      `ST^850^201118810614`,
      `BEG^04^SA^${modifiedData["PO Number"]}^^${modifiedData["PO Date"]}`,
      `PER^BD^GARCIA DAVID^TE^6023445799^EM^David.Garcia@mihs.org`,
      `DTM^097^${modifiedData["PO Date"]}^1011`,
      `N1^BY^^91^049085003`,
      `N1^SE^7383`,
      `N1^ST^WAREHOUSE DISTRIBUTION^91^`,
      `N3^MARICOPA INTEGRATED HEALTH SYSTEMS^2611 E. PIERCE ST.^`,
      `N4^PHOENIX^AZ^85008^USA`,
      `NTE^`,
      `PO1^${modifiedData["PO Line Number"]}^${modifiedData["PO Qty"]}^${modifiedData["PO UOM"]}^${modifiedData["PO Price"]}^9^MF^${modifiedData["Item Vendor Name"]}~${modifiedData["Vendor number"]}~${modifiedData["Item MFR Name"]}~${modifiedData["MFR ID"]}^MP^${modifiedData["Item MFR Item ID"]}^VC^${modifiedData["Item Vendor Item ID"]}^IN^^BP^${modifiedData["Org Item ID"]}^CG^${modifiedData["GL"]}^ON^MSSS19120207232267554^FD^^TP^^CN^^DV^OPERATING ROOM~1353^^`,
      `PID^F^^^^^${modifiedData["Original Item Desc"]}`,
      `QTY^87^${modifiedData["Received Qty"]}`,
      `CTT^1^1`,
      `SE^1^20150120`,
      `GE^1^20150120`,
      `IEA^1^000000002`,
    ];
    
    blocks.push(lines.join("\r\n"));
  }
  
  return blocks.join("\r\n").split("\r\n");
} 