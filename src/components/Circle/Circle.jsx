import React from "react";
import "./Circle.css";

function Circle({ onDrop }) {
  const handleDrop = (event) => {
    event.preventDefault();
    onDrop(event);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="circle"
      draggable
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      Drag me
    </div>
  );
}

export default Circle;
