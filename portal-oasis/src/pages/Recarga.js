import React, { useState } from "react";
import "./Recarga.css";

const Recarga = () => {
  const [amount, setAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [formData, setFormData] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAmountChange = (e) => setAmount(e.target.value);

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    setFormData({});
    setIsCompleted(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (amount && selectedMethod && Object.values(formData).every((field) => field)) {
      setIsCompleted(true);
    } else {
      alert("Por favor completa todos los campos antes de continuar.");
    }
  };

  const renderFormFields = () => {
    switch (selectedMethod) {
      case "banco":
        return (
          <div className="form-section">
            <input
              type="text"
              name="accountName"
              placeholder="Nombre del titular"
              value={formData.accountName || ""}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="accountNumber"
              placeholder="Número de cuenta"
              value={formData.accountNumber || ""}
              onChange={handleInputChange}
            />
            <select name="accountType" value={formData.accountType || ""} onChange={handleInputChange}>
              <option value="">Tipo de cuenta</option>
              <option value="corriente">Corriente</option>
              <option value="ahorros">Ahorros</option>
            </select>
          </div>
        );
      case "efectivo":
        return (
          <div className="form-section">
            <select name="cashPoint" value={formData.cashPoint || ""} onChange={handleInputChange}>
              <option value="">Selecciona un punto de recarga</option>
              <option value="tienda1">Efecty</option>
              <option value="tienda2">Super Giros</option>
              <option value="tienda3">Bancolombia</option>
            </select>
            <input
              type="text"
              name="voucherCode"
              placeholder="Código de comprobante"
              value={formData.voucherCode || ""}
              onChange={handleInputChange}
            />
          </div>
        );
      case "transferencia":
        return (
          <div className="form-section">
            <input
              type="text"
              name="originBank"
              placeholder="Banco de origen"
              value={formData.originBank || ""}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="referenceNumber"
              placeholder="Número de referencia"
              value={formData.referenceNumber || ""}
              onChange={handleInputChange}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="recarga-container">
      <div className="recarga-header">
        <h2>Recargar Saldo</h2>
        <p>Elige tu método de recarga y completa los datos requeridos</p>
      </div>

      <div className="recarga-methods">
        <button className={selectedMethod === "banco" ? "active" : ""} onClick={() => handleMethodSelect("banco")}>
          Banco
        </button>
        <button className={selectedMethod === "efectivo" ? "active" : ""} onClick={() => handleMethodSelect("efectivo")}>
          Efectivo
        </button>
        <button className={selectedMethod === "transferencia" ? "active" : ""} onClick={() => handleMethodSelect("transferencia")}>
          Transferencia
        </button>
      </div>

      {selectedMethod && (
        <div className="recarga-details">
          <input
            type="number"
            placeholder="Monto de recarga"
            value={amount}
            onChange={handleAmountChange}
          />
          {renderFormFields()}
        </div>
      )}

      <button className="submit-btn" onClick={handleSubmit}>
        Realizar Recarga
      </button>

      {isCompleted && (
        <div className="recarga-completed">
          <h3>¡Recarga Exitosa!</h3>
          <p>Tu saldo ha sido recargado correctamente.</p>
        </div>
      )}
    </div>
  );
};

export default Recarga;
