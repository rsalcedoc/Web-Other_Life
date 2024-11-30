import React, { useState } from 'react';
import { authenticateAdapter } from '../adapters/http/authAdapter';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await authenticateAdapter(email, password);
      console.log('Autenticación exitosa:', response);
      navigate('/home');
    } catch (error) {
      console.error('Error de autenticación:', error);
      setError('Correo o contraseña incorrectos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" disabled={loading}>
          {loading ? 'Cargando...' : 'Iniciar sesión'}
        </button>
      </form>
      <div className="links-container">
        <p>
          ¿No tienes cuenta? <Link to="/register" className="link">Regístrate aquí</Link>
        </p>
        <p>
          <Link to="/forgot-password" className="link">¿Olvidaste tu contraseña?</Link>
        </p>
      </div>
      <div className="social-links">
        <p>Síguenos en:</p>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |{' '}
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a> |{' '}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> |{' '}
        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">X</a>
      </div>
    </div>
  );
};

export default LoginPage;
