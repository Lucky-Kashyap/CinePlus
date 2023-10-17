import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data,setData] = useState([]);

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
