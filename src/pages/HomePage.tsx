import MovieList from "../components/HomePage/MovieList";
import TrendList from "../components/HomePage/TrendList";

const HomePage = () => {

  
  return (
    <>
      <div className="m-auto pt-20 px-6">
        <TrendList />
        <MovieList/>
      </div>
    </>
  );
};

export default HomePage;
