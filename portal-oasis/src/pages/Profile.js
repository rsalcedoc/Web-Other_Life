import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Barcode from 'react-barcode';
import { Button } from '@mui/material';
import './Profile.css';

const ProfilePage = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [barcodeData, setBarcodeData] = useState("123456789"); // Datos del código de barras de ejemplo
    const navigate = useNavigate();

    const handleLogout = () => {
        setShowConfirmation(true);
    };

    const confirmLogout = (confirmation) => {
        if (confirmation) {
            console.log("Usuario desconectado");
            navigate('/login');
        } else {
            setShowConfirmation(false);
        }
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <div className="profile-pic">
                        <img src="https://via.placeholder.com/100" alt="Profile" />
                    </div>
                    <h2>Perfil del Usuario</h2>
                </div>
                <div className="profile-details">
                    <p><strong>Nombre:</strong> Juan Pérez</p>
                    <p><strong>Correo:</strong> juan.perez@example.com</p>
                    <p><strong>Cédula de Ciudadanía:</strong> 123456789</p>
                    <div className="barcode">
                        {/* Establecemos el ancho al 100% del contenedor */}
                        <Barcode value={barcodeData} width={2} height={40} displayValue={false} />
                    </div>
                </div>
                <div className="logout-section">
                    <Button variant="contained" color="secondary" onClick={handleLogout}>
                        Cerrar sesión
                    </Button>
                </div>
            </div>

            {showConfirmation && (
                <div className="confirmation-modal">
                    <p>¿Estás seguro de que deseas cerrar sesión?</p>
                    <Button variant="contained" color="primary" onClick={() => confirmLogout(true)}>
                        Sí
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => confirmLogout(false)}>
                        No
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
