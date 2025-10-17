import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="flex justify-center text-white bg-black py-4">
        <div className="container flex justify-between items-center">
          <div className="text-2xl font-bold">Movie App</div>
          <nav className="flex gap-5 items-center">
            <ul className="flex gap-5">
              <li className="nav-link">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-link">
                <Link to="/category">Category</Link>
              </li>
              <li className="nav-link">
                <Link to="/browse">Browse Movie</Link>
              </li>
            </ul>
            <div className="quick-search">
              <form action="">
                <input
                  type="text"
                  className="bg-gray-200 py-1 px-2 rounded-[10px] focus:ring-0"
                  placeholder="Quick search"
                />
              </form>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
