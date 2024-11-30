import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';

// Agregar el enlace de Font Awesome en el head del documento
const link = document.createElement('link');
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
link.rel = 'stylesheet';
document.head.appendChild(link);

// Verificar la conexión al backend
(async () => {
    try {
        const response = await axios.get('http://localhost:5000/health'); // Ruta del endpoint de prueba en tu backend
        console.log('Conexión con el backend exitosa:', response.data);
    } catch (error) {
        console.error('Error al conectar con el backend:', error.message);
    }
})();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
