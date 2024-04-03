import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from'axios'
import Pagination from './Pagination';
function Movies({handleAddWatch,removeWatchList,watchlist}) {

  const [movie,setMovie]=useState([]);
  const [PageNo,setPageNo] =useState(1);

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=89cb5c483d9b128d177df742fb0db85a&language=en-US&page=${PageNo}`).then(function(res){
      setMovie(res.data.results);
    },[])
  })

  function IncPage(){
    setPageNo(PageNo+1);
  }

  function DecPage(){
    if(PageNo==1){
      setPageNo(PageNo)
    }else{
      setPageNo(PageNo-1);

    }
  }


  return (
    <div className='p-3 '>
      <div className='text-2xl text-center font-bold'>
        Trending Movies
      </div>
      <div className='flex flex-row flex-wrap justify-around '>

       {movie.map((movieObj)=>{
             // eslint-disable-next-line react/jsx-key
             return  <MovieCard key={movieObj.id} movieObj={movieObj} watchlist={watchlist} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddWatch={handleAddWatch} removeWatchList={removeWatchList}/>
       
       })}
        <Pagination PageNo={PageNo} IncPage={IncPage} DecPage={DecPage}/>
        
        
      </div>
    </div>
    )
}

export default Movies

// https://api.themoviedb.org/3/movie/popular?api_key=89cb5c483d9b128d177df742fb0db85a&language=en-US&page=2