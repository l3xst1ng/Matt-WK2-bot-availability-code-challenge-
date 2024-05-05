import React from "react";

function YourBotArmy({ yourBotArmy, botRelease, botDischarge }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {yourBotArmy.map((bot) => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p>Class: {bot.bot_class}</p>
          <button onClick={() => botRelease(bot)}>Release</button>
          <button onClick={() => botDischarge(bot)}>Discharge</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;
