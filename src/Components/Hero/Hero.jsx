import React from "react";

function Hero() {
  return (
    <div>
      <div className="hero  px-4 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-800 leading-tight">
              Friends to keep close in your life
            </h1>

            <p className="py-4 sm:py-6 text-sm sm:text-base text-gray-600">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>

            <button className="btn bg-cyan-700 hover:bg-cyan-800 text-white px-6 sm:px-8 text-sm sm:text-base rounded-md shadow-md transition duration-300">
              + Add a Friend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
