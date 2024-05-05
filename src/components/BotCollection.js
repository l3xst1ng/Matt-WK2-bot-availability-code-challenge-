import React, { useEffect, useState } from "react";

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const botListing = (bot) => {
    // Checking if a bot from the same class is already enlisted
    const isBotClassEnlisted = yourBotArmy.some(
      (enlistedBot) => enlistedBot.bot_class === bot.bot_class
    );

    if (isBotClassEnlisted) {
      // If a bot from the same class is already enlisted, return
      return;
    }

    // Add a bot to users YourBotArmy
    setYourBotArmy([...yourBotArmy, bot]);

    // Remove the selected bot from the BotCollection
    setBots(bots.filter((b) => b.id !== bot.id));
  };

  // Implement the show specs logic here
  const botDetails = (bot) => {
    // Navigate to the BotSpecs page with the bot's id as a parameter
    navigate(`/bots/${bot.id}`);
  };

  return (
    <div>
      {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          botListing={botListing}
          botDetails={botDetails}
        />
      ))}
    </div>
  );
}

export default BotCollection;
