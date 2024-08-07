import React from "react";

const ChartFilter=({text,active,onClick})=>{
    return(
        <button
        onClick={onClick}
        className={`w-12 m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer ${active===true ? "bg-indigo-700 text-gray-100":"bg-indigo-300 text-indigo-300"} `}
        >
        {text}
        </button>
    );
};
export default ChartFilter;