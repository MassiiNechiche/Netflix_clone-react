import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState();

  const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const base_url = `https://image.tmdb.org/t/p/original/`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }

    // console.log(movies);

    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie) => {
    if (trailer) {
      setTrailer();
    } else {
      const API_KEY = "d748e9ce9885f29af60b5116fec91446";

      const trailer_url = await axios.get(
        `http://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`
      );

      if (trailer_url.data.results[0]) {
        console.log(trailer_url.data.results[0].key);

        setTrailer(trailer_url.data.results[0].key);
      } else {
        alert("No trailer available!");
      }

      // const trailer_youtube = `https://www.youtube.com/watch?v=${trailer_url.results.key}`;
    }
  };

  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            // prettier-ignore
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
              <img
                onClick={()=>{ handleClick(movie)}}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                key={movie.id}
              />
              
            )
        )}
      </div>
      {trailer && <YouTube videoId={trailer} opts={opts} />}
    </div>
  );
}

export default Row;
