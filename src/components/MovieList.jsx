import { useEffect, useState } from "react";
import MovieList_item from "./MovieList_item";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const KEY = "c3ef345";

function MovieList({ movies, setMovies, query }) {
  const [loading, setLoading] = useState(false);
  const [findMovie, setFindMovie] = useState(true);
  const [error, setError] = useState("");
  const [isOpen1, setIsOpen1] = useState(true);

  useEffect(() => {
    async function FetchingData() {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${encodeURIComponent(query)}`,
        );

        if (!response.ok) {
          throw new Error("Movie search failed. Please try again.");
        }

        const data = await response.json();

        if (data.Response === "False" && data.Error !== "Movie not found!") {
          throw new Error(data.Error || "Unable to search for movies.");
        }

        if (data.Response === "False") {
          setFindMovie(false);
          setMovies(undefined);
          return;
        }

        setFindMovie(true);
        setMovies(data.Search);
      } catch (err) {
        setError(
          err instanceof TypeError
            ? "Unable to connect. Please check your internet connection and try again."
            : err instanceof Error
              ? err.message
              : "Something went wrong while searching for movies.",
        );
      } finally {
        setLoading(false);
      }
    }

    FetchingData();
  }, [query, setMovies]);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 &&
        (loading ? (
          <Loader />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <MovieList_item
            movies={movies}
            findMovie={findMovie}
            loading={loading}
          />
        ))}
    </div>
  );
}

export default MovieList;
