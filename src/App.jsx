import React, { useState } from 'react'
import Header from './components/Header'
import LessonSection from './components/LessonSection'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'
import { lessons } from './data/lessons'

function App() {
  const [query, setQuery] = useState('')
  return (
    <div className="app">
      <Header />
      <SearchBar setQuery={setQuery} />
      <LessonSection lessons={lessons} query={query} />
      <Footer />
    </div>
  )
}
export default App