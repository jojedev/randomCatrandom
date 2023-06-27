import React from 'react'

const startScreen = ({ setStartApp }) => {
  const startApp = () => {
    setStartApp(true)
  }
  return (
    <section className='startBackground'>
      <button className='startApp' onClick={startApp}>I want cats!</button>
    </section>
  )
}

export default startScreen
