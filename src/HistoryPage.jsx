import React from "react";
import History from "./HistoryPage/History";
import {useLocation} from "react-router-dom";

function HistoryPage() {
    const location = useLocation();
    const currentPath = location.pathname;
    const isHomePage = currentPath === "/"

  return (
    <div className={`${!isHomePage && "mt-12"}`}>
        <History/>
    </div>
  );
}

export default HistoryPage;
