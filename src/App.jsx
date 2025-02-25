import React from 'react'
import News from './components/News'

const App = () => {
  return (
    <div className='bg-linear-to-t from-cyan-500 to-blue-300 w-[100%] h-[100vh] grid place-content-center'>
      <div className='w-[95vw] h-[95vmin] bg-black shadow-[0_15px_15px_rgba(0,0,0,0.8)]  rounded'>
      <News/>
      </div>
    </div>
  )
}

export default App