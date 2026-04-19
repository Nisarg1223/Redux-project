import React from 'react'

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-badges">
          <span className="badge badge-blue">Photos</span>
          <span className="badge badge-green">Videos</span>
          <span className="badge badge-coral">GIFs</span>
        </div>
        <h1 className="hero-title">
          Discover Photos, Videos &amp; Trending GIFs
        </h1>
        <p className="hero-subtitle">in one place — free, fast and beautiful</p>
        <p className="hero-hint">Type anything in the search bar below to get started</p>
      </div>
    </div>
  )
}

export default HeroSection