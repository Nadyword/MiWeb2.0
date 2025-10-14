"use client";
import React, { useState } from "react";
import BinancePayment from "./BinancePayment";
import ZellePayment from "./ZellePayment";
import PayPalPayment from "./PayPalPayment";
import PagoMovilVenezuela from "./PagoMovilVenezuela";

export default function PaymentMethodSelector() {
  const [selectedMethod, setSelectedMethod] = useState("");

  const paymentMethods = [
    {
      id: "binance",
      name: "Binance",
      icon: "fab fa-bitcoin",
      description: "Pago con criptomonedas"
    },
    {
      id: "zelle",
      name: "Zelle",
      icon: "fas fa-university",
      description: "Transferencia bancaria rápida"
    },
    {
      id: "paypal",
      name: "PayPal",
      icon: "fab fa-paypal",
      description: "Pago seguro online"
    },
    {
      id: "pago-movil",
      name: "Pago Móvil Venezuela",
      icon: "fas fa-mobile-alt",
      description: "Pago móvil nacional"
    }
  ];

  const renderPaymentForm = () => {
    switch (selectedMethod) {
      case "binance":
        return <BinancePayment />;
      case "zelle":
        return <ZellePayment />;
      case "paypal":
        return <PayPalPayment />;
      case "pago-movil":
        return <PagoMovilVenezuela />;
      default:
        return null;
    }
  };

  return (
    <div className="payment-selector-container">
      <div className="payment-selector-header">
        <h2>Selecciona tu método de pago</h2>
        <p>Elige la opción que prefieras para realizar tu pago</p>
      </div>

      {!selectedMethod ? (
        <div className="payment-methods-grid">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="payment-method-card"
              onClick={() => setSelectedMethod(method.id)}
            >
              <div className="method-icon">
                <i className={method.icon}></i>
              </div>
              <h3>{method.name}</h3>
              <p>{method.description}</p>
              <button className="btn-select-method">
                Seleccionar
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="payment-form-container">
          <div className="form-header">
            <button 
              className="btn-back"
              onClick={() => setSelectedMethod("")}
            >
              <i className="fas fa-arrow-left"></i>
              Volver a métodos de pago
            </button>
          </div>
          {renderPaymentForm()}
        </div>
      )}
    </div>
  );
}
