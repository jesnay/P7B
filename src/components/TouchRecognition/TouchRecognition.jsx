import React, { useState, useEffect, useRef } from "react";

const TouchRecognition = () => {
  const [touchPoints, setTouchPoints] = useState([]);
  const touchAreaRef = useRef(null);

  useEffect(() => {
    const handleTouchStart = (event) => {
      updateTouchPoints(event.touches);
    };

    const handleTouchMove = (event) => {
      updateTouchPoints(event.touches);
    };

    const handleTouchEnd = () => {
      setTouchPoints([]);
    };

    const updateTouchPoints = (touches) => {
      const points = Array.from(touches).map((touch) => ({
        x: touch.clientX,
        y: touch.clientY,
      }));
      setTouchPoints(points);
      if (isCircularObjectDetected(points)) {
        console.log("Circular object detected at:", getTouchCenter(points));
      }
    };

    const touchArea = touchAreaRef.current;
    touchArea.addEventListener("touchstart", handleTouchStart, false);
    touchArea.addEventListener("touchmove", handleTouchMove, false);
    touchArea.addEventListener("touchend", handleTouchEnd, false);

    return () => {
      touchArea.removeEventListener("touchstart", handleTouchStart);
      touchArea.removeEventListener("touchmove", handleTouchMove);
      touchArea.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const isCircularObjectDetected = (points) => {
    if (points.length < 3) return false;

    const center = getTouchCenter(points);
    const radius = 173; // Approx. 4 cm in pixels for 220 PPI

    for (let i = 0; i < points.length; i++) {
      const distance = Math.sqrt(
        Math.pow(points[i].x - center.x, 2) +
          Math.pow(points[i].y - center.y, 2)
      );
      if (Math.abs(distance - radius) > 10) {
        // Allow some tolerance
        return false;
      }
    }

    return true;
  };

  const getTouchCenter = (points) => {
    let sumX = 0,
      sumY = 0;

    for (let i = 0; i < points.length; i++) {
      sumX += points[i].x;
      sumY += points[i].y;
    }

    return {
      x: sumX / points.length,
      y: sumY / points.length,
    };
  };

  return (
    <div
      ref={touchAreaRef}
      style={{ width: "100%", height: "100vh", backgroundColor: "lightgrey" }}
    >
      {/* Add any additional content or styling here */}
    </div>
  );
};

export default TouchRecognition;
