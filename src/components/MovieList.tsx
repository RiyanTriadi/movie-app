import { useEffect, useState } from "react";
import type { TMDbApiResponse, TMDbMovie } from "../types.tsx";

const MovieList = () => {
  const [movies, setMovies] = useState<TMDbMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Gagal mengambil data dari server.");
        }

        const data: TMDbApiResponse = await response.json();
        setMovies(data.results.slice(0, 10));
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPopularMovies();
  }, []);

  if (isLoading) {
    return <div>Sedang memuat...</div>;
  }

  if (error) {
    return <div>Terjadi kesalahan: {error}</div>;
  }

  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <h1>10 Film Terpopuler Saat Ini</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
            }}
          >
            <img
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%" }}
            />
            <h3>{movie.title}</h3>
            <p>Rilis: {movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
