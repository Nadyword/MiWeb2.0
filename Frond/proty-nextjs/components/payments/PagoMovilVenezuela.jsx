"use client";
import React, { useState } from "react";

export default function PagoMovilVenezuela() {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    bank: "",
    amount: "",
    transactionId: "",
    screenshot: null
  });

  const banks = [
    "Banco de Venezuela",
    "Banesco",
    "Mercantil",
    "BBVA Provincial",
    "Banco del Tesoro",
    "100% Banco",
    "Bancaribe",
    "Banco Exterior",
    "Banco Plaza",
    "Banco Caroní"
  ];

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
    console.log('Datos Pago Móvil:', formData);
    // Aquí iría la lógica para enviar los datos
  };

  return (
    <div className="payment-method-container">
      <div className="payment-header">
        <div className="payment-icon">
          <i className="fas fa-mobile-alt"></i>
        </div>
        <h3>Pago Móvil Venezuela</h3>
        <p>Realiza tu pago usando Pago Móvil</p>
      </div>

      {/* Información de la cuenta */}
      <div className="account-info">
        <h4>Información de la cuenta para el pago:</h4>
        <div className="account-details">
          <div className="account-item">
            <strong>Número de teléfono:</strong>
            <span className="account-value">0412-1234567</span>
            <button 
              className="btn-copy" 
              onClick={() => navigator.clipboard.writeText('0412-1234567')}
            >
              <i className="fas fa-copy"></i>
            </button>
          </div>
          <div className="account-item">
            <strong>Cédula:</strong>
            <span className="account-value">V-12345678</span>
            <button 
              className="btn-copy" 
              onClick={() => navigator.clipboard.writeText('V-12345678')}
            >
              <i className="fas fa-copy"></i>
            </button>
          </div>
          <div className="account-item">
            <strong>Banco:</strong>
            <span className="account-value">Banco de Venezuela</span>
          </div>
          <div className="account-item">
            <strong>Moneda:</strong>
            <span className="account-value">Bolívares (Bs.)</span>
          </div>
          <div className="account-item">
            <strong>Monto mínimo:</strong>
            <span className="account-value">Bs. 100.000</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label htmlFor="phoneNumber">Número de Teléfono</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="0412-1234567"
            pattern="[0-9]{4}-[0-9]{7}"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bank">Banco</label>
          <select
            id="bank"
            name="bank"
            value={formData.bank}
            onChange={handleInputChange}
            required
          >
            <option value="">Selecciona tu banco</option>
            {banks.map((bank, index) => (
              <option key={index} value={bank}>
                {bank}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Monto a pagar (Bs.)</label>
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
            placeholder="ID de la transacción en Pago Móvil"
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
            <li>• El número debe estar registrado en Pago Móvil</li>
            <li>• El monto debe estar en bolívares (Bs.)</li>
            <li>• Selecciona el banco correcto</li>
            <li>• Guarda el ID de transacción para referencia</li>
            <li>• El comprobante debe mostrar el monto y destinatario</li>
            <li>• Asegúrate de tener saldo suficiente en tu cuenta</li>
          </ul>
        </div>

        <button type="submit" className="btn-payment">
          Enviar Pago Móvil
        </button>
      </form>
    </div>
  );
}
