import React, { FunctionComponent, useContext } from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import { UseContext } from "../@context";

const Chart: FunctionComponent = () => {
  const user = useContext(UseContext);
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-slate-50 w-full p-2 outline-none rounded-lg border border-solid border-orange-400">
          <p className="label">{label}</p>
          <p className="intro">{payload[0].payload.title}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <AreaChart
      width={730}
      height={250}
      data={user}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop startOffset={"50%"} stopColor="#8884d8" />
          <stop offset="50%" stopColor="#82ca9d" />
        </linearGradient>
      </defs>
      <XAxis dataKey="year" />
      <YAxis dataKey="rank" />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip
        content={
          <CustomTooltip
            active={undefined}
            payload={undefined}
            label={undefined}
          />
        }
      />
      <Area
        type="monotone"
        dataKey="rank"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
};

export default Chart;
