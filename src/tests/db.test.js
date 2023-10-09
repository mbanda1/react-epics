/* eslint-disable no-undef */
import data from '../../db.json'

const value = data.entries.length
const firstValue = data.entries[0]

describe('Test data', () => {

  test('The record length to equal 10', () => {
    expect(value).toEqual(10)
  })

  test('The record length to be gretet than 8 or equal to 10', () => {
    expect(value).toBeGreaterThanOrEqual(10)
  })


  test('Expet firstValue description to have word one', () => {
    expect(firstValue.description).toMatch(/on/)
  })

  test('Expet firstValue description to contain Description', () => {
    expect(firstValue.description).toMatch('Description')
  })

  // Array
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ]
      
  test('the shopping list has milk on it', () => {
    expect(shoppingList).toEqual(expect.arrayContaining(['milk', 'diapers']))
    expect(new Set(shoppingList)).toContain('milk')
  })

  //   objects
  test('Expet firstValue to have property isExpense', () => {
    expect(firstValue).toHaveProperty('isExpense')
    expect(firstValue).toHaveProperty('isExpense', false)
  })
})

