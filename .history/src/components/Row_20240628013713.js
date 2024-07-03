import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import "./Row.css";

export default function Row({ title, fetchUrl, iaLargeRow, id }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovie(request.data.results);
  };

  return <div></div>;
}
