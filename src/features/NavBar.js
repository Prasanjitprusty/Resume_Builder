import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="bg-gray-800 w-full h-20 rounded flex items-center px-4 sm:px-8 lg:px-16 transition-colors duration-300">
        <div className="bg-white p-1 rounded">
          <img
            src={"/images/almabetter.png"}
            alt="logo"
            className="w-32 sm:w-48 h-auto"
          />
        </div>
        <div className="ml-auto flex-1">
          {/* Mobile menu button */}
          <div className="block lg:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-400 focus:outline-none"
              aria-label="Toggle menu"
              // Add your toggle functionality here
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          {/* Desktop menu */}
          <ul className="hidden lg:flex lg:ml-auto gap-8 items-center justify-end">
            <li>
              <NavLink 
                to={"/"} 
                className={({ isActive }) => 
                  isActive ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'
                }
              >
                Resume Template
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={"/myresume"} 
                className={({ isActive }) => 
                  isActive ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'
                }
              >
                My Resume
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={"/aboutUs"} 
                className={({ isActive }) => 
                  isActive ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="lg:hidden">
        <ul className="flex flex-col bg-gray-800 text-white">
          <li>
            <NavLink 
              to={"/"} 
              className={({ isActive }) => 
                isActive ? 'bg-blue-500' : 'text-gray-400 hover:bg-blue-500'
              }
            >
              Resume Template
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={"/myresume"} 
              className={({ isActive }) => 
                isActive ? 'bg-blue-500' : 'text-gray-400 hover:bg-blue-500'
              }
            >
              My Resume
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={"/aboutUs"} 
              className={({ isActive }) => 
                isActive ? 'bg-blue-500' : 'text-gray-400 hover:bg-blue-500'
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
