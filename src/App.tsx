import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PhotoOfTheDay from './components/photo-of-the-day/photo-of-the-day';
import Layout from './layout/layout';
import ClosestAsteroid from './components/closest-asteroid/closest-asteroid';
function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" />
        <Route path="/photo-of-the-day" element={<PhotoOfTheDay/>} />
        <Route path="/closest-asteroid" element={<ClosestAsteroid />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
