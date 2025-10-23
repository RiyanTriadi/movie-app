import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <>
      <header className="flex justify-center text-white bg-black py-4">
        <div className="container flex justify-between items-center">
          <div className="text-2xl font-bold">Movie App</div>
          <nav className="hidden gap-5 items-center md:flex">
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
                  className="bg-white py-1 px-2 rounded-[10px] text-black focus:outline-none"
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
