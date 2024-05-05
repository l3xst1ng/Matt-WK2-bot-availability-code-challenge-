import React, { useEffect, useState } from "react";

function BotCollection() {
  const [bots, setBots] = useState([]);
  useEffect(() => {
    fetch("/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

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
