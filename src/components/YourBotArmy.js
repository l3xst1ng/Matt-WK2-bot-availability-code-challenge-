import React from "react";
import "./YourBotArmy.css";

function YourBotArmy({ yourBotArmy, handleRelease, handleDischarge }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-army-container">
        {yourBotArmy.map((bot) => (
          <div key={bot.id} className="bot-army-card">
            <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
            <h3 className="bot-name">{bot.name}</h3>
            <p className="bot-class">Class: {bot.bot_class}</p>
            <button onClick={() => handleRelease(bot)}>Release</button>
            <button
              onClick={() => handleDischarge(bot)}
              className="discharge-button"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
