import { React, useEffect, useState } from 'react'
import SearchResults from './SearchResults'

const SearchTags = ({ search, setSearch, searchResults, setSearchResults, tags, setSelectedTag, selectedTag }) => {
  const [boxDisplay, setBoxDisplay] = useState(false)
  useEffect(() => {
    if (search === selectedTag) return
    const filteredResults = tags.filter(tag => tag.toLowerCase().includes(search.toLowerCase()))
    const finalFilteredResults = filteredResults.slice(0, 10)
    setSearchResults(finalFilteredResults)
    search ? setBoxDisplay(true) : setBoxDisplay(false)
    if (search === '') setSelectedTag('')
  }, [search])

  const clickSearchResult = (selectedResult) => {
    setSelectedTag(selectedResult)
    setSearch(selectedResult)
    setBoxDisplay(false)
  }

  return (
    <div className='searchBar'>
      <input placeholder='Search for tags' type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
      {boxDisplay &&
        <SearchResults searchResults={searchResults} clickSearchResult={clickSearchResult} />}
    </div>
  )
}

export default SearchTags
