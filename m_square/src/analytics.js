import Container from "@mui/material/Container";
import Navbar from "./components/navbar";
import "./analytics.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import React from "react";

function Analytics() {
  const appConstants = [
    "CAO, Jinyi",
    "BAE, Hyungjin",
    "CHAN, Pak To ",
    "DUA, Arpit",
    "FANG, Ruoyun",
    "FEI, Zijian",
    "HAN, Liuruo",
    "HON, Ching",
  ];
  const data = [
    {
      name: "Course A",
      average: 80,
      amt: 2400,
    },
    {
      name: "Course B",
      average: 90,
      amt: 2210,
    },
    {
      name: "Course C",
      average: 50,
      amt: 2290,
    },
    {
      name: "Course D",
      average: 40,
      amt: 2000,
    },
  ];
  const listItems = appConstants.map((number) => (
    <li className="list-item">{number}</li>
  ));
  return (
    <Container>
      <Navbar />
      {data ? (
        <div className="general-container">
          <ResponsiveContainer height={300}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="average" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
          <Container className="individual-container">
            <h2>Individual Performance</h2>
            <ul>{listItems}</ul>
          </Container>
        </div>
      ) : (
        "none"
      )}
    </Container>
  );
}

export default Analytics;
