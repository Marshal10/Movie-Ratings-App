export default function MovieList({ movies, handleSelected }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          handleSelected={handleSelected}
        />
      ))}
    </ul>
  );
}

function Movie({ movie, handleSelected }) {
  return (
    <li onClick={() => handleSelected(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`}></img>
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>📅</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
