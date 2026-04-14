import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";



function FrendsDetels() {
  const { id } = useParams();
  console.log(id);
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
              <p className="py-2 bg-white rounded-md  flex items-center justify-center gap-2"><RiNotificationSnoozeLine /> Snooze 2 Weeks</p>
              <p className="py-2 bg-white text-gray-700 rounded  flex items-center justify-center gap-2">
                <FiArchive />Archive
              </p>
              <p className="py-2 bg-white text-red-700 rounded flex items-center justify-center gap-2">
                <RiDeleteBin6Line />Delete
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-6 md:col-span-2">
            {/* Stats */}
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 text-center">
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

              <div className=" mt-2 grid grid-cols-1  lg:grid-cols-3 gap-4 text-center py-5">
                <div className="bg-base-200 p-4 rounded space-y-2">
                  <p className="text-xl sm:text-2xl font-bold flex items-center justify-center">
                    <FiPhoneCall />
                  </p>
                  <p className="text-center font-bold">Call</p>
                </div>
                <div className="bg-base-200 p-4 rounded space-y-2">
                  <p className="text-xl sm:text-2xl font-bold flex items-center justify-center">
                    <MdOutlineTextsms />
                  </p>
                  <p className="text-center font-bold">Text</p>
                </div>
                <div className="bg-base-200 p-4 rounded space-y-2">
                  <p className="text-xl sm:text-2xl font-bold flex items-center justify-center">
                    <CiVideoOn />
                  </p>
                  <p className="text-center font-bold">Video</p>
                </div>
                
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
                    <FiPhoneCall />
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
