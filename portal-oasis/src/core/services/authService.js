// services/authService.js

export const authenticateUser = async (email, password) => {
    // Aquí se simula la lógica de autenticación
    // En un proyecto real, llamarías a tu backend para autenticar al usuario.
    if (email === 'test@test.com' && password === 'password123') {
        return { token: 'fake-jwt-token', user: { email } };
    } else {
        throw new Error('Credenciales incorrectas');
    }
};
