
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Movies from './components/Movies'
import Navbar from './components/Navbar'
import WatchList from './components/WatchList'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  let [watchlist,setWatchList]=useState([]);

  let handleAddWatch=(movieObj)=>{
          let newWatchList=[...watchlist,movieObj];
          localStorage.setItem('movieApp',JSON.stringify(newWatchList))
          setWatchList(newWatchList);
          console.log(newWatchList);
  }

  let removeWatchList =(movieObj)=>{

    let filteredWatchList=watchlist.filter((movie)=>{
      return movie.id!=movieObj.id
      // jisko delete karna hai usko return nahi karre
    })
    localStorage.setItem('movieApp',JSON.stringify(filteredWatchList))
    setWatchList(filteredWatchList)

  }

  useEffect(()=>{
    let moviesfromlocal=localStorage.getItem('movieApp')
    if(!moviesfromlocal){
      return
    }
    setWatchList(JSON.parse(moviesfromlocal))
  },[])

  return (
    <>
    
    <BrowserRouter>

    <Navbar />

    <Routes>
     

    <Route path='/' element={<> <Banner/>  <Movies watchlist={watchlist} handleAddWatch={handleAddWatch}  removeWatchList={removeWatchList}/></>}   />
    
    <Route path='/watchlist' element={<WatchList watchlist={watchlist} setWatchList={setWatchList} removeWatchList={removeWatchList}  />}   />
    
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
