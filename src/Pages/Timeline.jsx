import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function Timeline() {
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
            <div className="bg-white flex gap-4 items-center rounded shadow py-2 mb-3">
                <img src="" alt="" 
                className="w-8 h-6 bg-red-400 m-2"/>
                <div>
                    <div className="flex gap-2 items-center">
                        <h1 className="text-xl">Mitup</h1>
                        <p>with Tom Barger</p>
                    </div>
                    <p>Time 25 mar 26</p>
                </div>
            </div>
            <div className="bg-white flex gap-4 items-center rounded shadow py-2 mb-3">
                <img src="" alt="" 
                className="w-8 h-6 bg-red-400 m-2"/>
                <div>
                    <div className="flex gap-2 items-center">
                        <h1 className="text-xl">Mitup</h1>
                        <p>with Tom Barger</p>
                    </div>
                    <p>Time 25 mar 26</p>
                </div>
            </div>
            <div className="bg-white flex gap-4 items-center rounded shadow py-2 mb-3">
                <img src="" alt="" 
                className="w-8 h-6 bg-red-400 m-2"/>
                <div>
                    <div className="flex gap-2 items-center">
                        <h1 className="text-xl">Mitup</h1>
                        <p>with Tom Barger</p>
                    </div>
                    <p>Time 25 mar 26</p>
                </div>
            </div>
            <div className="bg-white flex gap-4 items-center rounded shadow py-2 mb-3">
                <img src="" alt="" 
                className="w-8 h-6 bg-red-400 m-2"/>
                <div>
                    <div className="flex gap-2 items-center">
                        <h1 className="text-xl">Mitup</h1>
                        <p>with Tom Barger</p>
                    </div>
                    <p>Time 25 mar 26</p>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default Timeline;
