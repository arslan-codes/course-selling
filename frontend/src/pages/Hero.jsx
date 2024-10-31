import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-gray-900 via-fuchsia-900 to-black text-white min-h-screen flex items-center justify-center">
      <div className="relative px-6 w-full max-w-5xl">
        {/* Background gradient decoration */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl opacity-60 sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#6a0dad] to-[#ff8bff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="mx-auto text-center py-28 sm:py-48 lg:py-32">
          <div className="mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
              Join the future of online learning!{" "}
              <a
                href="#courses"
                className="font-semibold text-white hover:text-pink-300"
              >
                Browse Courses <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Transform Your Skills
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Explore top-notch courses designed by industry experts. Your path to
            mastery starts here—upgrade your knowledge and enhance your career
            today!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#start-learning"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-indigo-700 transition"
            >
              Get Started
            </a>
            <a
              href="#why-us"
              className="text-sm font-semibold text-white hover:text-indigo-400"
            >
              Why Choose Us? <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Bottom Gradient Decoration */}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#6a0dad] to-[#ff8bff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
