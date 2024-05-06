import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";
import BotSpecs from "./BotSpecs";
import SortBar from "./SortBar";
import FilterBar from "./FilterBar";
import "./components/BotCollection.css";

function BotCollection({ setYourBotArmy }) {
  // State to store the initial list of bots fetched from the API
  const [bots, setBots] = useState([]);
  // State to store the list of bots to be displayed after sorting and filtering
  const [displayedBots, setDisplayedBots] = useState([]);
  // State to store the currently selected bot for displaying its specs
  const [selectedBot, setSelectedBot] = useState(null);

  // Fetch the list of bots from the API on component mount
  useEffect(() => {
    fetch("/bots")
      .then((response) => response.json())
      .then((data) => {
        setBots(data);
        setDisplayedBots(data);
      });
  }, []);

  // Function to handle sorting the bots based on the selected criterion
  const sortBots = (criterion) => {
    const sortedBots = [...displayedBots].sort((a, b) => {
      if (a[criterion] < b[criterion]) return 1;
      if (a[criterion] > b[criterion]) return -1;
      return 0;
    });
    setDisplayedBots(sortedBots);
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

  // Function to handle enlisting a bot
  const handleEnlist = (bot) => {
    setYourBotArmy((prevYourBotArmy) => [...prevYourBotArmy, bot]);
  };

  // Function to handle showing the specs of a selected bot
  const handleShowSpecs = (bot) => {
    setSelectedBot(bot);
  };

  // Function to handle going back to the bot list from the bot specs view
  const handleBack = () => {
    setSelectedBot(null);
  };

  return (
    <div className="bot-collection">
      <div className="bot-controls">
        {/* Rendering the SortBar and FilterBar components */}
        <SortBar handleSort={handleSort} />
        <FilterBar handleFilter={handleFilter} />
      </div>

      {/* Conditionally render either the BotSpecs component or the BotCard components */}
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          handleBack={handleBack}
          handleEnlist={handleEnlist}
        />
      ) : (
        <div className="bot-cards-container">
          {displayedBots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              handleEnlist={handleEnlist}
              handleShowSpecs={handleShowSpecs}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default BotCollection;
