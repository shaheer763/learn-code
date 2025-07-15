import React, { useState, useEffect } from 'react'

export default function LessonSection({ lessons, query }) {
  const [completed, setCompleted] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('completed') || '[]')
    setCompleted(saved)
  }, [])

  const toggleComplete = (id) => {
    const updated = completed.includes(id)
      ? completed.filter(x => x !== id)
      : [...completed, id]
    setCompleted(updated)
    localStorage.setItem('completed', JSON.stringify(updated))
  }

  return (
    <>
      {['Java', 'Python'].map(lang => (
        <section key={lang}>
          <h2>{lang}</h2>
          <ul>
            {lessons
              .filter(l => l.lang === lang && l.title.toLowerCase().includes(query))
              .map(l => (
                <li key={l.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={completed.includes(l.id)}
                      onChange={() => toggleComplete(l.id)}
                    />
                    <a href={l.url} target="_blank" rel="noopener noreferrer">
                      {l.title}
                    </a>
                  </label>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </>
  )
}