import React, { useState } from "react";
import "./App.css";
import FlipTimer from "./components/FlipTimer/FlipTimer";
import ClockFlip from "./components/ClockFlip/ClockFlip";
import FlipCount from "./components/FlipCount/FlipCount";
import FlipCountClock from "./components/FlipCountClock/FlipCountClock";


export default function App() {
  return (
    <div className="App">
     <FlipTimer/>
     <ClockFlip/>
     <FlipCount/>
     <FlipCountClock/>
    </div>
  );
}

