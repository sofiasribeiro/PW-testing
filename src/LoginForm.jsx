import { useState } from 'react'
import validateLogin from './validateLogin'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    setError(validateLogin(email, password))
  }

  return (
    <form onSubmit={handleSubmit} className="d-grid gap-3" style={{ maxWidth: 420 }}>
      <div>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-control"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="form-control"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {error && (
        <p role="alert" className="alert alert-danger mb-0">
          {error}
        </p>
      )}
    </form>
  )
}
