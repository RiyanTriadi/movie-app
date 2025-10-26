import type { TMDbMovie } from "../types";

interface MovieCardProps {
  movie: TMDbMovie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div key={movie.id} className="relative w-[220px] bg-black rounded-[10px]">
      <img
        src={`${imageBaseUrl}${movie.poster_path}`}
        alt={movie.title}
        className="w-[100%] rounded-[10px]"
      />
    </div>
  );
};

export default MovieCard;
