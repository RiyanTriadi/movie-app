import type { TMDbMovie } from "../types";

interface MovieCardProps {
  movie: TMDbMovie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    /* 
      - 'w-full' (mengisi 100% lebar kolom grid).
      -  'overflow-hidden' (memastikan gambar terpotong sesuai 'rounded-[10px]').
      -  'aspect-[2/3]' (memaksa rasio 2:3, umum untuk poster).
      -  'key={movie.id}' (key sudah ada di .map() di TrendList, tidak perlu di sini).
    */
    <div className="relative w-full bg-black rounded-[10px] overflow-hidden aspect-[2/3]">
      <img
        src={`${imageBaseUrl}${movie.poster_path}`}
        alt={movie.title}
        /*
          - 'h-full' (mengisi tinggi container).
          - 'object-cover' (penting! agar gambar menutupi area tanpa penyok).
        */
        className="w-full h-full object-cover rounded-[10px]"
      />
    </div>
  );
};

export default MovieCard;