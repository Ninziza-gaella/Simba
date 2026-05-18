// src/App.jsx
import { useState } from 'react'

function CreatePost() {
  const [title, setTitle] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [created, setCreated] = useState(null)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()

    setSubmitting(true)
    setError(null)

    try {
      const res = await fetch('http://192.168.1.95:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Gaella',
          email: 'ninzizagaella416@gmail.com',
          password: 'password123',
          age: 18,
        }),
      })

      if (!res.ok) {
        throw new Error('HTTP ' + res.status)
      }

      const data = await res.json()

      setCreated(data)
      setTitle('')
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter name"
        />

        <button
          type="submit"
          disabled={submitting || !title.trim()}
        >
          {submitting ? 'Saving…' : 'Create User'}
        </button>
      </form>

      {error && (
        <p style={{ color: 'crimson' }}>
          ⚠ {error}
        </p>
      )}

      {created && (
        <p>
          ✓ User created: <strong>{created.name}</strong>
        </p>
      )}
    </div>
  )
}

export default CreatePost