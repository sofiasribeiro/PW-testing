const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/

export default function validateLogin(email, password) {
  if (!email) {
    return 'Email is required'
  }

  if (!emailRegex.test(email)) {
    return 'Invalid email format'
  }

  if (password.length < 6) {
    return 'Password must be at least 6 characters'
  }

  return null
}
