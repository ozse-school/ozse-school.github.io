import { Routes, Route } from 'react-router-dom';
import PageFrame from './components/PageFrame';
import HomePage from './HomePage';
import HistoryPage from "./HistoryPage";
import OCTeamPage from "./OCTeamPage.jsx";
import Archive2026 from "./Archive2026.jsx";

function App() {
  return (
    <Routes>
      <Route element={<PageFrame />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/team" element={<OCTeamPage />} />
        <Route path="/archive/2026" element={<Archive2026 />} />
      </Route>
    </Routes>
  );
}

export default App;
