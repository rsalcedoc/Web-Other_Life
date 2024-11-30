// controllers/authController.js

import { authenticateUser } from '../services/authService';

export const loginController = async (email, password) => {
    try {
        const response = await authenticateUser(email, password);
        return response;  // Devuelve el resultado exitoso (token, usuario, etc.)
    } catch (error) {
        throw new Error('Credenciales incorrectas');
    }
};
