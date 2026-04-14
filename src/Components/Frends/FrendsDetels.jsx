import React, { use, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import { toast } from "react-toastify";

const frendsPromis = fetch("/frends.json").then((res) => res.json());
function FrendsDetels() {
  const { id } = useParams();
  const frends = use(frendsPromis);
  const frend = frends.find((frends) => frends.id == id);
  const handelClickCall = () => {
    toast.info(`Calling ${frend.name}`, {
      position: "top-center",
    });
  };
  const handelClickText = () => {
    toast.success(`Send text to ${frend.name}`, {
      position: "top-center",
    });
  };
  const handelClickVideo = () => {
    toast.error(`Video Call to ${frend.name}`, {
      position: "top-center",
    });
  };

  return (
    <div className="bg-base-200">
      <div className=" container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          {/* Left Column */}
          <div className="flex flex-col space-y-6">
            {/* Profile */}
            <div className="flex flex-col items-center space-y-4 bg-white shadow-md rounded-md py-6 px-4">
              <img
                src={frend.picture}
                alt={frend.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border"
              />

              <div className="text-center space-y-2">
                <h2 className="text-lg sm:text-xl font-semibold">
                  {frend.name}
                </h2>

                <p>
                  <button
                    className={`btn rounded-full ${frend.status === "on-track" ? "bg-green-200" : ""} ${frend.status === "overdue" ? "bg-red-200" : ""} ${frend.status === "almost due" ? "bg-red-50" : ""}`}
                  >
                    {frend.status}
                  </button>
                </p>

                <p>
                  {frend.tags.map((tag, index) => (
                    <button
                      key={index}
                      className="btn bg-green-100 rounded-full text-sm mr-1"
                    >
                      {tag}
                    </button>
                  ))}
                </p>

                <p className="text-sm sm:text-md text-gray-500">
                  "{frend.bio}"
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Email: {frend.email}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="text-center space-y-3 px-2">
              <p className="py-2 bg-white rounded-md  flex items-center justify-center gap-2">
                <RiNotificationSnoozeLine /> Snooze 2 Weeks
              </p>
              <p className="py-2 bg-white text-gray-700 rounded  flex items-center justify-center gap-2">
                <FiArchive />
                Archive
              </p>
              <p className="py-2 bg-white text-red-700 rounded flex items-center justify-center gap-2">
                <RiDeleteBin6Line />
                Delete
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-6 md:col-span-2">
            {/* Stats */}
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded">
                <p className="text-xl sm:text-2xl font-bold">
                  {frend.days_since_contact}
                </p>
                <p className="text-sm text-gray-500">Days Since Contact</p>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="text-xl sm:text-2xl font-bold">{frend.goal}</p>
                <p className="text-sm text-gray-500">Goal (Days)</p>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="text-base sm:text-lg font-bold">
                  {frend.next_due_date}
                </p>
                <p className="text-sm text-gray-500">Next Due</p>
              </div>
            </div>

            {/* Relationship Goal */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-4 rounded gap-2">
              <div>
                <h3 className="text-base sm:text-lg font-semibold">
                  Relationship Goal
                </h3>
                <p className="text-sm text-gray-600">
                  Connect every {frend.goal} days
                </p>
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
                <div
                  className="bg-base-200 hover:bg-green-200 p-4 rounded space-y-2"
                  onClick={handelClickCall}
                >
                  <p className="text-xl sm:text-2xl font-bold flex items-center justify-center">
                    <FiPhoneCall />
                  </p>
                  <p className="text-center font-bold">Call</p>
                </div>
                <div
                  className="bg-base-200 hover:bg-green-200 p-4 rounded space-y-2"
                  onClick={handelClickText}
                >
                  <p className="text-xl sm:text-2xl font-bold flex items-center justify-center">
                    <MdOutlineTextsms />
                  </p>
                  <p className="text-center font-bold">Text</p>
                </div>
                <div
                  className="bg-base-200 hover:bg-green-200 p-4 rounded space-y-2"
                  onClick={handelClickVideo}
                >
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

                <button className=" btn">
                  <FaHistory />
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
