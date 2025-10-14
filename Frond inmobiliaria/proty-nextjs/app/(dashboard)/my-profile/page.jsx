"use client";
import React, { useState, useEffect } from "react";
import { getCurrentUserId, isLoggedIn } from "@/components/api/useSession";

export default function page() {
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar si el usuario está logueado
    if (!isLoggedIn()) {
      window.location.href = '/';
      return;
    }

    // Obtener el ID del usuario
    const currentUserId = getCurrentUserId();
    setUserId(currentUserId);

    // Simular carga de datos del usuario
    setTimeout(() => {
      setUserData({
        id: currentUserId,
        name: "Usuario",
        email: "usuario@email.com",
        phone: "+58 424 225-8505",
        joinDate: new Date().toLocaleDateString()
      });
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="main-content w-100">
        <div className="main-content-inner">
          <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content w-100">
      <div className="main-content-inner">
        <div className="button-show-hide show-mb">
          <span className="body-1">Mi Perfil</span>
        </div>

        <div className="flat-profile">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="profile-header">
                  <h2 className="title">Mi Perfil</h2>
                  <p className="subtitle">Gestiona tu información personal</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8">
                <div className="profile-form">
                  <div className="card">
                    <div className="card-header">
                      <h5>Información Personal</h5>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input 
                              type="text" 
                              className="form-control" 
                              id="name" 
                              value={userData?.name || ''}
                              readOnly
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="email" className="form-label">Correo Electrónico</label>
                            <input 
                              type="email" 
                              className="form-control" 
                              id="email" 
                              value={userData?.email || ''}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="phone" className="form-label">Teléfono</label>
                            <input 
                              type="tel" 
                              className="form-control" 
                              id="phone" 
                              value={userData?.phone || ''}
                              readOnly
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="joinDate" className="form-label">Miembro desde</label>
                            <input 
                              type="text" 
                              className="form-control" 
                              id="joinDate" 
                              value={userData?.joinDate || ''}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <button type="button" className="btn btn-primary">
                              Editar Perfil
                            </button>
                            <button type="button" className="btn btn-outline-secondary ms-2">
                              Cambiar Contraseña
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="profile-sidebar">
                  <div className="card">
                    <div className="card-header">
                      <h5>Estadísticas</h5>
                    </div>
                    <div className="card-body">
                      <div className="stat-item">
                        <div className="stat-icon">
                          <i className="fas fa-home"></i>
                        </div>
                        <div className="stat-info">
                          <h6>Propiedades</h6>
                          <p>0</p>
                        </div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-icon">
                          <i className="fas fa-heart"></i>
                        </div>
                        <div className="stat-info">
                          <h6>Favoritos</h6>
                          <p>0</p>
                        </div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-icon">
                          <i className="fas fa-search"></i>
                        </div>
                        <div className="stat-info">
                          <h6>Búsquedas</h6>
                          <p>0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
