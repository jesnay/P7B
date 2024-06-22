import React, { useEffect } from "react";
import Triangulator from "tritra";
console.log(Triangulator);

const TriangleDetection = () => {
  useEffect(() => {
    // Define the vertex angles you're looking for (in degrees)
    const vertexAngles = [18, 36, 54];

    //const triangulator = new Triangulator(vertexAngles);
  }, []);

  return <div>test</div>;
};

export default TriangleDetection;

/*useEffect(() => {
    // Define the vertex angles you're looking for (in degrees)
    const vertexAngles = [18, 36, 54];

    // Create a new instance of Triangulator with the vertex angles
    const triangulator = new Triangulator(vertexAngles);

    // Define example points (replace with your actual points)
    const examplePoints = [
      new triangulator.Vector2d(300, 300),
      new triangulator.Vector2d(366, 300),
      new triangulator.Vector2d(333, 198),
    ];

    // Find matches (triangles) in the example points
    const matches = triangulator.findMatches(examplePoints);

    // Log or process the detected triangles
    console.log("Detected triangles:", matches);

    // Clean up (optional)
    return () => {
      // Perform any cleanup if needed
    };
  }, []);*/
