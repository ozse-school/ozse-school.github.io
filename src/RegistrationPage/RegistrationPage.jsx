import React from "react";
import { useLocation } from "react-router-dom";
import Registration from "./Registration.jsx";

function RegistrationPage() {
    const location = useLocation();
    const currentPath = location.pathname;
    const isHomePage = currentPath === "/"

    return (
        <div className={`${!isHomePage && "mt-12"}`}>
            <Registration />
        </div>
    );
}

export default RegistrationPage