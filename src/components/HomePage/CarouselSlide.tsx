import type { TMDbMovie } from "../../types";

interface CarouselSlideProps {
  movie: TMDbMovie;
}

const CarouselSlide = ({ movie }: CarouselSlideProps) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w1280";

  return (
    // flex-shrink-0: Mencegah slide "menciut" saat di dalam flex container.
    // aspect-video: Membuat rasio 16:9.
    <div className="w-full flex-shrink-0 aspect-video rounded-[10px] relative bg-black">
      <img
        src={`${imageBaseUrl}${movie.backdrop_path}`}
        alt={movie.title}
        className="w-full h-full object-cover opacity-50  rounded-[10px]"
      />
      <div className="absolute bottom-0 left-0 p-4 md:p-8">
        <h2 className="text-xl md:text-3xl font-bold">{movie.title}</h2>
        <p className="hidden md:block md:text-lg mt-2 max-w-2xl truncate">{movie.overview}</p>
      </div>
    </div>
  );
};

export default CarouselSlide;
