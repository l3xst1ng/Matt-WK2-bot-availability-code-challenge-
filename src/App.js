import React, { useState, useEffect } from "react";
import AppRoutes from "./components/Routes";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const botEnlisting = (bot) => {
    setYourBotArmy((prevYourBotArmy) => [...prevYourBotArmy, bot]);
  };

  const handleRelease = (bot) => {
    setYourBotArmy(yourBotArmy.filter((b) => b.id !== bot.id));
  };

  const handleDischarge = (bot) => {
    setYourBotArmy(yourBotArmy.filter((b) => b.id !== bot.id));
  };
  //   // Calling API to delete the bot

  //   //   fetch(`http://localhost:3000/bots/${bot.id}`, {
  //   //     method: "DELETE",
  //   //     headers: {},
  //   //     "Content-Type": "application/json",
  //   //   });
  //   // };

  return (
    <div>
      <h1 className="header">Welcome to Bot Army</h1>
      <p className="header-text-1">
        This is the one and only spot in the known universe where you can custom
        build your own Bot Army!
      </p>
      <p className="header-text-2">
        Here, you can browse through a list of robots, view a robot's details,
        and, enlist a bot to your army and release or discharge a bot from your
        army. Enjoy!
      </p>
      <AppRoutes
        bots={bots}
        botEnlisting={botEnlisting}
        handleRelease={handleRelease}
        handleDischarge={handleDischarge}
        yourBotArmy={yourBotArmy}
      />
    </div>
  );
}

export default App;
