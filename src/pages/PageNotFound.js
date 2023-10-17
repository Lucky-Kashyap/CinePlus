import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/pagenotfound.png";
import { Button } from "../components";
import { useTitle } from "../hooks";

export const PageNotFound = ({title}) => {
  const pageTitle = useTitle(title);
  // useEffect(()=>{
  //   document.title=`Page Not Found /Cineplus`
  // });
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-3xl text-gray-700 font-bold my-10 dark:text-white">
            404, Oops!
          </p>
          <div className="max-w-md">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="404 Page Not Found"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back To Cinemate</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
