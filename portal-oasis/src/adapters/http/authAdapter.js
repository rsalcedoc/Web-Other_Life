// src/adapters/http/authAdapter.js

import { authenticateUser } from '../../core/services/authService'; // Importa el servicio de autenticación

// Adaptador que conecta la lógica de negocio con el puerto
export const authenticateAdapter = (email, password) => {
  return authenticateUser(email, password); // Llama al servicio de autenticación
};
