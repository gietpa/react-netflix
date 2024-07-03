import React, { useEffect } from "react";

export default function Row({ title, fetchUrl, iaLargeRow, id }) {
  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
  };

  return <div>Row</div>;
}
