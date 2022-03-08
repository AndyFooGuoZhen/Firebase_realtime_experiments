import CreateUser from "./components/CreateUser";
import { Routes, Route } from "react-router-dom";
import Waiting from "./components/Waiting";
import { useState } from "react";
import Game from "./components/Game";

function App() {
  const [playerNo, setPlayerNo] = useState(0);
  const [gameState, setGameState] = useState(0);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <CreateUser setPlayerNo={setPlayerNo} setGameState={setGameState} />
          }
        />
        <Route path="/Waiting" element={<Waiting />} />
        <Route path="/Game" element={<Game playerNo={playerNo} />} />
      </Routes>
    </>
  );
}

export default App;
