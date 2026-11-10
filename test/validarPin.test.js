import { describe, it, expect } from 'vitest'
import { validarPin } from '../src/validarPin.js'

describe('validarPin', () => {

  it('devuelve false si el PIN es null', () => {
    expect(validarPin(null)).toBe(false)
  })

  it('devuelve false si el PIN es undefined', () => {
    expect(validarPin(undefined)).toBe(false)
  })

  it('devuelve false si el PIN está vacío', () => {
    expect(validarPin('')).toBe(false)
  })

  it('devuelve false si tiene menos de 6 dígitos', () => {
    expect(validarPin('12345')).toBe(false)
  })

  it('devuelve false si tiene más de 6 dígitos', () => {
    expect(validarPin('1234567')).toBe(false)
  })

  it('devuelve false si contiene caracteres que no son dígitos', () => {
    expect(validarPin('1234a6')).toBe(false)
  })

  it('devuelve false si los seis dígitos son iguales', () => {
    expect(validarPin('111111')).toBe(false)
  })

  it('devuelve true si el PIN tiene seis dígitos diferentes', () => {
    expect(validarPin('123456')).toBe(true)
  })

})