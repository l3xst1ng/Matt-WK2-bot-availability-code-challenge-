import React from "react";
import { Link } from "react-router-dom";
import "./BotCard.css";

function BotCard({ bot, botEnlisting, showBotSpecs }) {
  return (
    <div className="container">
      <div className="bot-card">
        <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
        <h3 className="bot-name">{bot.name}</h3>
        <p className="bot-class">Class: {bot.bot_class}</p>
        <button onClick={() => botEnlisting(bot)}>Enlist</button>
        <Link className="link" to={`/bots/${bot.id}`}>
          Show Specs
        </Link>
        {/* <button onClick={() => handleShowSpecs(bot)}>Show Specs</button> */}
        {/* <button className="button-2" onClick={() => handleShowSpecs(bot)}>
        Show Specs
      </button> */}
      </div>
    </div>
  );
}

export default BotCard;
