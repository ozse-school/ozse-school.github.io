import { Routes, Route } from 'react-router-dom';
import PageFrame from './components/PageFrame';
import HomePage from './HomePage';

function App() {
  return (
    <Routes>
      <Route element={<PageFrame />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
