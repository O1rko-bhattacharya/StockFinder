/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";

const SearchResults = ({ results }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const{stockSymbol,setStockSymbol}=useContext(StockContext);
  return (
    <ul
      className={`absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll ${
        darkMode
          ? "bg-grey-900 border-grey-800 custom-scrollbar custom-scrollbar-dark"
          : "bg-white border-neutral-200 custom-scrollbar"
      }`}
    >
      {results.map((item) => {
        return (
          <li
            key={item.symbol}
            className={`cursor-pointer m-2 p-4 flex items-center justify-between rounded-md ${
              darkMode ? "hover:bg-indigo-700" : "hover:bg-indigo-200"
            }transition duration-300`}
            onClick={()=>{
              setStockSymbol(item.symbol);
            }}
          >
            <span className="m-2">{item.symbol}</span>
            <span className="m-2">{item.description}</span>
           
          </li>
        );
      })}
    </ul>
  );
};
export default SearchResults;
