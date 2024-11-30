// src/pages/ForgotPasswordPage.js
import React, { useState } from 'react';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState(''); // Estado para el correo electrónico
  const [message, setMessage] = useState(''); // Mensaje de confirmación o error
  const [loading, setLoading] = useState(false); // Estado de carga

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Simulación de envío al backend
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setMessage('Se ha enviado un enlace de recuperación a tu correo.');
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      setMessage('Hubo un error al intentar enviar el correo. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Recuperar Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del email
            required
          />
        </div>
        {message && <div className="message">{message}</div>} {/* Mensaje de éxito o error */}
        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
      <div className="links-container">
        <p>
          ¿Ya tienes una cuenta? <a href="/" className="link">Inicia sesión aquí</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
