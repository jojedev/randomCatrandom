import { React, useState, useEffect } from 'react'
import InputConsole from './InputConsole'
import SearchTags from './SearchTags'

const Interface = ({ tags, setTags }) => {
  const [gif, setGif] = useState(false)
  const [newImg, setNewImg] = useState(false)
  const [fact, setFact] = useState()
  const [urlImg, setUrlImg] = useState()
  const [picFilter, setPicFilter] = useState('none')
  const [typeImg, setTypeImg] = useState('none')
  const [widthImg, setWidthImg] = useState('none')
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [selectedTag, setSelectedTag] = useState('')
  const urlCatFact = 'https://catfact.ninja/fact'
  const cataasApiUrl = 'https://cataas.com/cat'

  useEffect(() => {
    if (fact) return // I needed to prevent the randomfact from being searched if user had any thing writen on form
    fetch(urlCatFact)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
      .catch(error => {
        console.log(error)
      })
  }, [fact])

  useEffect(() => {
    if (!fact) return
    const catFact = fact.split(' ').slice(0, 5).join(' ')
    console.log(catFact)
    //    fetch(`https://cataas.com/cat/says/${urlToFetch(catFact)}?json=true`)
    fetch(`${cataasApiUrl}${urlToFetch(catFact)}?filter=${picFilter}&type=${typeImg}&width=${widthImg}&json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setUrlImg(url)
      })
      .catch(error => {
        console.log(error)
      })
  }, [fact, newImg])

  const urlToFetch = (catFact) => {
    let endUrl = ''
    if (gif && !search) {
      endUrl = `/gif/says/${catFact}`
      return endUrl
    }
    if (selectedTag && !gif) {
      endUrl = `/${selectedTag}/says/${catFact}`
      return endUrl
    }

    endUrl = `/says/${catFact}`
    console.log(endUrl)
    return endUrl
  }
  return (
    <>
      <h1 className='title'>RANDOM CAT WITH RANDOM TEXT</h1>
      <div className='content'>
        <section className='inputConsole'>
          <SearchTags
            search={search}
            setSearch={setSearch}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            tags={tags}
            setTags={setTags}
            setSelectedTag={setSelectedTag}
            selectedTag={selectedTag}
          />
          <InputConsole
            setFact={setFact}
            fact={fact} setNewImg={setNewImg}
            setGif={setGif} gif={gif}
            picFilter={picFilter}
            setPicFilter={setPicFilter}
            typeImg={typeImg}
            setTypeImg={setTypeImg}
            widthImg={widthImg}
            setWidthImg={setWidthImg}
          />
          <span className='fact'>{fact}</span>
          <br />
        </section>
        <section className='catImg'>
          <img src={`https://cataas.com${urlImg}`} alt='random cat with random cat text fetched from an API' />
        </section>
      </div>
    </>
  )
}

export default Interface
