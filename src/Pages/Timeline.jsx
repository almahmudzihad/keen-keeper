import React, { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HistoryContext } from "../Context/HistoryContextCreate";

function Timeline() {
    const {history} = useContext(HistoryContext);
    
  return (
    <div className="bg-base-200">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header timeline */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-800 leading-tight">
            Timeline
          </h1>
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn m-1">
              Filter timeline <IoIosArrowDown />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Call</a>
              </li>
              <li>
                <a>Text</a>
              </li>
              <li>
                <a>Video</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Timeline body */}
        <div className="my-4">
            {history.length == 0 ? <h1 className="text-2xl font-bold text-cyan-800">No history</h1> :
            history.map((history) => (<div className="bg-white flex gap-4 items-center rounded shadow py-2 mb-3">
                <img src={`${history.action == "Call" ? "/call.png": ""} ${history.action == "Text" ? "/text.png": ""} ${history.action == "Video" ? "/video.png": ""}`} alt={history.action} 
                className="w-6  sm:w-8 m-2"/>
                <div>
                    <div className="flex gap-2 items-center">
                        <h1 className="text-xl font-bold">{history.action}</h1>
                        <p className="text-gray-500">with {history.name}</p>
                    </div>
                    <p className="text-gray-500">{history.time}</p>
                </div>
            </div> ))};
            
            
        </div>
      </div>
    </div>
  );
}

export default Timeline;
