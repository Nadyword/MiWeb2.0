"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useAuth } from "../api/useAuth";
export default function Register() {
  const { loading, error, success, register, clearMessages } = useAuth();
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Password: '',
    ConfirmPassword: '',
    Telefono: '',
    FechaNacimiento: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Limpiar mensajes de error cuando el usuario empiece a escribir
    if (error) clearMessages();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!formData.Name || !formData.Email || !formData.Telefono || !formData.Password || !formData.ConfirmPassword || !formData.FechaNacimiento) {
      alert('Por favor, completa todos los campos');
      return;
    }

    if(formData.FechaNacimiento < new Date().getFullYear() - 18) {
      alert('Debes tener al menos 18 años');
      return;
    }

    if (formData.Password !== formData.ConfirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (formData.Password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    try {
      const fecha = formData.FechaNacimiento
        ? new Date(formData.FechaNacimiento).toISOString().slice(0, 10)
        : '';

      const response = await register(formData);

      if (response > 0) {
        setFormData({
          Name: '',
          Email: '',
          Telefono: '',
          Password: '',
          ConfirmPassword: '',
          FechaNacimiento: ''
        });
      }


      // Cerrar modal
      const modal = document.getElementById('modalRegister');
      if (modal) {
        const modalInstance = bootstrap.Modal.getInstance(modal);
        if (modalInstance) {
          modalInstance.hide();
        }
      }

    } catch (err) {
      console.error('Error en el registro:', err);
      // El error ya se maneja en el hook useAuth
    }
  };

  return (
    <div className="modal modal-account fade" id="modalRegister">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="flat-account">
            <div className="banner-account">
              <Image
                alt="banner"
                width={300}
                height={680}
                src="/images/section/banner-register.jpg"
              />
            </div>
            <form className="form-account" onSubmit={handleSubmit}>
              <div className="title-box">
                <h4>Register</h4>
                <span
                  className="close-modal icon-close"
                  data-bs-dismiss="modal"
                />
              </div>
              <div className="box">
                <fieldset className="box-fieldset">
                  <div className="ip-field">
                    <svg
                      className="icon"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4869 14.0435C12.9628 13.3497 12.2848 12.787 11.5063 12.3998C10.7277 12.0126 9.86989 11.8115 9.00038 11.8123C8.13086 11.8115 7.27304 12.0126 6.49449 12.3998C5.71594 12.787 5.03793 13.3497 4.51388 14.0435M13.4869 14.0435C14.5095 13.1339 15.2307 11.9349 15.5563 10.6056C15.8818 9.27625 15.7956 7.87934 15.309 6.60014C14.8224 5.32093 13.9584 4.21986 12.8317 3.44295C11.7049 2.66604 10.3686 2.25 9 2.25C7.63137 2.25 6.29508 2.66604 5.16833 3.44295C4.04158 4.21986 3.17762 5.32093 2.69103 6.60014C2.20443 7.87934 2.11819 9.27625 2.44374 10.6056C2.76929 11.9349 3.49125 13.1339 4.51388 14.0435M13.4869 14.0435C12.2524 15.1447 10.6546 15.7521 9.00038 15.7498C7.3459 15.7523 5.74855 15.1448 4.51388 14.0435M11.2504 7.31228C11.2504 7.90902 11.0133 8.48131 10.5914 8.90327C10.1694 9.32523 9.59711 9.56228 9.00038 9.56228C8.40364 9.56228 7.83134 9.32523 7.40939 8.90327C6.98743 8.48131 6.75038 7.90902 6.75038 7.31228C6.75038 6.71554 6.98743 6.14325 7.40939 5.72129C7.83134 5.29933 8.40364 5.06228 9.00038 5.06228C9.59711 5.06228 10.1694 5.29933 10.5914 5.72129C11.0133 6.14325 11.2504 6.71554 11.2504 7.31228Z"
                        stroke="#A3ABB0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      placeholder="Nombre"
                      value={formData.Name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </fieldset>
                <fieldset className="box-fieldset">
                  <div className="ip-field">
                    <svg
                      className="icon"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.3125 5.0625V12.9375C16.3125 13.3851 16.1347 13.8143 15.8182 14.1307C15.5018 14.4472 15.0726 14.625 14.625 14.625H3.375C2.92745 14.625 2.49822 14.4472 2.18176 14.1307C1.86529 13.8143 1.6875 13.3851 1.6875 12.9375V5.0625M16.3125 5.0625C16.3125 4.61495 16.1347 4.18573 15.8182 3.86926C15.5018 3.55279 15.0726 3.375 14.625 3.375H3.375C2.92745 3.375 2.49822 3.55279 2.18176 3.86926C1.86529 4.18573 1.6875 4.61495 1.6875 5.0625M16.3125 5.0625V5.24475C16.3125 5.53286 16.2388 5.81618 16.0983 6.06772C15.9578 6.31926 15.7553 6.53065 15.51 6.68175L9.885 10.143C9.61891 10.3069 9.31252 10.3937 9 10.3937C8.68748 10.3937 8.38109 10.3069 8.115 10.143L2.49 6.6825C2.24469 6.5314 2.04215 6.32001 1.90168 6.06847C1.7612 5.81693 1.68747 5.53361 1.6875 5.2455V5.0625"
                        stroke="#A3ABB0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="email"
                      className="form-control"
                      id="Email"
                      placeholder="Correo electrónico"
                      value={formData.Email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </fieldset>
                <fieldset className="box-fieldset">
                  <div className="ip-field">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="icon"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                    </svg>
                    <input
                      type="tel"
                      className="form-control"
                      id="Telefono"
                      placeholder="Teléfono"
                      value={formData.Telefono}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </fieldset>
                <fieldset className="box-fieldset">
                  <div className="ip-field">
                    <svg
                      className="icon"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.375 7.875V5.0625C12.375 4.16739 12.0194 3.30895 11.3865 2.67601C10.7535 2.04308 9.89511 1.6875 9 1.6875C8.10489 1.6875 7.24645 2.04308 6.61351 2.67601C5.98058 3.30895 5.625 4.16739 5.625 5.0625V7.875M5.0625 16.3125H12.9375C13.3851 16.3125 13.8143 16.1347 14.1307 15.8182C14.4472 15.5018 14.625 15.0726 14.625 14.625V9.5625C14.625 9.11495 14.4472 8.68573 14.1307 8.36926C13.8143 8.05279 13.3851 7.875 12.9375 7.875H5.0625C4.61495 7.875 4.18573 8.05279 3.86926 8.36926C3.55279 8.68573 3.375 9.11495 3.375 9.5625V14.625C3.375 15.0726 3.55279 15.5018 3.86926 15.8182C4.18573 16.1347 4.61495 16.3125 5.0625 16.3125Z"
                        stroke="#A3ABB0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="password"
                      className="form-control"
                      id="Password"
                      placeholder="Contraseña"
                      value={formData.Password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </fieldset>
                <fieldset className="box-fieldset">
                  <div className="ip-field">
                    <svg
                      className="icon"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.375 7.875V5.0625C12.375 4.16739 12.0194 3.30895 11.3865 2.67601C10.7535 2.04308 9.89511 1.6875 9 1.6875C8.10489 1.6875 7.24645 2.04308 6.61351 2.67601C5.98058 3.30895 5.625 4.16739 5.625 5.0625V7.875M5.0625 16.3125H12.9375C13.3851 16.3125 13.8143 16.1347 14.1307 15.8182C14.4472 15.5018 14.625 15.0726 14.625 14.625V9.5625C14.625 9.11495 14.4472 8.68573 14.1307 8.36926C13.8143 8.05279 13.3851 7.875 12.9375 7.875H5.0625C4.61495 7.875 4.18573 8.05279 3.86926 8.36926C3.55279 8.68573 3.375 9.11495 3.375 9.5625V14.625C3.375 15.0726 3.55279 15.5018 3.86926 15.8182C4.18573 16.1347 4.61495 16.3125 5.0625 16.3125Z"
                        stroke="#A3ABB0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="password"
                      className="form-control"
                      id="ConfirmPassword"
                      placeholder="Confirmar contraseña"
                      value={formData.ConfirmPassword}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </fieldset>
                <fieldset className="box-fieldset">
                  <div className="ip-field">
                    <svg xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16"
                      fill="currentColor"
                      className="icon"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                    </svg>
                    <input
                      type="date"
                      className="form-control"
                      id="FechaNacimiento"
                      placeholder="Fecha de nacimiento"
                      value={formData.FechaNacimiento}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </fieldset>
              </div>
              <div className="box box-btn">
                <button
                  type="submit"
                  className="tf-btn bg-color-primary w-100"
                  disabled={loading}
                >
                  {loading ? 'Registrando...' : 'Registrarse'}
                </button>

                {/* Mostrar mensajes de error o éxito */}
                {error && (
                  <div className="alert alert-danger mt-3" role="alert">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="alert alert-success mt-3" role="alert">
                    ¡Registro exitoso! Ya puedes iniciar sesión.
                  </div>
                )}
                <div className="text text-center">
                  Ya tengo una cuenta {"-> "}
                  <a
                    href="#modalLogin"
                    data-bs-toggle="modal"
                    className="text-color-primary"
                  >
                    Iniciar sesión
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}