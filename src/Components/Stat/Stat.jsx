import React from "react";

function Stat() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">

  {/* Card 1 */}
  <div className="bg-white shadow-md rounded-xl flex items-center justify-center h-24 sm:h-28">
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-cyan-700">8</h2>
      <p className="text-sm text-gray-500">Total Friend</p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white shadow-md rounded-xl flex items-center justify-center h-24 sm:h-28">
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-cyan-700">3</h2>
      <p className="text-sm text-gray-500">On Trakc</p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-white shadow-md rounded-xl flex items-center justify-center h-24 sm:h-28">
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-cyan-700">5</h2>
      <p className="text-sm text-gray-500">Need Attention</p>
    </div>
  </div>

  {/* Card 4 */}
  <div className="bg-white shadow-md rounded-xl flex items-center justify-center h-24 sm:h-28">
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-cyan-700">3</h2>
      <p className="text-sm text-gray-500">Interactions This Month</p>
    </div>
  </div>

</div>
    </div>
  );
}

export default Stat;
