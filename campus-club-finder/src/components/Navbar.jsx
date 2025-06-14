import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-indigo-500 text-white shadow-md">
      <div className="w-full max-w-screen-xl px-6 py-4 flex justify-start items-center gap-12">
        <h1 className="text-2xl font-extrabold">Campus Club Finder</h1>

        <ul className="flex gap-6 font-semibold text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-300 underline"
                  : "text-green-100 hover:text-white transition"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clubs"
              className={({ isActive }) =>
                isActive
                  ? "text-green-300 underline"
                  : "text-green-100 hover:text-white transition"
              }
            >
              Clubs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-green-300 underline"
                  : "text-green-100 hover:text-white transition"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
