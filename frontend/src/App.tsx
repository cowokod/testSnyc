import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Market from './pages/Market';
import Trading from './pages/Trading';
import Portfolio from './pages/Portfolio';
import Transaction from './pages/Transaction';
import Setting from './pages/Setting';

export default function App() {
  return (
    <div className="flex">
      <NavBar />
      <main className="flex-1 p-4 mb-16 md:mb-0">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/market" element={<Market />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </main>
    </div>
  );
}
