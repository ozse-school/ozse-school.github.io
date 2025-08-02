import ReactGA from "react-ga4";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function AnalyticsTracker() {
    ReactGA.initialize("G-QYKKBM55WW")
    const location = useLocation();

    useEffect(() => {
        ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search })
    }, [location]);

    return null;
}