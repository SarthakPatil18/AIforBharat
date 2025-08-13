import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import ServiceProvider from './pages/ServiceProvider'
import Payment from './pages/Payment'
import Review from './pages/Review'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-neutral-50">
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/provider/:id" element={<ServiceProvider />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/review" element={<Review />} />
          </Routes>
        </main>
      </div>
    </LanguageProvider>
  )
}

export default App