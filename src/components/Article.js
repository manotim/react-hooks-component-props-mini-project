import React from 'react'

function Article({ title, date, minutes, preview }) {
  const currentDate = date ? date : 'January 1, 1970'

  let icon = ''
  let icons = 1
  if (minutes <= 30) {
    icon = '='
    icons = minutes / 5
  } else {
    icon = '🍱'
    icons = Math.floor(minutes / 10)
  }
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {currentDate}.{icon.repeat(icons)} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  )
}

export default Article
