import React from 'react'

const Filters = ({ picFilter, setPicFilter }) => {
  const imgFilters = ['none', 'blur', 'mono', 'sepia', 'negative', 'paint'] // Api didn't have api call for filters
  return (
    <div className='filters-buttons'>
      {
        imgFilters.map((filters, i) => {
          return (
            <button
              className={picFilter === filters ? 'active' : ''}
              onClick={() => setPicFilter(filters)}
              key={i}
            >
              {filters}
            </button>
          )
        })
        }
    </div>
  )
}

export default Filters
