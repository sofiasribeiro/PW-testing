import { describe, expect, test } from '@jest/globals'
import validateLogin from '../validateLogin'

describe('validateLogin', () => {
  test('returns "Email is required" when email is empty', () => {
    expect(validateLogin('', '123456')).toBe('Email is required')
  })

  test('returns "Invalid email format" for an invalid email', () => {
    expect(validateLogin('invalid-email', '123456')).toBe('Invalid email format')
  })

  test('returns "Password must be at least 6 characters" for short passwords', () => {
    expect(validateLogin('student@example.com', '123')).toBe('Password must be at least 6 characters')
  })

  test('returns null for valid email and password', () => {
    expect(validateLogin('student@example.com', '123456')).toBeNull()
  })
})
