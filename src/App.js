import React, { useEffect } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import Circle from "./components/Circle/CircleObject";
import ActivityMap from "./pages/Map/Map";

function App() {
  /*useEffect(() => {
    const runObjectDetection = async () => {
      const model = await cocoSsd.load();
      const videoElement = document.getElementById("videoElement");

      const detectObjects = async () => {
        const predictions = await model.detect(videoElement);
        predictions.forEach((prediction) => {
          console.log("Detected object:", prediction);
          // Perform actions based on detected objects here
        });
      };

      detectObjects();
    };

    runObjectDetection();
  }, []);

  const handleDrop = (event) => {
    console.log("Real-life object placed on table");
    // Perform additional actions upon dropping the real-life object
  };*/

  return (
    <div>
      <ActivityMap></ActivityMap>
      {/*<video
        id="videoElement"
        width="600"
        height="400"
        style={{ display: "none" }}
      />

      <Circle onDrop={handleDrop} />*/}
    </div>
  );
}

export default App;
