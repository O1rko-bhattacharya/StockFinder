import React, { useContext, useState } from "react";
import { mockdata } from "../constants/data";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import SearchResults from "./SearchResults";
import ThemeContext from "../context/ThemeContext";
import { searchSymbol } from "../api/stock-api";
const Search = () => {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);
  // console.log(mockdata["Meta Data"]);
  const clear = () => {
    setInput("");
    setBestMatches([]);
  };
  const updateBestMatches = async () => {
    try{
      if(input){
        const searchResults=await searchSymbol(input);
        const result=searchResults.result;
        setBestMatches(result);
      }

    }catch(error){
      setBestMatches([]);
      console.log(error);
    }
  };
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`flex items-center my-4 border-2 rounded-md relative z-50 w-96 ${
        darkMode
          ? "bg-gray-300 border-gray-200"
          : "bg-gray-100 border-neutral-200"
      }`}
    >
      <input
        type="text"
        value={input}
        className={`w-full px-4 py-2 focus:outline-none rounded-md ${
          darkMode
            ? "bg-gray-300 border-gray-200 text-black"
            : "bg-gray-100 border-neutral-200 text-black"
        }`}
        placeholder="Search stock"
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            updateBestMatches();
          }
        }}
      ></input>
      {input && (
        <button onClick={clear} className="m-1">
          <XIcon className="h-4 w-4 fill-gray-500"></XIcon>
        </button>
      )}
      <button
        onClick={updateBestMatches}
        className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2"
      >
        <SearchIcon className="h-4 w-4 fill-white"></SearchIcon>
      </button>
      {input && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches} />
      ) : null}
    </div>
  );
};
export default Search;
