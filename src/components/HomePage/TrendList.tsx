import { useEffect, useState } from "react";
import type { TMDbApiResponse, TMDbMovie } from "../../types.tsx";
import MovieCard from "../MovieCard.tsx";

const TrendList = () => {
  const [movies, setMovies] = useState<TMDbMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to get data.");
        }

        const data: TMDbApiResponse = await response.json();
        setMovies(data.results.slice(0, 5));
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold pb-4">Trending Movies</h1>
      {/* 
        - grid-cols-3: 3 kolom di layar terkecil (mobile).
        - sm:grid-cols-4: 4 kolom di layar 'small' (tablet portrait).
        - md:grid-cols-5: 5 kolom di layar 'medium' dan lebih besar (desktop).
      */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TrendList;
