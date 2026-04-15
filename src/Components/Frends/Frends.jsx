import React, { use, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router";

function Frends() {
  const [frends, setFrends] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchFrends = async () => {
      const response = await fetch("/frends.json");
      const data = await response.json();
      setFrends(data);
      setLoading(false);
    };
    fetchFrends();
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl  font-semibold text-cyan-800 leading-tight p-4">
        Your Friends
      </h1>
      {loading ? (
        <div className='flex justify-center items-center h-[50vh]'><RotatingLines /></div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
          {frends.map((frend) => (
            <Link
              to={`frendsdetels/${frend.id}`}
              key={frend.id}
              className="bg-white shadow-md rounded-xl "
            >
              <div className="card bg-base-100  shadow-sm">
                <figure className="px-10 pt-10">
                  <img
                    src={frend.picture}
                    alt={frend.name}
                    className="rounded-full w-24 h-24 object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="text-lg font-bold">{frend.name}</h2>
                  <p>{frend.days_since_contact}d ago</p>
                  <p className="btn rounded-full bg-blue-200 ">
                    {frend.tags[0]}
                  </p>
                  <p
                    className={`btn rounded-full ${frend.status === "on-track" ? "bg-green-200" : ""} ${frend.status === "overdue" ? "bg-red-200" : ""} ${frend.status === "almost due" ? "bg-red-50" : ""}`}
                  >
                    {frend.status}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Frends;
