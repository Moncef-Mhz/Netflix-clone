import React from "react";
import { useState } from "react";
import requests from "../Request";
import axios from "axios";
import { useEffect } from "react";

function Hero() {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  console.log(movie);
  const trunstring = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8 flex flex-col gap-4">
          <h1 className="capitalize text-white text-3xl md:text-5xl">
            {movie?.title}
          </h1>
          <div>
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 capitalize">
              Play
            </button>
            <button className="border  text-white border-gray-300 py-2 px-5 ml-4 capitalize">
              watch later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Realeased: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 ">
            {trunstring(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
//movie?.overview;
