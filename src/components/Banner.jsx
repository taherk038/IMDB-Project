import React from 'react'

function Banner() {
  return (
    <div className='h-[30vh] md:h-[70vh] flex items-end' style={{backgroundImage:`url(https://www.iwmbuzz.com/wp-content/uploads/2020/05/10-secret-facts-of-avengers-endgame-you-should-know-920x518.jpg)`}}>
      <div className='text-white text-xl text-center w-full bg-gray-900/60 p-4 '>
        Avengers End Game
      </div>
    </div>
  )
}

export default Banner