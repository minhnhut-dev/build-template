import {
  formatAsPipeDelimited,
  formatAsPOHHL7,
  formatAsItemMaster,
  formatAsX12,
  formatAsInvoiceHL7,
  formatAsTabular,
  formatAsTabularDelimited
} from '../../lib/formatter'
import {
  mockContractData,
  mockPOData,
  mockItemMasterData,
  mockInvoiceData
} from './test-data'

describe('Formatter Main Module', () => {
  describe('HL7 Functions', () => {
    it('should export and work with formatAsPipeDelimited', () => {
      const result = formatAsPipeDelimited(mockContractData, 1)
      
      expect(result).toBeInstanceOf(Array)
      expect(result.length).toBeGreaterThan(0)
      expect(result[0]).toContain('MSH|^~\\&|SupplyChain|MCKESSON')
    })

    it('should export and work with formatAsPOHHL7', () => {
      const result = formatAsPOHHL7(mockPOData, 1)
      
      expect(result).toBeInstanceOf(Array)
      expect(result.length).toBeGreaterThan(0)
      expect(result[0]).toContain('ISA^00^')
    })

    it('should export and work with formatAsItemMaster', () => {
      const result = formatAsItemMaster(mockItemMasterData, 1, false)
      
      expect(result).toBeInstanceOf(Array)
      expect(result.length).toBeGreaterThan(0)
      expect(result[0]).toContain('MSH|^~\\&amp;|SupplyChain|send facility')
    })

    it('should export and work with formatAsX12', () => {
      const result = formatAsX12(mockContractData)
      
      expect(result).toBeInstanceOf(Array)
      expect(result.length).toBeGreaterThan(0)
      expect(result[0]).toContain('ISA*00*')
    })

    it('should export and work with formatAsInvoiceHL7', () => {
      const result = formatAsInvoiceHL7(mockInvoiceData, 1)
      
      expect(result).toBeInstanceOf(Array)
      expect(result.length).toBeGreaterThan(0)
      expect(result[0]).toContain('ISA^00^')
    })
  })

  describe('Tabular Functions', () => {
    it('should export and work with formatAsTabular', () => {
      const result = formatAsTabular(mockContractData)
      
      expect(result).toBeInstanceOf(Array)
      expect(result).toEqual(['Tabular format - rendered as a table in the UI'])
    })

    it('should export and work with formatAsTabularDelimited', () => {
      const result = formatAsTabularDelimited(mockPOData)
      
      expect(result).toBeInstanceOf(Array)
      expect(result).toEqual(['Tabular delimited format - rendered as a table in the UI'])
    })
  })

  describe('Integration Tests', () => {
    it('should handle all data types with pipe delimited format', () => {
      const contractResult = formatAsPipeDelimited(mockContractData)
      const poResult = formatAsPipeDelimited(mockPOData)
      const invoiceResult = formatAsPipeDelimited(mockInvoiceData)
      
      expect(contractResult).toBeInstanceOf(Array)
      expect(poResult).toBeInstanceOf(Array)
      expect(invoiceResult).toBeInstanceOf(Array)
      
      expect(contractResult.length).toBeGreaterThan(0)
      expect(poResult.length).toBeGreaterThan(0)
      expect(invoiceResult.length).toBeGreaterThan(0)
    })

    it('should handle all data types with HL7 format', () => {
      const poHL7Result = formatAsPOHHL7(mockPOData)
      const itemMasterResult = formatAsItemMaster(mockItemMasterData)
      const invoiceHL7Result = formatAsInvoiceHL7(mockInvoiceData)
      
      expect(poHL7Result).toBeInstanceOf(Array)
      expect(itemMasterResult).toBeInstanceOf(Array)
      expect(invoiceHL7Result).toBeInstanceOf(Array)
      
      expect(poHL7Result.length).toBeGreaterThan(0)
      expect(itemMasterResult.length).toBeGreaterThan(0)
      expect(invoiceHL7Result.length).toBeGreaterThan(0)
    })

    it('should handle all data types with X12 format', () => {
      const contractX12Result = formatAsX12(mockContractData)
      const poX12Result = formatAsX12(mockPOData)
      
      expect(contractX12Result).toBeInstanceOf(Array)
      expect(poX12Result).toBeInstanceOf(Array)
      
      expect(contractX12Result.length).toBeGreaterThan(0)
      expect(poX12Result.length).toBeGreaterThan(0)
    })
  })
}) 