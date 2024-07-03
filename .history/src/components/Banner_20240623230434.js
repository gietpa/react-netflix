import axios from "../api/axios";
import React, { useState, useEffect } from "react";
import requests from "../api/request";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetchDate();
  }, []);

  const fetchDate = async () => {
    const request = await axios.get(requests.fetchNowPlaying);
    console.log(request);

    const movieId =
      request.data.requests[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_reponse: "videos" },
    });
    setMovie(movieDetail);
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button info">More Information</button>
        </div>

        <h1 className="banner__description">{movie.overview}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}
