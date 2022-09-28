import React, { useEffect, useState } from "react";
import Exercises from "../Exercises/Exercises";
import Summary from "../Summary/Summary";
import "./Home.css";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  console.log(exercises);

  return (
    <div className="home lg:mx-16">
      <div className="exercises-container mt-10">
        <Exercises exercises={exercises} setTime={setTime}></Exercises>
      </div>
      <div className="summary-container">
        <Summary></Summary>
      </div>
    </div>
  );
};

export default Home;
