import React from "react";
import { Link } from "react-router";
function ErrorPage() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-white px-4">
        <div className="text-center max-w-xl">
          
          <h1 className="text-6xl sm:text-7xl font-extrabold text-cyan-700">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mt-4 text-gray-800">
            Page Not Found
          </h2>
          <p className="mt-3 text-gray-500 text-sm sm:text-base">
            Oops! The page you are looking for doesn’t exist or has been moved.
          </p>
          <Link to="/">
            <button className="mt-6 btn bg-cyan-700 hover:bg-cyan-800 text-white px-6 rounded-full">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
