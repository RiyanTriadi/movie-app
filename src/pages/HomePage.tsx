import MovieList from "../components/HomePage/MovieList";
import TrendList from "../components/HomePage/TrendList";

const HomePage = () => {
  return (
    <div className="max-w-[1200px] m-auto pt-20 px-6">
      <TrendList />
      <MovieList />
    </div>
  );
};

export default HomePage;
