import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { MovieCard } from "../components";
import { useTitle } from "../hooks";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams);
  const queryData = searchParams.get("q");
  const pageTitle = useTitle(`Search Result For ${queryData}`);
  // console.log(queryData);

  const { data: movies } = useFetch(apiPath, queryData);

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No result found for '${queryData}'`
            : `Result for '${queryData}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
