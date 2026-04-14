import React from "react";
import { Link, useParams } from "react-router";

function FrendsDetels() {
  const frendid = useParams();
  console.log(frendid);
  return (
    <div className="bg-base-200">
      <div className=" container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          {/* Left Column */}
          <div className="flex flex-col space-y-6">
            {/* Profile */}
            <div className="flex flex-col items-center space-y-4 bg-white shadow-md rounded-md py-6 px-4">
              <img
                src="https://randomuser.me/api/portraits/men/60.jpg"
                alt="Profile"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border"
              />

              <div className="text-center space-y-2">
                <h2 className="text-lg sm:text-xl font-semibold">
                  Emma Wilson
                </h2>

                <p>
                  <button className="btn bg-red-100 text-red-600 rounded-full text-sm">
                    Friend
                  </button>
                </p>

                <p>
                  <button className="btn bg-red-100 text-red-600 rounded-full text-sm">
                    Friend
                  </button>
                </p>

                <p className="text-sm sm:text-md text-gray-500">
                  "Former colleague, great mentor"
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Preferred: email
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="text-center space-y-3 px-2">
              <p className="py-2 bg-white rounded-md text-sm">Snooze 2 Weeks</p>
              <p className="py-2 bg-white text-gray-700 rounded text-sm">
                Archive
              </p>
              <p className="py-2 bg-white text-red-700 rounded text-sm">
                Delete
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-6 md:col-span-2">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded">
                <p className="text-xl sm:text-2xl font-bold">62</p>
                <p className="text-sm text-gray-500">Days Since Contact</p>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="text-xl sm:text-2xl font-bold">30</p>
                <p className="text-sm text-gray-500">Goal (Days)</p>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="text-base sm:text-lg font-bold">Feb 27, 2026</p>
                <p className="text-sm text-gray-500">Next Due</p>
              </div>
            </div>

            {/* Relationship Goal */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-4 rounded gap-2">
              <div>
                <h3 className="text-base sm:text-lg font-semibold">
                  Relationship Goal
                </h3>
                <p className="text-sm text-gray-600">Connect every 30 days</p>
              </div>

              <button className="btn text-blue-600 hover:underline text-sm">
                Edit
              </button>
            </div>

            {/* Quick Check-In */}
            <div className="bg-white p-4 rounded">
              <h3 className="text-base sm:text-lg font-semibold">
                Quick Check-In
              </h3>

              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <button className="flex-1 py-2 bg-green-100 text-green-700 rounded text-sm">
                  Call
                </button>
                <button className="flex-1 py-2 bg-blue-100 text-blue-700 rounded text-sm">
                  Text
                </button>
                <button className="flex-1 py-2 bg-purple-100 text-purple-700 rounded text-sm">
                  Video
                </button>
              </div>
            </div>

            {/* Recent Interactions */}
            <div className="bg-white p-4 rounded">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <h3 className="text-base sm:text-lg font-semibold">
                  Recent Interactions
                </h3>

                <button className="text-sm text-blue-600 hover:underline">
                  Full History
                </button>
              </div>

              <div className="mt-2 space-y-2">
                <div className="flex flex-col sm:flex-row justify-between border-b border-gray-300 py-3 gap-1">
                  <div>
                    <p>Text</p>
                    <p className="text-sm text-gray-500">
                      Asked for career advice
                    </p>
                  </div>
                  <div className="text-sm text-gray-500">Jan 28, 2026</div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between border-b border-gray-300 py-3 gap-1">
                  <div>
                    <p>Text</p>
                    <p className="text-sm text-gray-500">
                      Asked for career advice
                    </p>
                  </div>
                  <div className="text-sm text-gray-500">Jan 28, 2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrendsDetels;
