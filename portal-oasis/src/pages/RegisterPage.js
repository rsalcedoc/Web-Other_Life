// src/pages/RegisterPage.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Link } from '@mui/material';  // Importamos Link de MUI
import './RegisterPage.css'; // Asegúrate de crear este archivo

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        // Aquí se enviarán los datos al backend
    };

    return (
        <Box className="register-container">
            <Typography variant="h4" gutterBottom>
                Registro de Usuario
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Nombre"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Correo Electrónico"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Contraseña"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                    fullWidth
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Registrarse
                </Button>
            </form>

            {/* Aquí agregamos el enlace de "¿Ya tienes una cuenta? Inicia sesión" */}
            <Box mt={2} textAlign="center">
                <Typography variant="body2">
                    ¿Ya tienes una cuenta?{' '}
                    <Link href="/login" variant="body2">Inicia sesión</Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default RegisterPage;
