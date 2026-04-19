import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const { query } = useSelector((store) => store.search);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>

      {/* Hero page — full screen with navbar on top */}
      {query === '' && (
        <div className="hero-wrapper">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} transparent={true} />
          <HeroSection />
          <div className="hero-search">
            <SearchBar />
          </div>
        </div>
      )}

      {/* Search results page */}
      {query !== '' && (
        <div>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} transparent={false} />
          <SearchBar />
          <Tabs />
          <ResultGrid />
        </div>
      )}

      <Footer />
    </div>
  )
}

export default HomePage