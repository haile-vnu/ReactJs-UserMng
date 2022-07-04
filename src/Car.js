import React, { useState } from "react";
function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    color: "red",
    year: 1964,
  });

  const changeColor = (color) => {
    //setCar({ color: "blue" });
    setCar((previousState) => {
      return { ...previousState, color: color };
    });
  };

  return (
    <div style={{ color: car.color }}>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model}
        from {car.year}.
      </p>
      <p>
        <button type="button" className="btn" onClick={()=>changeColor("blue")}>
          Blue
        </button>
        <button type="button" className="btn" onClick={()=>changeColor("yellow")}>
          Yellow
        </button>
        <button type="button" className="btn" onClick={()=>changeColor("pink")}>
          Pink
        </button>
      </p>
    </div>
  );
}
export default Car;
