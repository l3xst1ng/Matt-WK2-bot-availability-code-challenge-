import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "./BotSpecs";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BotCollection />
              <YourBotArmy />
            </>
          }
        />
        <Route path="/bots/:botId" element={<BotSpecs />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
