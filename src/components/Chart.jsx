import React, { useContext, useState } from "react";
import { mockdata, mockprices } from "../constants/data";
import Card from "./Card";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { Tooltip } from "recharts";
import { XAxis } from "recharts";
import { YAxis } from "recharts";
import ChartFilter from "./ChartFilter";
import { Config } from "../constants/config";
import ThemeContext from "../context/ThemeContext";
const Chart = () => {
  const [data, setData] = useState(mockprices[0]["Time Series (Daily)"]);
  const [filter, setFilter] = useState("1W");
  const formatData = () => {
    return Object.keys(data).map((key) => {
      return {
        value: parseFloat(data[key]["4. close"]).toFixed(2),
        date: new Date(key).toLocaleDateString(),
      };
    });
  };
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <Card>
      <ul className="flex absolute top-2 right-2 z-40">
        {Object.keys(Config).map((item) => {
          return (
            <li key={item}>
              <ChartFilter
                text={item}
                active={filter === item}
                onClick={() => {
                  setFilter(item);
                }}
              ></ChartFilter>
            </li>
          );
        })}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={formatData(data)}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={darkMode ? "#334b94" : "rgb(197 208 254)"}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={darkMode ? "#334b94" : "rgb(197 208 254)"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#3b45fc"
            fillOpacity={1}
            strokeWidth={0.7}
            fill="url(#chartColor)"
          ></Area>
          <Tooltip
            contentStyle={darkMode ? { backgroundColor: "#111827" } : null}
            itemStyle={darkMode ? { color: "#818cf8" } : null}
          />
          <XAxis dataKey={"date"} />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};
export default Chart;
