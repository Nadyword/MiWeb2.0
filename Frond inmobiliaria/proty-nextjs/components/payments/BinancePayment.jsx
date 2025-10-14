"use client";
import React, { useState } from "react";

export default function BinancePayment() {
  const [formData, setFormData] = useState({
    binanceId: "",
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
    console.log('Datos Binance:', formData);
    // Aquí iría la lógica para enviar los datos
  };

  return (
    <div className="payment-method-container">
      <div className="payment-header">
        <div className="payment-icon">
          <i className="fab fa-bitcoin"></i>
        </div>
        <h3>Pago con Binance</h3>
        <p>Realiza tu pago usando Binance Pay</p>
      </div>

      {/* Información de la cuenta */}
      <div className="account-info">
        <h4>Información de la cuenta para el pago:</h4>
        <div className="account-details">
          <div className="account-item">
            <strong>ID de Binance:</strong>
            <span className="account-value">123456789</span>
            <button 
              className="btn-copy" 
              onClick={() => navigator.clipboard.writeText('123456789')}
            >
              <i className="fas fa-copy"></i>
            </button>
          </div>
          <div className="account-item">
            <strong>Moneda aceptada:</strong>
            <span className="account-value">USDT (TRC20)</span>
          </div>
          <div className="account-item">
            <strong>Red:</strong>
            <span className="account-value">TRON (TRC20)</span>
          </div>
          <div className="account-item">
            <strong>Monto mínimo:</strong>
            <span className="account-value">$10 USDT</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label htmlFor="binanceId">ID de Binance</label>
          <input
            type="text"
            id="binanceId"
            name="binanceId"
            value={formData.binanceId}
            onChange={handleInputChange}
            placeholder="Ingresa tu ID de Binance"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Monto a pagar</label>
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
            placeholder="ID de la transacción en Binance"
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
            <li>• Asegúrate de que el ID de Binance sea correcto</li>
            <li>• El monto debe coincidir exactamente</li>
            <li>• Guarda el ID de transacción para referencia</li>
            <li>• El comprobante debe ser legible</li>
          </ul>
        </div>

        <button type="submit" className="btn-payment">
          Enviar Pago Binance
        </button>
      </form>
    </div>
  );
}
