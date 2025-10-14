"use client";
import React from "react";
import Image from "next/image";
import { properties5 } from "@/data/properties";
export default function PagoAprobacion() {
  return (
    <div className="main-content w-100">
      <div className="main-content-inner wrap-dashboard-content">
        <div className="button-show-hide show-mb">
          <span className="body-1">Show Dashboard</span>
        </div>
        <div className="widget-box-2 wd-listing mt-20">
          <h3 className="title">Registro de pagos por aprobación</h3>
          <div className="wrap-table">
            <div className="table-responsive">
              <table style={{ tableLayout: 'fixed', width: '100%' }}>
                <thead>
                  <tr>
                    <th style={{ width: '25%' }}>Pagos</th>
                    <th style={{ width: '50%' }}>Datos del pago</th>
                    <th style={{ width: '25%' }}>Aprobación</th>
                  </tr>
                </thead>
                <tbody>
                  {properties5.map((property, i) => (
                    <tr key={i} className="file-delete">
                      <td>
                        <div className="listing-box">
                          <div className="images">
                            <Image
                              alt="images"
                              src={property.imageSrc}
                              width={615}
                              height={405}
                            />
                          </div>
                          <div className="content">
                            <div className="text-date">
                              Metodo de pago: {property.method}
                            </div>
                            <div className="text-btn text-color-primary">
                              Monto: {property.price.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '15px', verticalAlign: 'top' }}>
                        <ul className="list-action" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                          <li style={{ marginBottom: '8px', padding: '5px 0', borderBottom: '1px solid #eee' }}>
                            <strong>Fecha:</strong> {property.date}
                          </li>
                          <li style={{ marginBottom: '8px', padding: '5px 0', borderBottom: '1px solid #eee' }}>
                            <strong>Concursante:</strong> {property.name}
                          </li>
                          <li style={{ marginBottom: '8px', padding: '5px 0', borderBottom: '1px solid #eee' }}>
                            <strong>Correo electrónico:</strong> {property.email}
                          </li>
                          <li style={{ marginBottom: '8px', padding: '5px 0' }}>
                            <strong>Teléfono:</strong> {property.phone}
                          </li>
                        </ul>
                      </td>
                      <td>
                        <div className="status-wrap">
                          <a href="#" className="btn-status-approve">
                            {" "}
                            Aprobar
                          </a>
                        </div>
                        <br />
                        <div className="status-wrap">
                          <a href="#" className="btn-status-reject">
                            {" "}
                            Rechazar
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="wg-pagination">
              <li className="arrow">
                <a href="#">
                  <i className="icon-arrow-left" />
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">...</a>
              </li>
              <li className="active">
                <a href="#">20</a>
              </li>
              <li className="arrow">
                <a href="#">
                  <i className="icon-arrow-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="overlay-dashboard" />
    </div>
  );
}
