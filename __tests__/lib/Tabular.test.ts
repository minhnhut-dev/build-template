import {
  formatAsTabular,
  formatAsTabularDelimited
} from '../../lib/Tabular'
import {
  mockContractData,
  mockPOData,
  mockItemMasterData,
  mockInvoiceData
} from './test-data'

describe('Tabular Formatters', () => {
  describe('formatAsTabular', () => {
    it('should return placeholder for contract data', () => {
      const result = formatAsTabular(mockContractData)
      
      expect(result).toBeInstanceOf(Array)
      expect(result).toEqual(['Tabular format - rendered as a table in the UI'])
    })

    it('should return placeholder for PO data', () => {
      const result = formatAsTabular(mockPOData)
      
      expect(result).toBeInstanceOf(Array)
      expect(result).toEqual(['Tabular format - rendered as a table in the UI'])
    })

    it('should return placeholder for item master data', () => {
      const result = formatAsTabular(mockItemMasterData)
      
      expect(result).toBeInstanceOf(Array)
      expect(result).toEqual(['Tabular format - rendered as a table in the UI'])
    })

    it('should return placeholder for invoice data', () => {
      const result = formatAsTabular(mockInvoiceData)
      
      expect(result).toBeInstanceOf(Array)
      expect(result).toEqual(['Tabular format - rendered as a table in the UI'])
    })
  })

  describe('formatAsTabularDelimited', () => {
    it('should return placeholder for contract data', () => {
      const result = formatAsTabularDelimited(mockContractData)
      
      expect(result).toBeInstanceOf(Array)
      expect(result).toEqual(['Tabular delimited format - rendered as a table in the UI'])
    })

    it('should return placeholder for PO data', () => {
      const result = formatAsTabularDelimited(mockPOData)
      
      expect(result).toBeInstanceOf(Array)
      expect(result).toEqual(['Tabular delimited format - rendered as a table in the UI'])
    })

    it('should return placeholder for item master data', () => {
      const result = formatAsTabularDelimited(mockItemMasterData)
      
      expect(result).toBeInstanceOf(Array)
      expect(result).toEqual(['Tabular delimited format - rendered as a table in the UI'])
    })

    it('should return placeholder for invoice data', () => {
      const result = formatAsTabularDelimited(mockInvoiceData)
      
      expect(result).toBeInstanceOf(Array)
      expect(result).toEqual(['Tabular delimited format - rendered as a table in the UI'])
    })
  })
}) 