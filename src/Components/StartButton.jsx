import React from "react";
import { Link } from "react-router-dom";
import { Power } from "lucide-react";

let redirectFunction = () => {
  console.log("Redirecting to Home Page");
};

const StartButton = () => {
  return (
    <>
      <div className="PowerButton">
        <Link to="/Home" onClick={redirectFunction}>
          <Power size={50} strokeWidth={1.75} className="PowerButtonIcon" />
        </Link>
      </div>
    </>
  );
};

export default StartButton;
