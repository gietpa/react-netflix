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
  };

  return <div></div>;
}
