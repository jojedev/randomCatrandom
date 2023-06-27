import React from 'react'

const TypeImgShape = ({ typeImg, setTypeImg }) => {
  const imgFilters = ['none', 'small', 'medium', 'square'] // Api didn't have api call for filters
  return (
    <div className='filters-buttons'>
      {
        imgFilters.map((type, i) => {
          return (
            <button
              className={typeImg === type ? 'active' : ''}
              onClick={() => setTypeImg(type)}
              key={i}
            >
              {type}
            </button>
          )
        })
        }
    </div>
  )
}

export default TypeImgShape
