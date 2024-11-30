import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaUserCircle, FaWallet, FaShoppingCart, FaImage, FaMoneyBillWave, FaCertificate } from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log('Usuario desconectado');
        navigate('/login');
    };

    const goToProfile = () => {
        navigate('/profile');
    };

    const goToWallet = () => {
        navigate('/wallet');
    };

    const goToEcommerce = () => {
        navigate('/ecommerce');
    };

    const goToInventory = () => {
        navigate('/inventory');
    };

    const goToRecharge = () => {
        navigate('/recharge');
    };

    const goToCertifications = () => {
        navigate('/certifications');
    };

    const goToIntroduction = () => {
        navigate('/introduction');
    };

    return (
        <div>
            {/* Banner */}
            <div className="banner">
                <div className="left-section">
                    <div className="about-tech">
                        <span className="circle-icon"></span>
                        Oasis
                    </div>
                </div>
                <div className="center-section">
                    <nav>
                        <a onClick={() => navigate('/home')}>Home</a>
                        <a onClick={goToIntroduction}>Introduction</a>
                        <a onClick={() => navigate('/events')}>Events</a>
                        <a href="/about">About Other Life</a>
                    </nav>
                </div>
                <div className="right-section">
                    <div className="social-media">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                        <FaWallet className="wallet-icon" onClick={goToWallet} />
                    </div>
                    <div className="profile-icon" onClick={goToProfile}>
                        <FaUserCircle size={40} />
                    </div>
                </div>
            </div>

            {/* Cuadros inferiores */}
            <div className="grid-container">
                <div className="grid-item" onClick={goToEcommerce}>
                    <FaShoppingCart className="grid-icon" />
                    <p>E-commerce</p>
                </div>
                <div className="grid-item" onClick={goToInventory}>
                    <FaImage className="grid-icon" />
                    <p>Galería</p>
                </div>
                <div className="grid-item" onClick={goToRecharge}>
                    <FaMoneyBillWave className="grid-icon" />
                    <p>Recargas</p>
                </div>
                <div className="grid-item" onClick={goToCertifications}>
                    <FaCertificate className="grid-icon" />
                    <p>Certificaciones</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
