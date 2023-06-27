import './App.css'
import { useState, useEffect } from 'react'
import StartScreen from './StartScreen'
import Interface from './Interface'

function App () {
  const [start, setStartApp] = useState(false) //
  const [tags, setTags] = useState([]) //
  // marron claro A9907E // beish F3DEBA // ABC4AA verde claro // marron oscuro 675D50

  useEffect(() => {
    fetch('https://cataas.com/api/tags')
      .then(res => res.json())
      .then(data => {
        setTags(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [start])

  return (
    <main>
      {!start &&
        <StartScreen setStartApp={setStartApp} />}
      {start &&
        <Interface
          tags={tags}
          setTags={setTags}
        />}
    </main>
  )
}
export default App
