import { describe, expect, test } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginForm from '../LoginForm'

describe('LoginForm', () => {
  test('renders email and password inputs with labels', () => {
    render(<LoginForm />)

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

  test('shows an error message on invalid submit', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)

    await user.type(screen.getByLabelText(/email/i), 'student@example.com')
    await user.type(screen.getByLabelText(/password/i), '123')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    expect(screen.getByRole('alert')).toHaveTextContent('Password must be at least 6 characters')
  })

  test('does not show an error message on valid submit', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)

    await user.type(screen.getByLabelText(/email/i), 'student@example.com')
    await user.type(screen.getByLabelText(/password/i), '123456')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
