import React, { useState } from "react";
// import ReactDOM from 'react-dom/client';
import "../pages/classes.css";
import { Container, Row } from "react-bootstrap";
import Navbar from "../components/navbar";
import { FaRegCheckSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Classes() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/boardsForTeaching`;
    navigate(path);
  };
  return (
    <div>
      <Navbar />
      <Container>
        <Container className="container">
          <div className="classes-containers">
            <a onClick={routeChange}>
              <h3>Class 1</h3>
            </a>
            <FaRegCheckSquare
              onClick={() => {
                console.log("navigating");
                navigate("/analytics");
              }}
            />
          </div>
          <a>
            <div className="classes-containers">
              <h3>Class 2</h3>
              <FaRegCheckSquare />
            </div>
          </a>
          <a>
            <div className="classes-containers">
              <h3>Class 3</h3>
              <FaRegCheckSquare />
            </div>
          </a>
        </Container>
      </Container>
    </div>
  );
}

export default Classes;
