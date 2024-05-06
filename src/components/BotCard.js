import React from "react";
import "./components/BotCard.css";

function BotsCards({ bot, handleEnlist, handleShowSpecs }) {
  return (
    <div className="bot-card">
      <div className="bot-image-container"></div>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>

      <div className="bot-info">
        <h3 className="bot-name">{bot.name}</h3>
        <p className="bot-catchphrase">{bot.catchphrase}</p>
        <div className="bot-stats">
          <p>
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            {bot.health}
          </p>
          <p>
            <span role="img" aria-label="sword">
              ⚔️
            </span>{" "}
            {bot.damage}
          </p>
          <p>
            <span role="img" aria-label="shield">
              🛡️
            </span>{" "}
            {bot.armor}
          </p>
        </div>

        <div className="bot-actions">
          <button onClick={() => handleEnlist(bot)}>Enlist</button>
          <button onClick={() => handleShowSpecs(bot)}>Show Specs</button>
        </div>
      </div>
    </div>
  );
}

export default BotsCards;
