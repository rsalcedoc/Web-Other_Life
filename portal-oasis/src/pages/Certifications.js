import React from 'react';
import './Certifications.css';
import { FaCertificate, FaCheckCircle } from 'react-icons/fa';

const Certifications = () => {
    const certifications = [
        {
            id: 1,
            title: "Certificación bancaria",
            description: "Domina habilidades avanzadas en desarrollo de software.",
            icon: <FaCertificate />,
        },
        {
            id: 2,
            title: "Certificado en Seguridad Informática",
            description: "Conoce las mejores prácticas para proteger sistemas y datos.",
            icon: <FaCheckCircle />,
        },
        {
            id: 3,
            title: "Certificado en Diseño UI/UX",
            description: "Crea experiencias de usuario atractivas y funcionales.",
            icon: <FaCertificate />,
        },
    ];

    return (
        <div className="certifications-container">
            <h1 className="certifications-title">Certificaciones Disponibles</h1>
            <div className="certifications-grid">
                {certifications.map(cert => (
                    <div key={cert.id} className="certification-card">
                        <div className="certification-icon">{cert.icon}</div>
                        <h2 className="certification-title">{cert.title}</h2>
                        <p className="certification-description">{cert.description}</p>
                        <button className="certification-button">Ver más</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
