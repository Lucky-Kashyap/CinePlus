import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";


export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      
        <Routes>
         
            <Route path="" element={<MovieList apiPath="movie/now_playing" title="CinePlus-Movie-Web-App" />} />
            <Route path="movie/:id" element={<MovieDetail />} />
            <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="CinePlus-Movie Popular" />} />
            <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="CinePlus-Movie Top Rated" />} />
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="CinePlus-Movie Upcoming" />} />
            <Route path="search" element={<Search apiPath="/search/movie"/>} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
  
    </div>
  )
}
