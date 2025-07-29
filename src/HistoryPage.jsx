import React from "react";
import AboutEvent from "./HistoryPage/AboutEvent";
import Attending from "./HistoryPage/Attending";
import History from "./HistoryPage/History";
import {useLocation} from "react-router-dom";

function HistoryPage() {
    const location = useLocation();
    const currentPath = location.pathname;
    const isHomePage = currentPath === "/"

  return (
    <div className={`${!isHomePage && "mt-12"}`}>
        {/*<AboutEvent/>*/}
        {/*<Attending/>*/}
        <History/>
    </div>
  );
}

export default HistoryPage;
