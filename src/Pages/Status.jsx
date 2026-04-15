import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { HistoryContext } from "../Context/HistoryContextCreate";

// #region Sample data

function Status() {
  const { history } = useContext(HistoryContext);
  const callCount = history.filter((item) => item.action === "Call").length;
  const textCount = history.filter((item) => item.action === "Text").length;
  const videoCount = history.filter((item) => item.action === "Video").length;

  const data = [
    { name: "Call", value: callCount, fill: "#0088FE" },
    { name: "Text", value: textCount, fill: "#00C49F" },
    { name: "Video", value: videoCount, fill: "#FFBB28" },
  ];
  return (
    <div className="bg-base-200">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-800 leading-tight">
            Friendship Analytics
          </h1>
          <div className="bg-white mt-5 py-4 shadow rounded-md">
            <p className="text-xl font-semibold text-cyan-700 p-4">By Interaction Type</p>
            <div className="flex text-center justify-center">
    <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          paddingBottom: "20px",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        
        <Tooltip />
        <Legend />
      </PieChart>
            </div>
             
          </div>
     
      </div>
    </div>
  );
}

export default Status;
