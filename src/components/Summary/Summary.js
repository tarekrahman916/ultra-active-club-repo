import React, { useState } from "react";

const Summary = ({ time }) => {
  const [breakMinutes, setBreakMinutes] = useState(0);
  const breaksTime = [10, 20, 30, 40, 50];

  const handleBreakTime = (e) => {
    //setBreakMinutes(parseInt(e.currentTarget.innerHTML));
    const breakTime = parseInt(e.currentTarget.innerHTML);
    localStorage.setItem("break-time", breakTime);
    const time = localStorage.getItem("break-time");
    if (time) {
      setBreakMinutes(time);
    }
  };

  console.log(breakMinutes);
  return (
    <div>
      <h1 className="text-3xl">This is Summary</h1>
      <h2>{time}</h2>
      <div className="flex">
        {breaksTime.map((breakTime) => (
          <button
            className="bg-slate-700 m-5 p-5 text-white"
            onClick={handleBreakTime}
          >
            {breakTime} mins
          </button>
        ))}
      </div>
      <h2 className="text-2xl font-bold">{breakMinutes}</h2>
    </div>
  );
};

export default Summary;
