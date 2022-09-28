import React from "react";
import Exercise from "../Exercise/Exercise";

const Exercises = ({ exercises, setTime }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">Exercises Hub</h1>
      <h2 className="text-2xl">Select today’s exercise</h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {exercises.map((exercise) => (
          <Exercise
            key={exercise.id}
            exercise={exercise}
            setTime={setTime}
          ></Exercise>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
