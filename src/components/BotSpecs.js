import React from "react";
import { useParams, Link } from "react-router-dom";
import "./BotSpecs.css";

function BotSpecs({ bots, handleBack, botEnlisting }) {
  const { botId } = useParams();
  // const bot = bots.find((bot) => bot.id === parseInt(botId));
  const bot = bots.find((bot) => bot.id.toString() === botId);

  console.log(botId);
  if (!bot) {
    return <div>Bot not found</div>;
  }

  return (
    <div className="bot-specs">
      <Link className="back-to-list" to="/" onClick={handleBack}>
        <span>&larr;</span> Back to List
      </Link>
      <div className="bot-details">
        <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
        <div className="bot-info">
          <h2>{bot.name}</h2>
          <p>Class: {bot.bot_class}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          <button onClick={() => botEnlisting(bot)}>Enlist</button>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;
