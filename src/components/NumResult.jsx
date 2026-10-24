function NumResult({ movie }) {
  console.log(movie);
  return (
    <p className="num-results">
      Found <strong>{movie ? movie.length : "0"}</strong> results
    </p>
  );
}

export default NumResult;
