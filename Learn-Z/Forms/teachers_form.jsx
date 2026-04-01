import React, { useState } from 'react'

const TeachersForm = ({ onLogin, onBack }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch('http://localhost:5000/api/teacher/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, department })
      })
      
      const data = await response.json()
      
      if (response.ok) {
        if (onLogin) onLogin({ name, email, department })
      } else {
        setError(data.message || 'Invalid login details. Please check your credentials.')
      }
    } catch (error) {
      console.error('Login error:', error)
      setError('Network error. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <form className="p-4 border rounded shadow-lg bg-white" style={{ minWidth: 350, maxWidth: 400 }} onSubmit={handleSubmit}>
        <div className="text-center mb-4">
          <img
            src="https://img.icons8.com/fluency/64/teacher.png"
            alt="Teacher"
            className="mb-2"
            style={{ width: '64px' }}
          />
          <h3 className="fw-bold mb-1 text-primary">Teacher Login</h3>
          <p className="text-muted mb-0">Access your teaching dashboard</p>
        </div>
        
        {error && <div className="alert alert-danger">{error}</div>}
        
        <div className="mb-3">
          <label className="form-label fw-semibold">Name</label>
          <input
            type="text"
            className="form-control form-control-lg"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            type="email"
            className="form-control form-control-lg"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="form-label fw-semibold">Department</label>
          <input
            type="text"
            className="form-control form-control-lg"
            value={department}
            onChange={e => setDepartment(e.target.value)}
            placeholder="e.g. Mathematics"
            required
          />
        </div>
        
        <button
          type="submit"
          className="btn btn-primary w-100 py-2 fw-bold mb-3"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Verifying...
            </>
          ) : (
            'Login'
          )}
        </button>

        {onBack && (
          <button
            type="button"
            className="btn btn-outline-secondary w-100 py-2"
            onClick={onBack}
          >
            ← Back to Profile
          </button>
        )}
      </form>
    </div>
  )
}

export default TeachersForm