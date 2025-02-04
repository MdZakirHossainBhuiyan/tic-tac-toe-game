import { useState } from "react";
import Game from "./Components/Game";
import Home from "./Components/Home";

function App() {
  const [isStartGame, setIsStartGame] = useState(false);

  const handleStartGame = () => setIsStartGame(true);
  const handleCloseGame = () => setIsStartGame(false);

  return (
    <div className="bg-[#203A43] w-full h-[100vh] flex items-start justify-center p-[72px]">
      {isStartGame ? (
        <Game handleCloseGame={handleCloseGame} />
      ) : (
        <Home handleStartGame={handleStartGame} />
      )}
    </div>
  );
}

export default App;
