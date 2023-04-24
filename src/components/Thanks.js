import React from 'react'
import { Link } from 'react-router-dom'
import { StartpageHeader } from './Styling'

export const Thanks = () => {
  return (
    <div>
      <StartpageHeader>Thanks for sending me a message! Return to startpage <Link to="/">here</Link>
      </StartpageHeader>
    </div>
  )
}
