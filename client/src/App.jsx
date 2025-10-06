import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [serverMessage, setServerMessage] = useState('')
  const [serverStatus, setServerStatus] = useState('checking...')

  useEffect(() => {
    // Check server health
    fetch('http://localhost:3001/api/health')
      .then(res => res.json())
      .then(data => setServerStatus(data.status))
      .catch(() => setServerStatus('offline'))

    // Get sample data
    fetch('http://localhost:3001/api/data')
      .then(res => res.json())
      .then(data => setServerMessage(data.message))
      .catch(() => setServerMessage('Unable to connect to server'))
  }, [])

  return (
    <div className="app">
      <header className="hero">
        <div className="logo-container">
          <svg className="logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M 30 50 L 50 30 L 70 50 L 50 70 Z" fill="currentColor"/>
          </svg>
        </div>
        <h1 className="title">sentry.new</h1>
        <p className="subtitle">React + Node.js Template</p>
      </header>

      <main className="content">
        <div className="status-card">
          <h2>Server Status</h2>
          <div className={`status-indicator ${serverStatus === 'ok' ? 'online' : 'offline'}`}>
            <span className="status-dot"></span>
            <span>{serverStatus === 'ok' ? 'Online' : 'Offline'}</span>
          </div>
          {serverMessage && (
            <p className="server-message">{serverMessage}</p>
          )}
        </div>

        <div className="features">
          <div className="feature-card">
            <h3>⚡ Vite + React</h3>
            <p>Lightning-fast development with HMR</p>
          </div>
          <div className="feature-card">
            <h3>🚀 Express Backend</h3>
            <p>Scalable Node.js API server</p>
          </div>
          <div className="feature-card">
            <h3>📦 Distributed Ready</h3>
            <p>Deploy frontend and backend separately</p>
          </div>
        </div>

        <div className="cta">
          <h2>Get Started</h2>
          <div className="code-block">
            <code>npm run dev</code>
          </div>
          <p className="help-text">
            Edit <code>client/src/App.jsx</code> or <code>server/index.js</code> to get started
          </p>
        </div>
      </main>

      <footer className="footer">
        <p>Built for distributed deployments • Perfect for modern web applications</p>
      </footer>
    </div>
  )
}

export default App
