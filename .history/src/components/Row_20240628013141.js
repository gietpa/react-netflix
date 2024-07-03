import React, { useEffect } from "react";
import axios from "../api/axios";

export default function Row({ title, fetchUrl, iaLargeRow, id }) {
  const [movie, setMovie] = uesState([]);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
  };

  return <div>Row</div>;
}
