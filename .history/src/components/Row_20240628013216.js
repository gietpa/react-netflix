import React, { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Row({ title, fetchUrl, iaLargeRow, id }) {
  const [movie, setMovie] = uesState([]);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovie(request.data.results);
  };

  return <div>Row</div>;
}
