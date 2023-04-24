
import React, { useState } from 'react'
import { FooterContent } from './Styling'

export const Footer = () => {
  const [language, setLanguage] = useState('SWE')
  console.log(language)
  return (
    <FooterContent>
      <div>
        <button type="button" onClick={() => setLanguage('SWE')}>SWE</button>
        <button type="button" onClick={() => setLanguage('ENG')}>ENG</button>
      </div>
    </FooterContent>
  )
}
