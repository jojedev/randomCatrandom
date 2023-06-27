import { React, useRef } from 'react'
import './inputConsole.css'
import Filters from './Filters'
import TypeImgShape from './TypeImgShape'

const InputConsole = ({ setFact, fact, setNewImg, setGif, gif, picFilter, setPicFilter, typeImg, setTypeImg, widthImg, setWidthImg }) => {
  const textPromptRef = useRef(null)
  const widthRef = useRef(null)
  const submitPrompt = () => {
    const submitValue = textPromptRef.current.value
    const widthValue = widthRef.current.value
    setWidthImg(widthValue)
    submitValue === fact ? setNewImg(prevCheck => !prevCheck) : setFact(submitValue)
  }
  return (
    <section>
      <input placeholder='Your text' type='text' ref={textPromptRef} />
      <input placeholder='Img Width' type='number' ref={widthRef} />
      <Filters picFilter={picFilter} setPicFilter={setPicFilter} />
      <TypeImgShape typeImg={typeImg} setTypeImg={setTypeImg} />
      <button className={gif ? 'active' : ''} onClick={() => setGif(toggle => !toggle)}>GIF</button>
      <br />
      <button className='submitCat' onClick={submitPrompt}> GIVE ME MY CAT </button>
    </section>
  )
}

export default InputConsole
