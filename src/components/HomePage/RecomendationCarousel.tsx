import { useEffect, useState } from "react";
import type { TMDbApiResponse, TMDbMovie } from "../../types";
import CarouselSlide from "./CarouselSlide";

const RecomendationCarousel = () => {
  const [movies, setMovies] = useState<TMDbMovie[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
        const response = await fetch(url);

        if (!response) {
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
    fetchMovies();
  }, []);

  // Logic button
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((nextIndex) =>
      nextIndex === movies.length - 1 ? 0 : nextIndex + 1
    );
  };

  if (isLoading) return <div>Loading Carousel</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full relative overflow-hidden rounded-[10px]">
      <div
        className="flex transition-transform duration-500 ease-in-out "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {movies.map((movie) => (
          <CarouselSlide key={movie.id} movie={movie} />
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-black opacity-50 p-2 rounded-full"
      >
        {"<"}
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-black opacity-50 p-2 rounded-full"
      >
        {">"}
      </button>
    </div>
  );
};

export default RecomendationCarousel;
