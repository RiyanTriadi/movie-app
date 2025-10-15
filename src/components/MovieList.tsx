import { useEffect, useState } from "react";
import type { Movie, ApiResponse } from "../types.tsx";

const MovieList = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string|null>(null);

    useEffect(()=>{
      const fetchMovies = async () => {
        const apiKey = import.meta.env.VITE_IMDB_API_KEY;
        const response = await fetch(`https://www.omdbapi.com/?s=batman&apikey=${apiKey}`);
      }
    },[])

  return (
    <div>MovieList</div>
  )
}

export default MovieList