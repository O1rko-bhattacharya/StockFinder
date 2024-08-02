import React from "react";
import Search from "./Search";
import ThemeIcon from "./ThemeIcon";
const Header=({name})=>{
    return(
    <>
    <div>
        <h1 className="text-5xl">{name}</h1>
        <div className="flex flex-row items-center">
        <Search />
        <ThemeIcon />
        </div>
    </div>
    
    </>
    );
};
export default Header;