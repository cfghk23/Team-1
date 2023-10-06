import React from "react";
// import ReactDOM from 'react-dom/client';
import "./course.css";
import App from "./App";
import logo from "./logo.svg";
import { Container, Col } from "react-bootstrap";
import Navbar from "./components/navbar";
import Box from "@mui/material/Box";

function Course() {
  return (
    <div>
      <Navbar />
      <Box></Box>
      <Container className="bar"></Container>
    </div>
  );
}

export default Course;
