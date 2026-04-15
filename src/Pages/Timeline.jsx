import React, { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HistoryContext } from "../Context/HistoryContextCreate";

function Timeline() {
    const {history} = useContext(HistoryContext);
    const [filter, setFilter] = useState("all");

    const filteredHistory = history.filter((item) => {
        if (filter === "all") {
          return true;
        } else {
          return item.action === filter;
        }
      });   
    
  return (
    <div className="bg-base-200">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header timeline */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-800 leading-tight py-2">
            Timeline
          </h1>
          
          <select defaultValue="" className="select">
            <option onClick={() => setFilter("all")} >Filter timeline (All)</option>
            <option  onClick={() => setFilter("Call")}>Call</option>
            <option onClick={() => setFilter("Text")}>Text</option>
            <option onClick={() => setFilter("Video")}>Video</option>
          </select>
        </div>
        {/* Timeline body */}
        <div className="my-4">
            {history.length == 0 ? <h1 className="text-2xl font-bold text-cyan-800">No history</h1> :
            filteredHistory.map((history) => (<div className="bg-white flex gap-4 items-center rounded shadow py-2 mb-3">
                <img src={`${history.action == "Call" ? "/call.png": ""} ${history.action == "Text" ? "/text.png": ""} ${history.action == "Video" ? "/video.png": ""}`} alt={history.action} 
                className="w-6  sm:w-8 m-2"/>
                <div>
                    <div className="flex gap-2 items-center">
                        <h1 className="text-xl font-bold">{history.action}</h1>
                        <p className="text-gray-500">with {history.name}</p>
                    </div>
                    <p className="text-gray-500">{history.time}</p>
                </div>
            </div> ))}
            
            
        </div>
      </div>
    </div>
  );
}

export default Timeline;
