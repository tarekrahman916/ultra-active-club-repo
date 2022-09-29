import React from "react";
import "./Exercises.css";
import Exercise from "../Exercise/Exercise";
import logo from "../../images/logo.png";

const Exercises = ({ exercises, time, setTime }) => {
  return (
    <div className="lg:p-5 p-10 ">
      <div className="flex align-middle mb-10 ">
        <img className="logo" src={logo} alt="" />
        <h1 className="text-4xl font-bold mt-10">FITNESS FINEST</h1>
      </div>
      <h2 className="text-2xl">Select today’s exercise</h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-1  gap-3 ">
        {exercises.map((exercise) => (
          <Exercise
            key={exercise.id}
            time={time}
            exercise={exercise}
            setTime={setTime}
          ></Exercise>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
