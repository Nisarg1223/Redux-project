import React from 'react'

const Navbar = ({ darkMode, setDarkMode, transparent }) => {
  return (
    <nav className={transparent ? 'navbar navbar-transparent' : 'navbar'}>
      <div className="navbar-logo">
        <span className="logo-icon">M</span>
        <span className="logo-text">mediaSearch</span>
      </div>

      <div className="navbar-right">

        {/* ✅ FIXED */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="github-btn"
          title="GitHub"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>

        <button
          className="darkmode-btn"
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle dark mode"
        >
          {darkMode ? '☀' : '☾'}
        </button>

      </div>
    </nav>
  )
}

export default Navbar