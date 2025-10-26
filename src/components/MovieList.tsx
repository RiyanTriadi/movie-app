import { useEffect, useState } from "react";
import type { TMDbApiResponse, TMDbMovie } from "../types.tsx";
import MovieCard from "./MovieCard.tsx";

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold pb-4">10 Film Terpopuler Saat Ini</h1>
      <div className="grid grid-flow-row grid-cols-5 gap-6">
        {movies.map((movie)=>(<MovieCard key={movie.id} movie={movie}/>))}
      </div>
    </div>
  );
};

export default MovieList;
