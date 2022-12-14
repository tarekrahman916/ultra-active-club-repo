import React, { useEffect, useState } from "react";
import "./Summary.css";
import profile from "../../images/profile.png";
import Swal from "sweetalert2";

const Summary = ({ time }) => {
  const breakTimes = [10, 20, 30, 40, 50];
  const [bTime, setBTime] = useState(0);

  const handleBreakTime = (e) => {
    const times = e.currentTarget.innerText;
    localStorage.setItem("break-time", parseInt(times));
    const storageBreaks = localStorage.getItem("break-time");
    setBTime(parseInt(storageBreaks));
  };

  useEffect(() => {
    const storageBreaks = localStorage.getItem("break-time");
    if (storageBreaks) {
      setBTime(parseInt(storageBreaks));
    } else {
      setBTime(0);
    }
  }, []);

  const handleSuccessMsg = () => {
    Swal.fire("Congratulations!", "Activity Completed Successfully", "success");
  };

  return (
    <div className="summary border bg-white h-full pt-5">
      <div className="info">
        <div className=" flex justify-center align-middle px-10">
          <img className="profile-img" src={profile} alt="" />
          <div className=" ml-5">
            <h3 className="text-2xl">Md Tarek Rahman</h3>
            <h5 className="text-xl">Web Developer</h5>
          </div>
        </div>
        <div className="personal-info flex gap-8 justify-center mt-5 bg-gray-100 px-10">
          <div>
            <h2>
              <span className="text-xl font-bold">68</span> kg
            </h2>
            <p className="text-lg font-bold">Weight</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">6.5</h2>
            <p className="text-lg font-bold">Height</p>
          </div>
          <div>
            <h2>
              <span className="text-xl font-bold">29</span> yrs
            </h2>
            <p className="text-lg font-bold">Age</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-700 px-10 py-5">
            Add a break
          </h3>
          <div className=" flex gap-2 justify-center lg:mt-5 mt-2 bg-gray-100 px-0 lg:px-10">
            {breakTimes.map((breakTime) => (
              <button
                key={breakTime}
                onClick={handleBreakTime}
                className="break-btn btn"
              >
                {breakTime}m
              </button>
            ))}
          </div>
        </div>
        <div className="mt-7 px-10">
          <h3 className="text-2xl font-semibold text-gray-700 ">
            Exercise Details
          </h3>
          <div className="flex justify-around mt-3  bg-gray-200 py-2 rounded ">
            <h2 className="text-lg font-semibold ">Exercise time:</h2>
            <h2>{time} minutes</h2>
          </div>
        </div>
        <div className="mt-7 px-10">
          <div className="flex justify-around mt-5  bg-gray-200 py-2 rounded ">
            <h2 className="text-lg font-semibold">Break time:</h2>
            <h2>{bTime} minutes</h2>
          </div>
        </div>
        <button
          onClick={handleSuccessMsg}
          className="btn btn-success w-full mt-5 mb-10"
        >
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default Summary;
