import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "./BotSpecs";

function AppRoutes({
  bots,
  botEnlisting,
  handleRelease,
  handleDischarge,
  yourBotArmy,
}) {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<BotCollection botEnlisting={botEnlisting} />}
        />
        <Route
          path="/your-bot-army"
          element={
            <YourBotArmy
              yourBotArmy={yourBotArmy}
              handleRelease={handleRelease}
              handleDischarge={handleDischarge}
            />
          }
        />
        <Route
          path="/bots/:botId"
          element={<BotSpecs botEnlisting={botEnlisting} bots={bots} />}
        />
        <Route
          exact
          path="/"
          element={<BotCollection botEnlistinglist={botEnlisting} />}
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
