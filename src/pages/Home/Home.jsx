import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import profilepic from "../Home/Profile.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const [hoverDownload, setHoverDownload] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const roles = [
    "Creative Developer",
    2000,
    "UX Designer",
    2000,
    "Tech Enthusiast",
    2000,
    "Problem Solver",
    2000,
  ];

  useEffect(() => {
    if (heroRef.current && bgRef.current) {
      gsap.to(bgRef.current, {
        y: "50%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    gsap.from(".hero-title", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.utils.toArray(".project-card").forEach((card, i) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
      });
    });
  }, []);

  return (
    <div className="bg-black text-white">
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <div ref={bgRef} className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-20"
          >
            <source src="/videos/abstract-bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Circular Profile Picture */}
        <img
          src={profilepic}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-orange-500 hover:border-orange-700 transition-colors duration-300 z-10 mb-6"
        />

        {/* Animated Roles and Heading */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <TypeAnimation
            sequence={roles}
            wrapper="div"
            speed={50}
            repeat={Infinity}
            className="text-orange-500 text-xl sm:text-2xl font-mono mb-4"
          />

          <h2 className="hero-title text-4xl sm:text-6xl font-bold mb-6 leading-tight">
            Hello, I'm <span className="text-orange-500">Dawood Ashraf</span>
            <div className="text-lg sm:text-2xl mt-4">
              Crafting Digital Experiences
            </div>
          </h2>

          {/* Call to Action Button */}
          <div
            onMouseEnter={() => setHoverDownload(true)}
            onMouseLeave={() => setHoverDownload(false)}
          >
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center px-8 py-4 text-lg font-medium bg-gradient-to-r from-orange-600 to-orange-800 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg"
            >
              <svg
                style={{
                  transform: hoverDownload
                    ? "rotate(360deg) scale(1.2)"
                    : "rotate(0deg) scale(1)",
                  transition: "all 0.5s",
                }}
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              Let's Connect
            </Link>
          </div>
        </div>

        {/* Particle Effect Toggle */}
        {showParticles && (
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            {[...Array(30)].map((_, i) => {
              const size = Math.random() * 10 + 5;
              return (
                <div
                  key={i}
                  className="absolute rounded-full bg-orange-500 opacity-50"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `particleAnim ${
                      10 + Math.random() * 10
                    }s ease-in-out infinite`,
                  }}
                />
              );
            })}
          </div>
        )}
      </section>

      {/* PROJECT SHOWCASE */}
      <section className="py-20 px-6 sm:px-16">
        <h1 className="text-center text-4xl sm:text-5xl font-serif text-orange-500 mb-12">
          Selected Creations
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="project-card relative group overflow-hidden rounded-xl shadow-xl bg-gray-900 hover:scale-105 transition-transform"
            >
              <img
                src={`https://picsum.photos/seed/project${i}/600/400`}
                alt={`Project ${i}`}
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/600x400?text=Project+${i}`;
                }}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-lg font-bold">Project {i}</h3>
                <p className="text-sm text-orange-400">Coming soon...</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FLOATING PARTICLE TOGGLE BUTTON */}
      <div className="fixed bottom-8 right-8 z-50 animate-float">
        <button
          className="bg-orange-600 text-white p-4 rounded-full shadow-xl hover:bg-orange-700 transition-all"
          onClick={() => setShowParticles(!showParticles)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </button>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          @keyframes particleAnim {
            0% { transform: translateY(0); opacity: 0.2; }
            50% { opacity: 1; }
            100% { transform: translateY(-100vh); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}
