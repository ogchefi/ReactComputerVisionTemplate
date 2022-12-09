// Import dependencies
import React from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
// import * as tfmodel from "@tensorflow-models/tfmodel";
import Webcam from "react-webcam";

import "./App.css";

function App() {
  return (
    <div className="App">
        <Webcam
          muted={true} 
          style={{
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
    </div>
  );
}

export default App;
