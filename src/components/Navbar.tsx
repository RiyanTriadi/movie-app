import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="fixed z-[99] w-screen text-white bg-black py-4">
        <div className="w-[90%] lg:w-[1200] mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link to="/">Movie App</Link>{" "}
          </div>

          <nav className="hidden gap-5 items-center md:flex">
            <ul className="flex gap-5">
              <li className="hover:text-gray-300 transition-colors">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-gray-300 transition-colors">
                <Link to="/category">Category</Link>
              </li>
              <li className="hover:text-gray-300 transition-colors">
                <Link to="/browse">Browse Movie</Link>
              </li>
            </ul>
            <div>
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
