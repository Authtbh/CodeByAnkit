import React from "react";
import { Link } from "react-router-dom";
import { Power } from "lucide-react";
import "../index.css";
import img from "../assets/book-a.png";

let redirectFunction = () => {
  console.log("Redirecting to Home Page");
};

const StartButton = () => {
  return (
    <>
      <a className="homebutton" href="/home"><img src={img} alt="img"></img></a>
    </>
  );
};

export default StartButton;
