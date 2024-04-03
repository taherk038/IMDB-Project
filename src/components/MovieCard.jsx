import React from "react";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddWatch,
  removeWatchList,
  watchlist,
}) {
  function Conatins(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[30vh] w-[120px] bg-cover bg-center rounded-xl hover:cursor-pointer hover:scale-110 duration:300 m-3 flex flex-col items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`
      }}
    >
      {Conatins(movieObj) ? (
        <div
          onClick={() => removeWatchList(movieObj)}
          className="mx-2 my-2 bg-gray-900/60 rounded-md "
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddWatch(movieObj)}
          className="mx-2 my-2 bg-gray-900/60 rounded-md "
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-center w-full p-2 bg-gray-900/60 mt-10">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
