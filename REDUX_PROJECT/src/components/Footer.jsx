import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo-icon">M</span>
          <span className="footer-brand-name">mediaSearch</span>
        </div>
        <p className="footer-desc">
          Search and discover the best photos, videos and trending GIFs from around the web.
        </p>
        <div className="footer-links">
          <a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash</a>
          <span>·</span>
          <a href="https://pexels.com" target="_blank" rel="noreferrer">Pexels</a>
          <span>·</span>
          <a href="https://tenor.com" target="_blank" rel="noreferrer">Tenor</a>
        </div>
        <p className="footer-copy">&copy; 2026 mediaSearch. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer