import React, { useState, useEffect } from "react";
import AppRoutes from "./Routes";

function App() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const handleEnlist = (bot) => {
    setYourBotArmy((prevYourBotArmy) => [...prevYourBotArmy, bot]);
  };

  const handleRelease = (bot) => {
    setYourBotArmy(yourBotArmy.filter((b) => b.id !== bot.id));
  };

  const handleDischarge = (bot) => {
    setYourBotArmy(yourBotArmy.filter((b) => b.id !== bot.id));
    // Call API to delete the bot
  };

  return (
    <AppRoutes
      bots={bots}
      handleEnlist={handleEnlist}
      handleRelease={handleRelease}
      handleDischarge={handleDischarge}
      yourBotArmy={yourBotArmy}
    />
  );
}

export default App;
