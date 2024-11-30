import React, { useState } from "react";
import "./Ecommerce.css";

const Ecommerce = () => {
const [products] = useState([
    {
    id: 1,
    name: "Laptop Pro X",
    price: 1200,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format",
    description: "Una laptop profesional con características de alto rendimiento para diseñadores y desarrolladores.",
    },
    {
    id: 2,
    name: "Smartphone Ultra",
    price: 800,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format",
    description: "Un smartphone de última generación con cámara de alta calidad y batería de larga duración.",
    },
    {
    id: 3,
    name: "Auriculares Premium",
    price: 200,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format",
    description: "Auriculares con cancelación de ruido y sonido envolvente, perfectos para música y juegos.",
    },
]);

const [cart, setCart] = useState([]);
const [paymentMethod, setPaymentMethod] = useState("");
const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    email: "",
});

const [selectedProduct, setSelectedProduct] = useState(null);
const [successMessage, setSuccessMessage] = useState(false);

const addToCart = (product) => {
    setCart([...cart, product]);
};

const handlePurchase = () => {
    if (cart.length === 0) {
    alert("El carrito está vacío");
    } else if (!paymentMethod) {
    alert("Por favor selecciona un método de pago");
    } else if (
    paymentMethod === "Tarjeta de Crédito" &&
    (!paymentDetails.cardNumber || !paymentDetails.expiry || !paymentDetails.cvv)
    ) {
    alert("Por favor completa todos los campos de la tarjeta");
    } else if (paymentMethod === "PayPal" && !paymentDetails.email) {
    alert("Por favor ingresa tu correo electrónico");
    } else {
    setSuccessMessage(true);
      setTimeout(() => setSuccessMessage(false), 3000); // Mensaje desaparece después de 3 segundos
    setCart([]);
    setPaymentDetails({
        cardNumber: "",
        expiry: "",
        cvv: "",
        email: "",
    });
    }
};

const handleInputChange = (e) => {
    setPaymentDetails({
    ...paymentDetails,
    [e.target.name]: e.target.value,
    });
};

return (
    <div className="ecommerce-container">
    <h1>E-commerce</h1>
    <div className="products">
        {products.map((product) => (
        <div key={product.id} className="product-card">
            <img
            src={product.image}
            alt={product.name}
            onClick={() => setSelectedProduct(product)}
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
        ))}
    </div>

    {selectedProduct && (
        <div className="modal">
        <div className="modal-content">
            <span
            className="close-button"
            onClick={() => setSelectedProduct(null)}
            >
            &times;
            </span>
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <p>{selectedProduct.description}</p>
            <p><strong>Precio:</strong> ${selectedProduct.price}</p>
        </div>
        </div>
    )}

    <div className="cart-section">
        <div className="cart">
        <h2>Carrito de Compras</h2>
        {cart.length === 0 ? (
            <p>El carrito está vacío</p>
        ) : (
            <ul>
            {cart.map((item, index) => (
                <li key={index}>
                {item.name} - ${item.price}
                </li>
            ))}
            </ul>
        )}
        <button className="purchase-button" onClick={handlePurchase}>
            Realizar Compra
        </button>
        </div>
        <div className="payment-methods">
        <h2>Método de Pago</h2>
        <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
        >
            <option value="">Selecciona un método</option>
            <option value="Tarjeta de Crédito">Tarjeta de Crédito</option>
            <option value="PayPal">PayPal</option>
            <option value="Transferencia Bancaria">Transferencia Bancaria</option>
        </select>
        {paymentMethod && (
            <div className="payment-form">
            <h3>Datos de {paymentMethod}</h3>
            {paymentMethod === "Tarjeta de Crédito" && (
                <div>
                <input
                    type="text"
                    name="cardNumber"
                    placeholder="Número de Tarjeta"
                    value={paymentDetails.cardNumber}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="expiry"
                    placeholder="Fecha de Expiración"
                    value={paymentDetails.expiry}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={paymentDetails.cvv}
                    onChange={handleInputChange}
                />
                </div>
            )}
            {paymentMethod === "PayPal" && (
                <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    value={paymentDetails.email}
                    onChange={handleInputChange}
                />
                </div>
            )}
            {paymentMethod === "Transferencia Bancaria" && (
                <p>
                Por favor, realiza la transferencia bancaria utilizando los
                datos enviados a tu correo.
                </p>
            )}
            </div>
        )}
        </div>
    </div>

    {successMessage && (
        <div className="success-message">
        <h2>¡Compra realizada con éxito!</h2>
        </div>
    )}
    </div>
);
};

export default Ecommerce;
