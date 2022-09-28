import React from "react";

const Exercise = ({ exercise, setTime }) => {
  const { name, img, minutes, age, description } = exercise;

  const handleAddToList = (e) => {};
  return (
    <div className="mt-5">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-full " src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>For Age: {age}</p>
          <p>Time required: {minutes} min :</p>
        </div>
        <button onClick={handleAddToList} className="btn">
          Add To List
        </button>
      </div>
    </div>
  );
};

export default Exercise;
