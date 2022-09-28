import React, { useEffect, useState } from "react";
import Exercises from "./Exercise/Exercise";
import "./Home.css";

const Home = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setExercises(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(exercises);

  return (
    <div className="home mx-10">
      <div className="exercise-container">
        {exercises.map((exercise) => (
          <Exercises key={exercise.id} exercise={exercise}></Exercises>
        ))}
      </div>
      <div className="task-container bg-slate-400">
        <h2>Summury</h2>
      </div>
    </div>
  );
};

export default Home;
