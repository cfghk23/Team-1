import React, { useState } from "react";
// import ReactDOM from 'react-dom/client';
import "./course.css";
import App from "./App";
import logo from "./logo.svg";
import { Container, Col } from "react-bootstrap";
import Navbar from "./components/navbar";
import Box from "@mui/material/Box";
import island1 from "./images/island_1.svg";
import island2 from "./images/island_2.svg";
import island3 from "./images/island_3.svg";
import island4 from "./images/island_4.svg";
import island5 from "./images/island_5.svg";

function Course() {
  const [currentIslandIndex, setCurrentIslandIndex] = useState(3);

  const setIslandMoveRight = () => {
    currentIslandIndex += 1;
  };
  return (
    <div>
      <Navbar />
      <Box></Box>
      <Container className="bar">
        <h1>Money Fundamentals</h1>
      </Container>
      <Container className="main-context">
        <h3>Lesson 3: The Importance of Saving</h3>
      </Container>
      <Container className="island-container">
        <a>
          <img src={island5}></img>
        </a>
        <a>
          <img src={island4}></img>
        </a>

        <a>
          <img src={island3}></img>
        </a>
        <a>
          <img src={island2}></img>
        </a>
        <a>
          <img src={island1}></img>
        </a>
      </Container>
    </div>
  );
}

export default Course;
