import { useState } from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-(--color-fireworks2) fixed top-0 right-0 left-0 z-1000 ">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="ESOCS"
            title="ESOCS"
            className="inline-flex items-center"
          >
            <img src="https://esocs.church/assets/assets/images/website/20230220_073758_6540941.png"
             alt="Eternal Sacred Order Of Cherubim &amp; Seraphim"
             className="w-12 rounded-full"></img>
            {/* <svg
              className="w-8 text-teal-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg> */}
            <span className="ml-2 text-xl font-bold tracking-wide bg-gradient-to-r from-white to-violet-700 bg-clip-text text-transparent uppercase">
              Ecef
            </span>
          </a>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                // aria-label="Our product"
                // title="Our product"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </a>
              {/* <a
                href="/"
                
              >
                Product
              </a> */}
            </li>
            <li>
              <Link
                to="/Donate"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Donate
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                aria-label="Contact"
                title="Contact"
                className="font-medium tracking-wide text-gray-100
                 transition-all duration-300 hover:text-"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/verify"
                aria-label="Verify"
                title=" Verify"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Verify
              </Link>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/login"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition-all duration-300 delay-150 hover:scale-[1.03] rounded shadow-md bg-(--color-fireworks1) hover:bg-(--color-fireworks3) focus:shadow-outline focus:outline-none"
                aria-label="Sign in"
                title="Sign in"
                >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition-all duration-300 delay-150 hover:scale-[1.03] rounded shadow-md bg-(--color-fireworks1) hover:bg-(--color-fireworks3) focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition-all ease-in-out duration-700 delay-700 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-(--color-fireworks2)  border border-violet-900 rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="ECEF"
                        title="ECEF"
                        className="inline-flex items-center"
                      >
                        <img src="https://esocs.church/assets/assets/images/website/20230220_073758_6540941.png"
                         alt="Eternal Sacred Order Of Cherubim &amp; Seraphim"
                         className="w-10 rounded-full"></img>
                        <span className="ml-2 text-xl font-bold tracking-wide bg-gradient-to-l from-white to-violet-700 bg-clip-text text-transparent uppercase">
                          ecef
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition-all duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-white" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide text-white lg:text-gray  transition-colors duration-200 hover:text-white"
                        >
                          Home
                        </Link>
                      </li>
                      {/* <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Pricing
                        </a>
                      </li> */}
                      <li>
                        <Link
                          to="/contact"
                          aria-label="Contact"
                          title="Contact"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          aria-label="About ECEF"
                          title="About ECEF"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/verify"
                          aria-label="About ECEF"
                          title="About ECEF"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Verify
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/login"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200
                           rounded shadow-md bg-gradient-to-r from-blue-500 hover:scale-[1.02]
                        to-violet-600 hover:bg-gradient-to-l hover:from-bg-violet-700 hover:to-bg-blue-700  focus:shadow-outline focus:outline-none"
                          aria-label="Sign in"
                          title="Sign in"
                        >
                          Sign in
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/register"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-blue-500 
                        to-violet-600 hover:bg-gradient-to-l hover:from-bg-violet-700 hover:to-bg-blue-700 hover:scale-[1.02]  focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
