"use client";
import React from "react";
import PaymentMethodSelector from "@/components/payments/PaymentMethodSelector";

export default function PaymentPage() {
  return (
    <div className="main-content w-100">
      <div className="main-content-inner">
        <div className="button-show-hide show-mb">
          <span className="body-1">Métodos de Pago</span>
        </div>
        
        <div className="payment-page-container">
          <PaymentMethodSelector />
        </div>
      </div>
    </div>
  );
}
