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

    const movieId =
      request.data.requests[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    const results = await axios.get(`movie/${movieId}`, {
      params: { append_to_reponse: "videos" },
    });
  };

  return <div></div>;
}
