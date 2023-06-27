import React from 'react'

const SearchResults = ({ searchResults, clickSearchResult }) => {
  return (
    <ul>
      {
        searchResults.map((searchResult, i) => {
          return (
            <li onClick={() => clickSearchResult(searchResult)} key={i}>{searchResult}</li>
          )
        })
          }
    </ul>
  )
}

export default SearchResults
