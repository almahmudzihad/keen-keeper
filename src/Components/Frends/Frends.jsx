import React, { use, useEffect, useState } from "react";

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
        Your Frends
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
          {frends.map((frend) => (
            <div
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
                    <p className="btn rounded-full bg-blue-200 ">{frend.tags[0]}</p>
                    <p className={frend.status==='on-track'?"btn rounded-full bg-green-200":"btn rounded-full bg-red-200"}>{frend.status}</p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Frends;
