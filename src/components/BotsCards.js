import React from "react";
import "./components/BotsCards.css";

function BotsCards({ bot, botListing, botDetails }) {
  return (
    <div>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <button onClick={() => botListing(bot)}>Enlist</button>
      <button onClick={() => botDetails(bot)}>Show Specs</button>
    </div>
  );
}

export default BotsCards;
