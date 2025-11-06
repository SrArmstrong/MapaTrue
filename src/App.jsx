import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
import './App.css';

function Home() {
  return (
    <div style={{ padding: "24px", textAlign: "center" }}>
      <h1>Bienvenido a MapaTrue</h1>
      <p>Esta es la página principal de la aplicación.</p>
      <Link to="/privacidad" style={{ color: '#007bff', textDecoration: 'none' }}>
        Ver Política de Privacidad
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacidad" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;