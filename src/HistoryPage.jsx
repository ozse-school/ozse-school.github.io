import React from "react";
import AboutEvent from "./HistoryPage/AboutEvent";
import Attending from "./HistoryPage/Attending";
import History from "./HistoryPage/History";

function HistoryPage() {
  return (
    <div>
        <AboutEvent/>
        <Attending/>
        <History/>
    </div>
  );
}

export default HistoryPage;
