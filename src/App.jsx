import { Routes, Route } from 'react-router-dom';
import PageFrame from './components/PageFrame';
import HomePage from './HomePage';
import HistoryPage from "./HistoryPage";
import OCTeamPage from "./OCTeamPage.jsx";

function App() {
  return (
    <Routes>
      <Route element={<PageFrame />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/team" element={<OCTeamPage />} />
      </Route>
    </Routes>
  );
}

export default App;
