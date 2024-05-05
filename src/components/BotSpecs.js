import React from "react";

function BotSpecs({ bot, handleBack, handleEnlist }) {
  return (
    <div>
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={() => handleEnlist(bot)}>Enlist</button>
      <button onClick={handleBack}>Back to List</button>
    </div>
  );
}

export default BotSpecs;
