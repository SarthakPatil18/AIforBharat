import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en')

  const languages = {
    en: { name: 'English', flag: '🇺🇸' },
    hi: { name: 'हिंदी', flag: '🇮🇳' },
    mr: { name: 'मराठी', flag: '🇮🇳' },
    gu: { name: 'ગુજરાતી', flag: '🇮🇳' },
    ta: { name: 'தமிழ்', flag: '🇮🇳' },
    te: { name: 'తెలుగు', flag: '🇮🇳' }
  }

  const value = {
    currentLanguage,
    setCurrentLanguage,
    languages
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}