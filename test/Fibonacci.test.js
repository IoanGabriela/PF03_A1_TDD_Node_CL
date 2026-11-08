import { describe, it, expect } from 'vitest'
import { fibonacci } from '../src/fibonacci.js'

describe('fibonacci', () => {

  it('devuelve 0', () => {
    expect(fibonacci(0)).toBe(0)
  })

  it('devuelve 1', () => {
    expect(fibonacci(1)).toBe(1)
  })

  it('devuelve 1 para el número 2', () => {
    expect(fibonacci(2)).toBe(1)
  })

  it('devuelve 2 para el número 3', () => {
    expect(fibonacci(3)).toBe(2)
  })

  it('devuelve 3 para el número 4', () => {
    expect(fibonacci(4)).toBe(3)
  })

  it('devuelve 5 para el número 5', () => {
    expect(fibonacci(5)).toBe(5)
  })

  it('devuelve 8 para el número 6', () => {
    expect(fibonacci(6)).toBe(8)
  })

  it('lanza un RangeError con números negativos', () => {
    expect(() => fibonacci(-1)).toThrow(RangeError)
  })

})
