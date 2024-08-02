import React, { useContext } from "react";
import Card from "./Card";
import ThemeContext from "../context/ThemeContext";
const Details = ({ details }) => {
  const detailslist = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };
  const convertMillionToBillion = (number) => {
    return (number / 1000).toFixed(2);
  };
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <Card>
      <ul className="w-full h-full flex flex-col justify-between divide-y-0.5 ">
        {Object.keys(detailslist).map((item) => {
          return (
            <li
              key={item}
              className="flex flex-row justify-between items-center"
            >
              <span>{detailslist[item]}</span>
              <span>{item === "marketCapitalization"
                  ? `${convertMillionToBillion(details[item])}B`
                  : details[item]}</span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
export default Details;
