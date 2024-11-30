import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Profile from './pages/Profile';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import RegisterPage from './pages/RegisterPage';
import Wallet from './pages/Wallet';
import Ecommerce from './pages/Ecommerce'; // Importar el componente
import Inventory from './pages/Inventory'; // Importar la página de Inventario
import Recarga from './pages/Recarga'; // Importar la página de Recarga
import Certifications from './pages/Certifications';
import IntroductionPage from './pages/IntroductionPage'; // Importar la nueva página de introducción
import EventsPage from './pages/EventsPage'; // Importa el nuevo archivo
import AboutOasis from './pages/AboutOasis';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/ecommerce" element={<Ecommerce />} /> {/* Ruta correcta de e-commerce */}
        <Route path="/gallery" element={<div>Gallery Page</div>} />
        <Route path="/recharge" element={<Recarga />} /> {/* Ruta para el apartado de recargas */}
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/inventory" element={<Inventory />} /> {/* Ruta del inventario */}
        <Route path="/introduction" element={<IntroductionPage />} /> {/* Nueva ruta para la introducción */}
        <Route path="/events" element={<EventsPage />} /> {/* Nueva ruta para eventos */}
        <Route path="/about" element={<AboutOasis />} />

      </Routes>
    </Router>
  );
}

export default App;
