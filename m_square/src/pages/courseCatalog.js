import React, { useState } from "react";
// import ReactDOM from 'react-dom/client';
import "../pages/courseCatalog.css";
import { Container, Row } from "react-bootstrap";
import Navbar from "../components/navbar";
import { FaRegCheckSquare } from "react-icons/fa";

function CourseCatalogs() {
  const [currentIslandIndex, setCurrentIslandIndex] = useState(3);

  const setIslandMoveRight = () => {
    currentIslandIndex += 1;
  };
  return (
    <div>
      <Navbar />
      <Container>
        <Container className="class-container">
          <a>
            <div className="Units">
              <h3>FQ Explorer - Unit 1: Spending Decision</h3>
              <FaRegCheckSquare />
            </div>
          </a>
          <a>
            <div className="Units">
              <h3>FQ Explorer - Unit 2: Importance of Saving</h3>
              <FaRegCheckSquare />
            </div>
          </a>
          <a>
            <div className="Units">
              <h3>FQ Explorer - Unit 9: Investing</h3>
              <FaRegCheckSquare />
            </div>
          </a>
          <a>
            <div className="Units">
              <h3>Money Fundamental - Lesson 1: Needs and Wants</h3>
              <FaRegCheckSquare />
            </div>
          </a>
        </Container>
      </Container>
    </div>
  );
}

export default CourseCatalogs;
