import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";
import BotSpecs from "./BotSpecs";
import SortBar from "./SortBar";
import FilterBar from "./FilterBar";
import "./BotCollection.css";

function BotCollection({ botEnlisting }) {
  // State to store the initial list of bots fetched from the API
  const [bots, setBots] = useState([]);
  // State to store the list of bots to be displayed after sorting and filtering
  const [displayedBots, setDisplayedBots] = useState([]);
  // State to store the currently selected bot for displaying its specs
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => {
        setBots(data);
        setDisplayedBots(data);
      });
  }, []);

  const handleSorting = (event) => {
    const sortCriterion = event.target.value;

    if (
      sortCriterion === "health" ||
      sortCriterion === "damage" ||
      sortCriterion === "armor"
    ) {
      const sortedBots = [...bots].sort((a, b) => {
        if (a[sortCriterion] < b[sortCriterion]) return 1;
        if (a[sortCriterion] > b[sortCriterion]) return -1;
        return 0;
      });
      setDisplayedBots(sortedBots);
    }
  };
  // Function to handle filtering the bots based on the selected filters
  const botFilter = (filters) => {
    if (filters.length === 0) {
      setDisplayedBots(bots);
    } else {
      const filtered = bots.filter((bot) => filters.includes(bot.bot_class));
      setDisplayedBots(filtered);
    }
  };

  // Function to handle showing the specs of a selected bot
  const showBotSpecs = (bot) => {
    setSelectedBot(bot);
  };

  // Function to handle going back to the bot list from the bot specs view
  const handleBack = () => {
    setSelectedBot(null);
  };

  return (
    <div className="bot-collection">
      <div className="bot-controls">
        <SortBar handleSorting={handleSorting} />
        <FilterBar handleFilter={botFilter} />
      </div>

      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          handleBack={handleBack}
          botEnlisting={botEnlisting}
        />
      ) : (
        <div className="bot-cards-container">
          {displayedBots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              botEnlisting={botEnlisting}
              showBotSpecs={showBotSpecs}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default BotCollection;
