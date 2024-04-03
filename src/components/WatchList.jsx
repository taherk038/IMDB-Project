/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import genres from '../genre/genre_id'
function WatchList({watchlist,setWatchList,removeWatchList}) {

  const [search,Setsearch]=useState('')

  let handleSearch=(e)=>{
    Setsearch(e.target.value);
  }

  let sortInc=()=>{
       let SortedInc=watchlist.sort((movieA,movieB)=>{
            return movieA.vote_average-movieB.vote_average;
       })
       setWatchList([...SortedInc])
  }

  let sortDec=()=>{
    let SortedDec=watchlist.sort((movieA,movieB)=>{
         return movieB.vote_average-movieA.vote_average;
    })
    setWatchList([...SortedDec])
}
  return (
    <>
       <div className="mt-4 flex justify-center text-white">
        <button className="bg-blue-400 text-center ms-4  w-[6rem] h-[2rem] rounded-md mx-4 " >All Genres</button>
        <button className="bg-gray-200 text-center ms-4  w-[6rem] h-[2rem] rounded-md mx-4 hover:cursor-pointer">Action</button>
        <button className="bg-gray-200 text-center ms-4  w-[6rem] h-[2rem] rounded-md mx-4 hover:cursor-pointer">Animation</button>
       </div>
      <div className="flex justify-center my-4">
        <input onChange={handleSearch} value={search} className=" bg-gray-200 w-50 h-10 m-4 p-4 outline-none" type="text" placeholder="Search for movies" />
      </div>

      <div className="overflow-hidden rounded-lg border bg-gray-70">
        <table className=" w-full text-center">
          <thead className="border-b-2 ">
            <tr>
              <th>Name</th>
              <th className="flex justify-center"> 
                <div className="p-2"  onClick={sortInc}><i class="fa-solid fa-arrow-up"></i></div>
                <div className="p-2">Rating</div>
                <div className="p-2" onClick={sortDec}><i class="fa-solid fa-arrow-down"></i></div>
              </th>
              
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>

            {watchlist.filter((movieObj)=>{
              return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((movieObj)=>{
                return   <tr className="border-b-2">
                <td className="flex items-center px-6 ">
                  <img src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} className="w-[6rem] h-[6rem] ml-5" />
                  <div className="mx-8">{movieObj.original_title}</div>
                </td>
                <td>{movieObj.vote_average}</td>
                <td>{movieObj.popularity}</td>
                <td>{genres[movieObj.genre_ids[0]]}</td>
  
                <td className="text-red-800 hover:cursor-pointer" onClick={()=>removeWatchList(movieObj)} >Delete</td>
              </tr>
              
            

            })}
            
          </tbody>
        </table>
      </div>
   
    </>
  );
}

export default WatchList;
