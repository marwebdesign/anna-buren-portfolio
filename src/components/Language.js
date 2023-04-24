
import React, { useState } from 'react'
import { LanguageContent } from './Styling'

export const Language = () => {
  const [language, setLanguage] = useState('SWE')
  console.log(language)
  return (
    <LanguageContent>
      <div>
        <button type="button" onClick={() => setLanguage('SWE')}>SWE</button>
        <button type="button" onClick={() => setLanguage('ENG')}>ENG</button>
      </div>
    </LanguageContent>
  )
}
