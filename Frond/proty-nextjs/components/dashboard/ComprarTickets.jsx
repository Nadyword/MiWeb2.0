"use client";
import React, { useState } from "react";
import PaymentMethodSelector from "../payments/PaymentMethodSelector";

export default function ComprarTickets() {
  const [ticketData, setTicketData] = useState({
    ticketValue: 50,
    quantity: 1,
    totalAmount: 50
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const numValue = parseFloat(value) || 0;
    
    setTicketData(prev => {
      const newData = {
        ...prev,
        [name]: numValue
      };
      
      // Calcular el monto total automáticamente
      if (name === 'ticketValue' || name === 'quantity') {
        newData.totalAmount = newData.ticketValue * newData.quantity;
      }
      
      return newData;
    });
  };
  return (
    <div className="main-content w-100">
      <div className="main-content-inner">
        <div className="button-show-hide show-mb">
          <span className="body-1">Comprar Tickets</span>
        </div>
        
        {/* Sección de Información de Tickets */}
        <div className="widget-box-2 mb-20">
          <h3 className="title">Comprar Tickets</h3>
          <div className="ticket-purchase-section">
            <div className="ticket-summary-box">
              <div className="ticket-info-row">
                <div className="info-label">
                  <i className="fas fa-ticket-alt"></i>
                  <span>Valor del Ticket:</span>
                </div>
                <div className="info-value">
                  <span className="currency">USD</span>
                  <span className="amount">${ticketData.ticketValue}</span>
                </div>
              </div>
              
              <div className="ticket-info-row">
                <div className="info-label">
                  <i className="fas fa-shopping-cart"></i>
                  <span>Cantidad de Tickets:</span>
                </div>
                <div className="counter-section">
                  <button 
                    type="button"
                    className="btn-counter"
                    onClick={() => setTicketData(prev => ({
                      ...prev,
                      quantity: Math.max(1, prev.quantity - 1),
                      totalAmount: prev.ticketValue * Math.max(1, prev.quantity - 1)
                    }))}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  
                  <span className="quantity-display">{ticketData.quantity}</span>
                  
                  <button 
                    type="button"
                    className="btn-counter"
                    onClick={() => setTicketData(prev => ({
                      ...prev,
                      quantity: Math.min(100, prev.quantity + 1),
                      totalAmount: prev.ticketValue * Math.min(100, prev.quantity + 1)
                    }))}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              
              <div className="ticket-info-row total-row">
                <div className="info-label">
                  <i className="fas fa-calculator"></i>
                  <span>Monto Total:</span>
                </div>
                <div className="info-value total-value">
                  <span className="currency">USD</span>
                  <span className="total-amount">${ticketData.totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="widget-box-2 mb-20">
          <h3 className="title">Métodos de Pago</h3>
          <div className="payment-methods-section">
            <PaymentMethodSelector />
          </div>
        </div>
      </div>
      <div className="overlay-dashboard" />
    </div>
  );
}
