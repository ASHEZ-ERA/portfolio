import React from 'react'
import {Briefcase} from 'lucide-react'
import { NavLink,Link } from 'react-router-dom'

function Header() {
    //hamburger Navbar for Mobile resposiveness
    const [menuOpen, setMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    const closeMenu = () => {
        setMenuOpen(false)
    }

    const navLinkClass = ({isActive}) => {
     return `block py-2 px-4 rounded transition ${
          isActive ? " text-blue-600 font-bold underline" : "text-gray-700"
        } hover:bg-gray-100`;
    }

  return (
    <>
      <header className="shadow sticky top-0 z-50 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold text-blue-600 whitespace-nowrap"
          >
            Dawood Ashraf
          </Link>

          {/*  Portfolio Icon/Text */}
          <div className="hidden md:flex items-center space-x-2 text-blue-600 animate-bounce">
            <Briefcase className="w-6 h-6" />
            <span className="font-bold text-lg tracking-wide">Portfolio</span>
          </div>

          {/* Rightside of the navbar > Navigation and hamburger */}
          <div className="flex items-center space-x-4">
            {/* Desktop */}
            <ul className="hidden lg:flex space-x-6 font-medium">
              <li>
                <NavLink to="/" className={navLinkClass} onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="experience" className={navLinkClass} onClick={closeMenu}>
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink to="skills" className={navLinkClass} onClick={closeMenu}>
                  Skills
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="contact"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-gray-700 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden px-4 pb-4 bg-white border-t border-gray-100">
            <ul className="space-y-2 font-medium">
              <li>
                <NavLink to="/" className={navLinkClass} onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              {/* <li><NavLink to="/experience" className={navLinkClass} onClick={closeMenu}>Experience</NavLink></li>
            <li><NavLink to="/skills" className={navLinkClass} onClick={closeMenu}>Skills</NavLink></li> */}
              <li>
                <NavLink
                  to="/contact"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

export default Header
