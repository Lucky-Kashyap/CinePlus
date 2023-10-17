import React, { useEffect, useState } from "react";

const useFetch = (apiPath) => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setData(data.results);
  };

  return { data };
};

export default useFetch;
