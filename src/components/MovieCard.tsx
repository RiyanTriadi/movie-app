import type { TMDbMovie } from "../types";

interface MovieCardProps {
  movie: TMDbMovie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div key={movie.id} className="border p-4 w-[200px]">
      <img
        src={`${imageBaseUrl}${movie.poster_path}`}
        alt={movie.title}
        className="w-screen"
      />
      <h3>{movie.title}</h3>
      <p>Release: {movie.release_date}</p>
      <p>Score: {movie.vote_average}</p>
    </div>
  );
};

export default MovieCard;
