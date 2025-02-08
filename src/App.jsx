import { useState } from "react";
import Game from "./Components/Game";
import GameSettingsCard from "./Components/GameSettingsCard";
import Home from "./Components/Home";

function App() {
  const [isStartGame, setIsStartGame] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");
  const [tossWinner, setTossWinner] = useState("");

  const handleStartGame = () => setIsStartGame(true);
  const handleCloseGame = () => setIsStartGame(false);

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  const handleToss = () => {
    const randomValue = Math.floor(Math.random() * 9);

    if (randomValue % 2 === 0) {
      setTossWinner(player1);
    } else {
      setTossWinner(player2);
    }
  };

  return (
    <div className="bg-[#203A43] w-full h-[100vh] flex items-start justify-center p-[72px] relative">
      {isStartGame ? (
        <Game handleCloseGame={handleCloseGame} />
      ) : (
        <Home handleOpenModal={handleOpenModal} />
      )}

      {isOpenModal && (
        <GameSettingsCard
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
          player1={player1}
          player2={player2}
          tossWinner={tossWinner}
          handleToss={handleToss}
          handleStartGame={handleStartGame}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
