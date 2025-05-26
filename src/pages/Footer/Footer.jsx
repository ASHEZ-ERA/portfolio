import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800 ">
      <div className="max-w-screen-xl mx-auto p-6 lg:py-12">
        <div className="md:flex md:justify-between">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <Link to="/" className="text-4xl font-bold text-orange-500">
              Dawood Ashraf
            </Link>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">
            {/* Resources */}
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-orange-400">
                Resources
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link
                    to="/"
                    className="hover:text-orange-400 transition duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-orange-400 transition duration-200"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-orange-400">
                Follow Me
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="https://github.com/ASHEZ-ERA"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-orange-400 transition duration-200"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-orange-400">
                Legal
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link
                    to="#"
                    className="hover:text-orange-400 transition duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-orange-400 transition duration-200"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <span>
            © 2025{" "}
            <a href="#" className="text-orange-500 hover:underline">
              Dawood Ashraf
            </a>
            . All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
