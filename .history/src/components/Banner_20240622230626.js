import React, { useState, useEffect } from "react";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetchDate();
  }, []);

  const fetchDate = async () => {
    const request = await axios.get(requests);
  };

  return <div></div>;
}
