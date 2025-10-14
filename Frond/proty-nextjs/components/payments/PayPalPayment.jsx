"use client";
import React, { useState } from "react";

export default function PayPalPayment() {
  const [formData, setFormData] = useState({
    paypalEmail: "",
    amount: "",
    transactionId: "",
    screenshot: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      screenshot: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos PayPal:', formData);
    // Aquí iría la lógica para enviar los datos
  };

  return (
    <div className="payment-method-container">
      <div className="payment-header">
        <div className="payment-icon">
          <i className="fab fa-paypal"></i>
        </div>
        <h3>Pago con PayPal</h3>
        <p>Realiza tu pago usando PayPal</p>
      </div>

      {/* Información de la cuenta */}
      <div className="account-info">
        <h4>Información de la cuenta para el pago:</h4>
        <div className="account-details">
          <div className="account-item">
            <strong>Email de PayPal:</strong>
            <span className="account-value">pagos@eliteemporio.com</span>
            <button 
              className="btn-copy" 
              onClick={() => navigator.clipboard.writeText('pagos@eliteemporio.com')}
            >
              <i className="fas fa-copy"></i>
            </button>
          </div>
          <div className="account-item">
            <strong>Nombre del destinatario:</strong>
            <span className="account-value">Élite Emporium Properties C.A.</span>
          </div>
          <div className="account-item">
            <strong>Moneda:</strong>
            <span className="account-value">USD (Dólares Americanos)</span>
          </div>
          <div className="account-item">
            <strong>Monto mínimo:</strong>
            <span className="account-value">$10 USD</span>
          </div>
          <div className="account-item">
            <strong>Tipo de pago:</strong>
            <span className="account-value">Envío de dinero (Friends & Family)</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label htmlFor="paypalEmail">Email de PayPal</label>
          <input
            type="email"
            id="paypalEmail"
            name="paypalEmail"
            value={formData.paypalEmail}
            onChange={handleInputChange}
            placeholder="tuemail@ejemplo.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Monto a pagar (USD)</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            placeholder="0.00"
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="transactionId">ID de Transacción</label>
          <input
            type="text"
            id="transactionId"
            name="transactionId"
            value={formData.transactionId}
            onChange={handleInputChange}
            placeholder="ID de la transacción en PayPal"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="screenshot">Comprobante de Pago</label>
          <input
            type="file"
            id="screenshot"
            name="screenshot"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
          <small>Sube una captura de pantalla del comprobante</small>
        </div>

        <div className="payment-info">
          <h4>Información importante:</h4>
          <ul>
            <li>• El email debe estar verificado en PayPal</li>
            <li>• El monto debe estar en dólares (USD)</li>
            <li>• Guarda el ID de transacción para referencia</li>
            <li>• El comprobante debe mostrar el monto y destinatario</li>
            <li>• Asegúrate de que la cuenta tenga fondos suficientes</li>
          </ul>
        </div>

        <button type="submit" className="btn-payment">
          Enviar Pago PayPal
        </button>
      </form>
    </div>
  );
}
