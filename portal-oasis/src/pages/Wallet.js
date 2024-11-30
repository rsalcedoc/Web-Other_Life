import React from "react";
import "./Wallet.css";  // Importamos los estilos
import { FaPlusCircle, FaPaperPlane, FaHistory, FaUserCircle } from "react-icons/fa";
import "./Wallet.css";


const Wallet = () => {
  const userName = "Juan Pérez";  // Ejemplo de nombre de usuario
  const userBalance = 1500;  // Ejemplo de saldo

  return (
    <div className="wallet-container">
      {/* Información del usuario */}
      <div className="wallet-header">
        <FaUserCircle className="user-icon" />
        <div>
          <h2>{userName}</h2>
          <p>Billetera Digital</p>
        </div>
      </div>

      {/* Balance del usuario */}
      <div className="wallet-balance">
        <h3>Saldo disponible</h3>
        <p className="balance-amount">${userBalance.toLocaleString()} COP</p>
      </div>

      {/* Opciones principales */}
      <div className="wallet-actions">
        <div className="action-item">
          <FaPlusCircle className="action-icon" />
          <p>Agregar Fondos</p>
        </div>
        <div className="action-item">
          <FaPaperPlane className="action-icon" />
          <p>Transferir</p>
        </div>
        <div className="action-item">
          <FaHistory className="action-icon" />
          <p>Historial</p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
