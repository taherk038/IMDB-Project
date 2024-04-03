import React from 'react'

import  {Link} from 'react-router-dom'
import Logo from '../logo.png'
const Navbar = () => {
  return (
    <div className='flex border space-x-6 items-center pl-1'>
        <img className='w-[75px] -mt-2' src={Logo} alt="logo"></img>
        {/* <a href='./' className='text-blue-500 text-2xl font-bold'>Movies</a> */} 
        {/* This above one load website to go to next page whereas lower one 
        that is link to dose not load */}
        <Link to='./' className='text-blue-500 text-2xl font-bold'>Movies</Link>
        <Link to='./watchlist' className='text-blue-500 text-2xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar