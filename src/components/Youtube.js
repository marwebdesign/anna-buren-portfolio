import React from 'react'
import { YouTube } from './Styling'

export const Youtube = () => {
  return (
    <YouTube>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/W-YD2Y8ojYE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen />
    </YouTube>
  )
}
