import {
  formatAsPipeDelimited,
  formatAsPOHHL7,
  formatAsItemMaster,
  formatAsX12,
  formatAsInvoiceHL7
} from '../../lib/HL7'
import {
  mockContractData,
  mockPOData,
  mockItemMasterData,
  mockInvoiceData
} from './test-data'

describe('HL7 Formatters', () => {
  describe('formatAsPipeDelimited', () => {
    it('should format contract data correctly', () => {
      const result = formatAsPipeDelimited(mockContractData, 1)
      
      expect(result).toBeInstanceOf(Array)
      expect(result.length).toBeGreaterThan(0)
      expect(result[0]).toContain('MSH|^~\\&|SupplyChain|MCKESSON')
      expect(result.join('')).toContain('MFI|CTR||UPD|||NE')
      expect(result.join('')).toContain('CTR|CTR001|GPO123|Active')
    })

    it('should format PO data correctly', () => {
      const result = formatAsPipeDelimited(mockPOData)
      
      expect(result).toBeInstanceOf(Array)
      expect(result.length).toBeGreaterThan(0)
      expect(result[0]).toContain('MSH|^~\\&|SupplyChain|MCKESSON')
      expect(result.join('')).toContain('MFI|PO||UPD|||NE')
      expect(result.join('')).toContain('PO|PO001|2024-01-15|1|10|EA|50.00')
    })

    it('should format invoice data correctly', () => {
      const result = formatAsPipeDelimited(mockInvoiceData)
      
      expect(result).toBeInstanceOf(Array)
      expect(result.length).toBeGreaterThan(0)
      expect(result[0]).toContain('MSH|^~\\&|SupplyChain|MCKESSON')
      expect(result.join('')).toContain('MFI|INV||UPD|||NE')
      expect(result.join('')).toContain('INV|INV001|INV001|2024-01-20|Paid')
    })

    it('should handle duplicate count for contract data', () => {
      const result = formatAsPipeDelimited(mockContractData, 3)
      
      expect(result).toBeInstanceOf(Array)
      expect(result.length).toBeGreaterThan(0)
      // Should contain multiple blocks with incremented values
      expect(result.join('')).toContain('MFRITEM0011')
      expect(result.join('')).toContain('MFRITEM0012')
      expect(result.join('')).toContain('MFRITEM0013')
    })
  })

  describe('formatAsPOHHL7', () => {
    it('should format PO data as HL7 correctly', () => {
      const result = formatAsPOHHL7(mockPOData, 1)
      
      expect(result).toBeInstanceOf(Array)
      expect(result.length).toBeGreaterThan(0)
      expect(result[0]).toContain('ISA^00^')
      expect(result.join('')).toContain('GS^PO^sending system^receiving syste')
      expect(result.join('')).toContain('BEG^04^SA^PO001')
      expect(result.join('')).toContain('PO1^1^10^EA^50.00')
    })

    it('should handle duplicate count correctly', () => {
      const result = formatAsPOHHL7(mockPOData, 2)
      
      expect(result).toBeInstanceOf(Array)
      expect(result.length).toBeGreaterThan(0)
      // Should contain multiple blocks with incremented values
      expect(result.join('')).toContain('PO001')
      expect(result.join('')).toContain('PO001-1')
    })
  })

  describe('formatAsItemMaster', () => {
    it('should format item master data correctly', () => {
      const result = formatAsItemMaster(mockItemMasterData, 1, false)
      
      expect(result).toBeInstanceOf(Array)
      expect(result.length).toBeGreaterThan(0)
      expect(result[0]).toContain('MSH|^~\\&amp;|SupplyChain|send facility')
      expect(result.join('')).toContain('ZIT|VEND001^VENDITEM001^75.00^EA')
      expect(result.join('')).toContain('ZIN|LOC001^150 PERRY ROAD SJB')
      expect(result.join('')).toContain('ZIA|ITEM001|CORP001^Test Corporation')
    })

    it('should exclude ZIA segment when usePeopleSoft is true', () => {
      const result = formatAsItemMaster(mockItemMasterData, 1, true)
      
      expect(result).toBeInstanceOf(Array)
      expect(result.length).toBeGreaterThan(0)
      expect(result.join('')).not.toContain('ZIA|')
    })

    it('should handle duplicate count correctly', () => {
      const result = formatAsItemMaster(mockItemMasterData, 2, false)
      
      expect(result).toBeInstanceOf(Array)
      expect(result.length).toBeGreaterThan(0)
      // Should contain multiple blocks with incremented values
      expect(result.join('')).toContain('VENDITEM001')
      expect(result.join('')).toContain('VENDITEM001-2')
    })
  })

  describe('formatAsX12', () => {
    it('should format contract data as X12 correctly', () => {
      const result = formatAsX12(mockContractData)
      
      expect(result).toBeInstanceOf(Array)
      expect(result.length).toBeGreaterThan(0)
      expect(result[0]).toContain('ISA*00*')
      expect(result.join('')).toContain('GS*PO*SENDER*RECEIVER')
      expect(result.join('')).toContain('BEG*00*SA*CTR001')
      expect(result.join('')).toContain('PO1*1*1*EA*100.00')
    })

    it('should format PO data as X12 correctly', () => {
      const result = formatAsX12(mockPOData)
      
      expect(result).toBeInstanceOf(Array)
      expect(result.length).toBeGreaterThan(0)
      expect(result[0]).toContain('ISA^00^')
      expect(result.join('')).toContain('GS^PO^sending system^receiving syste')
      expect(result.join('')).toContain('BEG^04^SA^PO001')
      expect(result.join('')).toContain('PO1^1^10^EA^50.00')
    })
  })

  describe('formatAsInvoiceHL7', () => {
    it('should format invoice data as HL7 correctly', () => {
      const result = formatAsInvoiceHL7(mockInvoiceData, 1)
      
      expect(result).toBeInstanceOf(Array)
      expect(result.length).toBeGreaterThan(0)
      expect(result[0]).toContain('ISA^00^')
      expect(result.join('')).toContain('GS^IN^sending system^receiving syste')
      expect(result.join('')).toContain('BIG^2024-01-20^INV001^PO001')
      expect(result.join('')).toContain('IT1^1^INVLINE001^EA^')
    })

    it('should handle duplicate count correctly', () => {
      const result = formatAsInvoiceHL7(mockInvoiceData, 2)
      
      expect(result).toBeInstanceOf(Array)
      expect(result.length).toBeGreaterThan(0)
      // Should contain multiple blocks with incremented values
      expect(result.join('')).toContain('INV001')
      expect(result.join('')).toContain('INV001-1')
    })
  })
}) 