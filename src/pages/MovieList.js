import { useEffect, useState } from "react";
import { MovieCard } from "../components";
import useFetch from "../hooks/useFetch";
import { useTitle } from "../hooks";

export const MovieList = ({ apiPath, title }) => {
  // const [movies, setMovies] = useState([]);
  const { data: movies } = useFetch(apiPath);
  const pageTitle = useTitle(title);
  // const {data:movies} = useFetch("https://api.themoviedb.org/3/movie/now_playing?api_key=233483de703793f10c35fd4818a6134a")

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const res = await fetch(
  //     "https://api.themoviedb.org/3/movie/now_playing?api_key=233483de703793f10c35fd4818a6134a"
  //   );
  //   const data = await res.json();

  //   setMovies(data.results);
  // };
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {/* <MovieCard/> */}
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* {
            data.map(movie=>(
                <div>
                    <h1>{movie.id}</h1>
                    <p>{movie.original_title}</p>
                    <p>{movie.overview}</p>
                    <img src={`https://api.themoviedb.org/ + ${movie.poster_path}`} alt="movie poster" />
                </div>
            ))
        } */}
    </main>
  );
};
