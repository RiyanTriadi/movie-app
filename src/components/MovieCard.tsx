import type { TMDbMovie } from "../types";

interface MovieCardProps {
  movie: TMDbMovie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    /* INI PERUBAHAN UTAMA:
      - Hapus 'w-[110px] md:w-[220px]'.
      - Ganti dengan 'w-full' (mengisi 100% lebar kolom grid).
      - Tambah 'overflow-hidden' (memastikan gambar terpotong sesuai 'rounded-[10px]').
      - Tambah 'aspect-[2/3]' (memaksa rasio 2:3, umum untuk poster).
      - Hapus 'key={movie.id}' (key sudah ada di .map() di TrendList, tidak perlu di sini).
    */
    <div className="relative w-full bg-black rounded-[10px] overflow-hidden aspect-[2/3]">
      <img
        src={`${imageBaseUrl}${movie.poster_path}`}
        alt={movie.title}
        /*
          INI PERUBAHAN UTAMA GAMBAR:
          - Hapus 'w-[100%]' ganti dengan 'w-full'.
          - Tambah 'h-full' (mengisi tinggi container).
          - Tambah 'object-cover' (penting! agar gambar menutupi area tanpa penyok).
        */
        className="w-full h-full object-cover rounded-[10px]"
      />
    </div>
  );
};

export default MovieCard;