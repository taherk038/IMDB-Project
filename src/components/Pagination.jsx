import React from 'react'

function Pagination({IncPage,DecPage,PageNo}) {
  return (
    <div className='bg-gray-400 p-2 mt-6  w-full flex justify-center '>
         <div className='px-8 hover:cursor-pointer hover:scale-110 ' onClick={DecPage}>
            <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div className='font-bold'>{PageNo}</div>
        <div className='px-8 hover:cursor-pointer hover:scale-110' onClick={IncPage}>
        <i class="fa-solid fa-arrow-right"></i>
        </div>
       
    </div>
  )
}

export default Pagination