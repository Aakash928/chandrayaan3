import React, { useState } from "react";
import "./App.css";
import Chandrayaan3 from "./spaceCraft/chandrayaan3";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  const [direction, setDirection] = useState("N");
  const [commands, setCommands] = useState("");

  const executeCommands = () => {
    const chandrayaan = new Chandrayaan3();
    chandrayaan.executeCommands(commands);

    setPosition({ ...chandrayaan.position });
    setDirection(chandrayaan.direction);
  };

  return (
    <div className="App">
      <p>
        Enter commands (e.g., 'f', 'r', 'u', 'b', 'l'):
        <input
          type="text"
          value={commands}
          onChange={(e) => setCommands(e.target.value)}
        />
        <button onClick={executeCommands}>Execute</button>
      </p>
      <p>
        Final Position: ({position.x}, {position.y}, {position.z})
      </p>
      <p>Final Direction: {direction}</p>
    </div>
  );
}

export default App;
