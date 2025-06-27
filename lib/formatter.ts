import type { ContractDataType, PODataType, DataType, IMDataType } from "./types"

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
   else {
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
}

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
      `GS^PO^sending system^receiving syste^141117^1137^20141117^X^04010`,
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

export function formatAsItemMaster(data: DataType, duplicateCount: number = 1, usePeopleSoft: boolean = false): string[] {
  const item = data as IMDataType;
  const highlightedFields: (keyof IMDataType)[] = [
    "Vendor Item ID",
    "Org Item ID", 
    "MFR Item ID"
  ];

  let blocks: string[] = [];
  for (let i = 1; i <= duplicateCount; i++) {
    const modifiedData = { ...item };
    highlightedFields.forEach((field) => {
      modifiedData[field] =
        item[field] + (i > 1 ? `-${i}` : "");
    });

    const baseLines = [
      `MSH|^~\\&amp;|SupplyChain|send facility|||541750311414||MFN^MAD|1549478123|P|2.2`,
      `ZIT|${modifiedData["Vendor ID"]}^${modifiedData["Vendor Item ID"]}^${modifiedData["Price"]}^${modifiedData["UOM"]}|${modifiedData["QOE"]}|||${modifiedData["Item Desc"]}|||||||EA^${modifiedData["QOE"]}^${modifiedData["Price"]}^${modifiedData["Vendor Item ID"]}^|${modifiedData["MFR ID"]}|${modifiedData["MFR Item ID"]}|||||0001|4.2540|||||||||${modifiedData["Org Item ID"]}|||N|IMPLANT|${modifiedData["Org Item ID"]}||${modifiedData["Vendor Name"]}||||||U|N||${modifiedData["MFR Name"]}||${modifiedData["Corp Number"]}|${modifiedData["UOM"]}`,
      `ZIN|${modifiedData["Location ID"]}^150 PERRY ROAD SJB|||||EA|CA|||||N|||||||||1|||||||||||${modifiedData["Vendor Name"]}`,
    ];

    // Only include ZIA segment if usePeopleSoft is false
    if (!usePeopleSoft) {
      baseLines.push(`ZIA|${modifiedData["Org Item ID"]}|${modifiedData["Corp Number"]}^${modifiedData["Corp Name"]}||${modifiedData["Expense Code Number"]}^${modifiedData["Expense Code Name"]}|||`);
    }

    blocks.push(baseLines.join("\r\n"));
  }
  return blocks.join("\r\n").split("\r\n");
}

export function formatAsX12(data: DataType): string[] {
  if ("Action" in data) {
    const contractData = data as ContractDataType
    const lines = [
      `ISA*00*          *00*          *ZZ*SENDER         *ZZ*RECEIVER       *210101*1200*U*00401*000000001*0*P*`,
      `GS*PO*SENDER*RECEIVER*20210101*1200*1*X*004010`,
      `ST*850*0001`,
      `BEG*00*SA*${contractData["Contract Number"]}*${contractData["Contract Start Date"]}`,
      `REF*DP*${contractData["GPO ID"]}`,
      `REF*ST*${contractData["Status"]}`,
      `DTM*002*${contractData["Contract Start Date"]}`,
      `DTM*003*${contractData["Contract End Date"]}`,
      `N1*BY*${contractData["GPO Name"]}`,
      `N1*SE*${contractData["Vendor Name"]}*92*${contractData["Vendor ID"]}`,
      `PO1*1*1*EA*${contractData["Contract Price"]}*VC*${contractData["MFR Item ID"]}*VP*${contractData["Vendor Item ID"]}`,
      `PID*F*${contractData["Original Item Desc"]}`,
      `CTT*1`,
      `SE*12*0001`,
      `GE*1*1`,
      `IEA*1*000000001`,
    ]
    return lines
  } else {
    // This is PO data - use the example provided by the user
    const poData = data as PODataType
    const lines = [
      `ISA^00^          ^00^          ^01^sending system ^01^receiving syste^141117^1137^U^04010^000000002^0^P^^`,
      `GS^PO^sending system^receiving syste^141117^1137^20141117^X^04010`,
      `ST^850^201118810614`,
      `BEG^04^SA^${poData["PO Number"]}^^${poData["PO Date"]}`,
      `PER^BD^GARCIA DAVID^TE^6023445799^EM^David.Garcia@mihs.org`,
      `DTM^097^${poData["PO Date"]}^1011`,
      `N1^BY^^91^049085003`,
      `N1^SE^7383`,
      `N1^ST^WAREHOUSE DISTRIBUTION^91^`,
      `N3^MARICOPA INTEGRATED HEALTH SYSTEMS^2611 E. PIERCE ST.^`,
      `N4^PHOENIX^AZ^85008^USA`,
      `NTE^`,
      `PO1^${poData["PO Line Number"]}^${poData["PO Qty"]}^${poData["PO UOM"]}^${poData["PO Price"]}^9^MF^${poData["Item Vendor Name"]}~${poData["Vendor number"]}~${poData["Item MFR Name"]}~${poData["MFR ID"]}^MP^${poData["Item MFR Item ID"]}^VC^${poData["Item Vendor Item ID"]}^IN^^BP^${poData["Org Item ID"]}^CG^${poData["GL"]}^ON^MSSS19120207232267554^FD^^TP^^CN^^DV^OPERATING ROOM~1353^^`,
      `PID^F^^^^^${poData["Original Item Desc"]}`,
      `QTY^87^${poData["Received Qty"]}`,
      `CTT^1^1`,
      `SE^1^20150120`,
      `GE^1^20150120`,
      `IEA^1^000000002`,
    ]
    return lines
  }
}

export function formatAsTabular(data: DataType): string[] {
  // This is just a placeholder - the actual tabular view is rendered in the component
  return ["Tabular format - rendered as a table in the UI"]
}

export function formatAsTabularDelimited(data: DataType): string[] {
  // This is just a placeholder - the actual tabular delimited view is rendered in the component
  return ["Tabular delimited format - rendered as a table in the UI"]
}