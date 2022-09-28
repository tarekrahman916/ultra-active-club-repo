import React from "react";
import "./Exercise.css";

const Exercises = ({ exercise }) => {
  const { name, img, minutes, age, description } = exercise;
  return (
    <div>
      <h1 className="text-lg">Exercises</h1>
    </div>
  );
};

export default Exercises;
