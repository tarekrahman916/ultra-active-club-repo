import React from "react";
import "./Exercises.css";
import Exercise from "../Exercise/Exercise";

const Exercises = ({ exercises, time, setTime }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">Exercise Hub</h1>
      <h2 className="text-2xl">Select today’s exercise</h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-1  gap-8">
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
