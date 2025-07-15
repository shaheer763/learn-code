import React from 'react'

export default function SearchBar({ setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search lessons..."
      onChange={e => setQuery(e.target.value.toLowerCase())}
    />
  )
}