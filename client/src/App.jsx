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
          <span style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            background: 'rgba(78, 42, 154, 0.5)',
            border: '1px solid rgba(117, 83, 255, 0.3)',
            borderRadius: '9999px',
            fontSize: '0.875rem',
            fontWeight: '500',
            marginBottom: '1.5rem'
          }}>
            ⚡ Powered by Sentry.New
          </span>
        </div>
        <h1 className="title" style={{
          fontSize: '3.5rem',
          fontWeight: '900',
          marginBottom: '0.5rem'
        }}>
          React + Node{" "}
          <span style={{
            background: 'linear-gradient(to right, #7553FF, #A737B4, #7553FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Template
          </span>
        </h1>
        <p className="subtitle" style={{
          color: '#9E86FF',
          fontSize: '1.125rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          A production-ready full-stack template with Sentry monitoring, React frontend, and Express backend.
        </p>
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
          <h2>🛡️ Sentry Integration</h2>
          <p className="cta-description">
            Add error tracking and performance monitoring to both frontend and backend
          </p>

          <div className="code-section">
            <div className="code-label">Install Sentry SDK:</div>
            <pre className="code-block">npm install @sentry/react @sentry/node</pre>
          </div>

          <div className="code-section">
            <div className="code-label">Initialize in your React app (client/src/main.jsx):</div>
            <pre className="code-block-large">{`import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  tracesSampleRate: 1.0,

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
});`}</pre>
          </div>

          <a
            href="https://docs.sentry.io/platforms/javascript/guides/react/"
            target="_blank"
            rel="noopener noreferrer"
            className="docs-link"
          >
            View full documentation →
          </a>
        </div>
      </main>

      <footer className="footer">
        <p>Built for distributed deployments • Perfect for modern web applications</p>
      </footer>
    </div>
  )
}

export default App
