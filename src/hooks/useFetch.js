import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryData = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryData}}`;

  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();
    
        setData(data.results);
      };

      
    fetchData();
  }, [url]);

//   const fetchData = async () => {
//     const res = await fetch(url);
//     const data = await res.json();

//     setData(data.results);
//   };

  return { data };
};


