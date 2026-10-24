function MovieList_item({ movies, findMovie, loading }) {
  return loading ? (
    "Loading ..."
  ) : (
    <ul className="list">
      {movies ? (
        movies?.map((movie) => (
          <li key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
              <p>
                <span>🗓</span>
                <span>{movie.Year}</span>
              </p>
            </div>
          </li>
        ))
      ) : (
        <h1 className="loading">
          {findMovie
            ? "There is no Movie to Show"
            : "Movie not found. Try another title."}
        </h1>
      )}
    </ul>
  );
}

export default MovieList_item;
